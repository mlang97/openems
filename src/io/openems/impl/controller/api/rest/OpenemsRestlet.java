/*******************************************************************************
 * OpenEMS - Open Source Energy Management System
 * Copyright (c) 2016 FENECON GmbH and contributors
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
package io.openems.impl.controller.api.rest;

import org.restlet.Application;
import org.restlet.Request;
import org.restlet.Response;
import org.restlet.Restlet;
import org.restlet.security.Role;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.openems.api.security.User;

public abstract class OpenemsRestlet extends Restlet {
	protected final Logger log;

	public OpenemsRestlet() {
		this.log = LoggerFactory.getLogger(this.getClass());
	}

	protected boolean isAuthenticatedAsUser(Request request, User user) {
		if (user.equals(User.ADMIN)) {
			// ADMIN is allowed to do anything
			return true;
		}
		return request.getClientInfo().getRoles().contains(Role.get(Application.getCurrent(), user.getName()));
	}

	@Override public void handle(Request request, Response response) {
		super.handle(request, response);
	}
}
