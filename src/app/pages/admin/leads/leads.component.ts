import { Component } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { FormService } from 'src/app/modules/form/form.service';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/modules/translate/translate.service';
import { AlertService, CoreService } from 'wacom';

@Component({
	templateUrl: './leads.component.html',
	styleUrls: ['./leads.component.scss']
})
export class LeadsComponent {
	form: FormInterface = this._form.getForm('user');

	config = {};

	columns = ['name', 'email', 'status'];

	constructor(
		private _form: FormService,
		public us: UserService
	) {}
}
