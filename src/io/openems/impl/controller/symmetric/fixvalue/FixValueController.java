/*******************************************************************************
 * OpenEMS - Open Source Energy Management System
 * Copyright (c) 2016, 2017 FENECON GmbH and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * Contributors:
 *   FENECON GmbH - initial API and implementation and initial documentation
 *******************************************************************************/
package io.openems.impl.controller.symmetric.fixvalue;

import java.util.List;

import io.openems.api.channel.ConfigChannel;
import io.openems.api.controller.Controller;
import io.openems.api.doc.ConfigInfo;
import io.openems.api.doc.ThingInfo;
import io.openems.api.exception.InvalidValueException;
import io.openems.api.exception.WriteChannelException;

@ThingInfo("Set fixed active and reactive power for symmetric ESS")
public class FixValueController extends Controller {

	@ConfigInfo(title = "All storage, which should be set to the p and q values.", type = Ess.class)
	public ConfigChannel<List<Ess>> esss = new ConfigChannel<List<Ess>>("esss", this);

	@ConfigInfo(title = "The activePower to set for each storage.", type = Integer.class)
	public ConfigChannel<Integer> p = new ConfigChannel<Integer>("p", this);
	@ConfigInfo(title = "The reactivePower to set for each storage.", type = Integer.class)
	public ConfigChannel<Integer> q = new ConfigChannel<Integer>("q", this);

	public FixValueController() {
		super();
	}

	public FixValueController(String thingId) {
		super(thingId);
	}

	@Override
	public void run() {
		try {
			for (Ess ess : esss.value()) {
				try {
					ess.setActivePower.pushWrite((long) p.value());
					ess.setReactivePower.pushWrite((long) q.value());
				} catch (WriteChannelException | InvalidValueException e) {
					log.error("Failed to write fixed P/Q value for Ess " + ess.id, e);
				}
			}
		} catch (InvalidValueException e) {
			log.error("No ess found.", e);
		}
	}

}
