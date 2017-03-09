import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, FormArray, AbstractControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { WebsocketService } from '../../service/websocket.service';
import { Device } from '../../service/device';
import { AbstractConfigForm, ConfigureRequest, ConfigureUpdateRequest, ConfigureCreateRequest, ConfigureDeleteRequest } from './abstractconfigform';


export abstract class AbstractConfig implements OnInit {

  protected device: Device;
  private deviceSubscription: Subscription;
  protected config = null;

  constructor(
    private route: ActivatedRoute,
    private websocketService: WebsocketService,
    protected formBuilder: FormBuilder
  ) { }

  protected abstract initForm(config);

  ngOnInit() {
    this.deviceSubscription = this.websocketService.setCurrentDevice(this.route.snapshot.params).subscribe(device => {
      this.device = device;
      if (device && device.config) {
        device.config.subscribe(config => {
          this.config = config;
          this.initForm(config);
        });
      }
    });
  }

  ngOnDestroy() {
    this.deviceSubscription.unsubscribe();
  }

  protected buildForm(item: any, ignoreKeys?: string | string[]): FormControl | FormGroup | FormArray {
    if (typeof item === "function") {
      // ignore
    } else if (item instanceof Array) {
      return this.buildFormArray(item, ignoreKeys);
    } else if (item instanceof Object) {
      return this.buildFormGroup(item, ignoreKeys);
    } else {
      return this.buildFormControl(item, ignoreKeys);
    }
  }

  private buildFormGroup(object: any, ignoreKeys?: string | string[]): FormGroup {
    let group: { [key: string]: any } = {};
    for (let key in object) {
      if ((typeof ignoreKeys === "string" && key == ignoreKeys) || (typeof ignoreKeys === "object") && ignoreKeys.some(ignoreKey => ignoreKey === key)) {
        // ignore
      } else {
        var form = this.buildForm(object[key], ignoreKeys);
        if (form) {
          group[key] = form;
        }
      }
    }
    return this.formBuilder.group(group);
  }

  private buildFormControl(item: Object, ignoreKeys?: string | string[]): FormControl {
    return this.formBuilder.control(item);
  }

  private buildFormArray(array: any[], ignoreKeys?: string | string[]): FormArray {
    var builder: any[] = [];
    for (let item of array) {
      var control = this.buildForm(item, ignoreKeys);
      if (control) {
        builder.push(control);
      }
    }
    return this.formBuilder.array(builder);
  }

  protected save(form: FormGroup): void {
    let requests;
    if (form["_meta_new"]) {
      requests = this.getConfigureCreateRequests(form);
    } else {
      requests = this.getConfigureUpdateRequests(form);
    }
    this.send(requests);
    form["_meta_new"] = false;
    form.markAsPristine();
  }

  protected abstract getConfigureCreateRequests(form: FormGroup): ConfigureRequest[];

  protected send(requests: ConfigureRequest[]) {
    if (requests.length > 0) {
      this.device.send({
        configure: requests
      });
    }
  }

  protected delete(form: FormArray, index: number): void {
    if (form.controls[index]["_meta_new"]) {
      // newly created. No need to delete it at server
      form.removeAt(index);
      form.markAsDirty();
    } else {
      let requests = this.getConfigDeleteRequests(form.controls[index]);
      console.log(requests);
      this.send(requests);
      form.markAsPristine();
    }
  }

  protected getConfigDeleteRequests(form: AbstractControl): ConfigureRequest[] {
    let requests: ConfigureRequest[] = [];
    if (form instanceof FormGroup) {
      requests.push(<ConfigureDeleteRequest>{
        mode: "delete",
        thing: form.controls["id"].value
      });
    }

    return requests;
  }

  protected getConfigureUpdateRequests(form: AbstractControl): ConfigureRequest[] {
    let requests: ConfigureRequest[] = [];
    if (form instanceof FormGroup) {
      let formControl = form.controls;
      let id = formControl['id'].value;
      for (let key in formControl) {
        if (formControl[key].dirty) {
          // console.log(formControl[key]);
          let value = formControl[key].value;
          // console.log(value, typeof value);
          // if (typeof value === "object") {
          //     console.log("X");
          //     // value is an object -> call getConfigureRequests for sub-object
          //     return this.getConfigureUpdateRequests(formControl[key], index);
          // }
          requests.push(<ConfigureUpdateRequest>{
            mode: "update",
            thing: id,
            channel: key,
            value: value
          });
        }
      }
    }

    console.log(requests);
    return requests;
  }

  protected buildValue(form: FormGroup): Object {
    let builder: Object = {};
    for (let key in form.controls) {
      builder[key] = form.controls[key].value;
    }
    return builder;
  }


}