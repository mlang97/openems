import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './../../shared/shared.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { AutarchyComponent } from './autarchy/autarchy.component';
import { AutarchyModalComponent } from './autarchy/modal/modal.component';
import { AwattarComponent } from './awattar/awattar.component';
import { AwattarChartComponent } from './awattar/modal/chart.component';
import { AwattarModalComponent } from './awattar/modal/modal.component';
import { ChannelthresholdComponent } from './channelthreshold/channelthreshold.component';
import { ChpsocModalComponent } from './chpsoc/chpsoc-modal/modal.page';
import { ChpSocComponent } from './chpsoc/chpsoc.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { ConsumptionModalComponent } from './consumption/modal/modal.component';
import { CorrentlyComponent } from './corrently/corrently.component';
import { CorrentlyChartComponent } from './corrently/modal/chart.component';
import { CorrentlyModalComponent } from './corrently/modal/modal.component';
import { EnergymonitorModule } from './energymonitor/energymonitor.module';
import { EvcsComponent } from './evcs/evcs.component';
import { EvcsModalComponent } from './evcs/modal/modal.page';
import { EvcsPopoverComponent } from './evcs/modal/popover/popover.page';
import { EvcsClusterComponent } from './evcsCluster/evcsCluster.component';
import { EvcsChart } from './evcsCluster/modal/evcs-chart/evcs.chart';
import { ModalComponentEvcsCluster } from './evcsCluster/modal/evcsCluster-modal.page';
import { FixDigitalOutputComponent } from './fixdigitaloutput/fixdigitaloutput.component';
import { FixDigitalOutputModalComponent } from './fixdigitaloutput/modal/modal.component';
import { GridComponent } from './grid/grid.component';
import { GridModalComponent } from './grid/modal/modal.component';
import { HeatingElementComponent } from './heatingelement/heatingelement.component';
import { HeatingElementModalComponent } from './heatingelement/modal/modal.component';
import { InfoComponent } from './info/info.component';
import { LiveComponent } from './live.component';
import { OfflineComponent } from './offline/offline.component';
import { PartnerComponent } from './partner/partner.component';
import { AsymmetricPeakshavingComponent } from './peakshaving/asymmetric/asymmetricpeakshaving.component';
import { AsymmetricPeakshavingModalComponent } from './peakshaving/asymmetric/modal/modal.component';
import { SymmetricPeakshavingModalComponent } from './peakshaving/symmetric/modal/modal.component';
import { SymmetricPeakshavingComponent } from './peakshaving/symmetric/symmetricpeakshaving.component';
import { ProductionModalComponent } from './production/modal/modal.component';
import { ProductionComponent } from './production/production.component';
import { SelfconsumptionModalComponent } from './selfconsumption/modal/modal.component';
import { SelfConsumptionComponent } from './selfconsumption/selfconsumption.component';
import { SinglethresholdModalComponent } from './singlethreshold/modal/modal.component';
import { SinglethresholdComponent } from './singlethreshold/singlethreshold.component';
import { StorageModalComponent } from './storage/modal/modal.component';
import { StorageComponent } from './storage/storage.component';
import { HeatingelementPopoverComponent } from './heatingelement/modal/popover/popover.page';

@NgModule({
  imports: [
    AdvertisementModule,
    BrowserAnimationsModule,
    BrowserModule,
    EnergymonitorModule,
    SharedModule,
  ],
  entryComponents: [
    AsymmetricPeakshavingModalComponent,
    AutarchyModalComponent,
    AwattarModalComponent,
    ChpsocModalComponent,
    ChpsocModalComponent,
    ConsumptionModalComponent,
    CorrentlyModalComponent,
    EvcsModalComponent,
    EvcsPopoverComponent,
    FixDigitalOutputModalComponent,
    GridModalComponent,
    HeatingElementModalComponent,
    HeatingelementPopoverComponent,
    ModalComponentEvcsCluster,
    ProductionModalComponent,
    SelfconsumptionModalComponent,
    SinglethresholdModalComponent,
    StorageModalComponent,
    SymmetricPeakshavingModalComponent,
  ],
  declarations: [
    AsymmetricPeakshavingComponent,
    AsymmetricPeakshavingModalComponent,
    AutarchyComponent,
    AutarchyModalComponent,
    AwattarChartComponent,
    AwattarComponent,
    AwattarModalComponent,
    ChannelthresholdComponent,
    ChpSocComponent,
    ChpsocModalComponent,
    ConsumptionComponent,
    ConsumptionModalComponent,
    CorrentlyChartComponent,
    CorrentlyComponent,
    CorrentlyModalComponent,
    EvcsChart,
    EvcsClusterComponent,
    EvcsComponent,
    EvcsModalComponent,
    EvcsPopoverComponent,
    FixDigitalOutputComponent,
    FixDigitalOutputModalComponent,
    FixDigitalOutputModalComponent,
    GridComponent,
    GridModalComponent,
    HeatingElementComponent,
    HeatingElementModalComponent,
    HeatingelementPopoverComponent,
    InfoComponent,
    LiveComponent,
    ModalComponentEvcsCluster,
    OfflineComponent,
    PartnerComponent,
    ProductionComponent,
    ProductionModalComponent,
    SelfConsumptionComponent,
    SelfconsumptionModalComponent,
    SinglethresholdComponent,
    SinglethresholdModalComponent,
    StorageComponent,
    StorageModalComponent,
    SymmetricPeakshavingComponent,
    SymmetricPeakshavingModalComponent,
  ]
})
export class LiveModule { }
