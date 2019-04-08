package io.openems.edge.controller.api.modbus;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

import io.openems.edge.common.channel.AccessMode;

@ObjectClassDefinition( //
		name = "Controller Api Modbus/TCP", //
		description = "This controller provides a Modbus/TCP api.")
@interface Config {
	String id() default "ctrlApiModbusTcp0";

	boolean enabled() default true;

	@AttributeDefinition(name = "Port", description = "Port on which the server should listen.")
	int port() default ModbusTcpApi.DEFAULT_PORT;

	@AttributeDefinition(name = "Access-Mode", description = "Only allow access to Read-Only/Read-Write/Write-Only channels.")
	AccessMode accessMode() default AccessMode.READ_WRITE;

	@AttributeDefinition(name = "Component-IDs", description = "Components that should be made available via Modbus.")
	String[] component_ids() default { "_sum" };

	@AttributeDefinition(name = "Api-Timeout", description = "Sets the timeout in seconds for updates on Channels set by this Api.")
	int apiTimeout() default 60;

	@AttributeDefinition(name = "Max concurrent connections", description = "Sets the maximum number of concurrent connections via Modbus.")
	int maxConcurrentConnections() default ModbusTcpApi.DEFAULT_MAX_CONCURRENT_CONNECTIONS;

	@AttributeDefinition(name = "Components target filter", description = "This is auto-generated by 'Component-IDs'.")
	String Component_target() default "";

	String webconsole_configurationFactory_nameHint() default "Controller Api Modbus/TCP [{id}]";
}