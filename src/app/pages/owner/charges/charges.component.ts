import { Component } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';

import { WchargeService, Wcharge } from 'src/app/core/services/wcharge.service';
import { CoreService } from 'wacom';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
	templateUrl: './charges.component.html',
	styleUrls: ['./charges.component.scss']
})
export class ChargesComponent {
	columns = ['qr', 'name', 'description'];

	form: FormInterface = this._form.getForm('charge');

	config = {
		update: (doc: Wcharge) => {
			this._form
				.modal<Wcharge>(this.form, [], doc)
				.then((updated: Wcharge) => {
					this._core.copy(updated, doc);

					this._ws.save(doc);
				});
		}
	};

	get rows(): Wcharge[] {
		return this._ws._byAuthor[this._us.user._id as string] || [];
	}

	constructor(
		private _us: UserService,
		private _form: FormService,
		private _core: CoreService,
		private _ws: WchargeService
	) {}
}
