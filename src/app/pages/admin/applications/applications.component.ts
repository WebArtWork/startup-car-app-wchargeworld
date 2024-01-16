import { Component } from '@angular/core';
import {
	FormService
} from 'src/app/modules/form/form.service';

import { WcapplicationService, Wcapplication } from "src/app/core/services/wcapplication.service";
import { TranslateService } from 'src/app/modules/translate/translate.service';
import { AlertService, CoreService } from 'wacom';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { WchargeService } from 'src/app/core/services/wcharge.service';

@Component({
	templateUrl: './applications.component.html',
	styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {
	columns = ['approve', 'name', 'description'];

	form: FormInterface = this._form.getForm('application');

	config = {};

	approve(application: Wcapplication) {
		if (!this.approved(application._id)) {
			this._wc.create({
				name: application.name,
				author: application.author,
				application: application._id,
				description: application.description
			});
		}
	}

	approved(applicationId: string): boolean {
		return this._wc._byApplication[applicationId]?.length;
	}

	get rows(): Wcapplication[] {
		return this._ws.wcapplications;
	}

	constructor(
		private _ws: WcapplicationService,
		private _wc: WchargeService,
		private _form: FormService
	) {}
}
