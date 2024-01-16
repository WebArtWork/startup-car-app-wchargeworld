import { Component } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';

import {
	WcapplicationService,
	Wcapplication
} from 'src/app/core/services/wcapplication.service';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/modules/translate/translate.service';
import { AlertService, CoreService } from 'wacom';

@Component({
	templateUrl: './applications.component.html',
	styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('application');

	config = {
		create: () => {
			this._form
				.modal<Wcapplication>(this.form, {
					label: 'Create',
					click: (created: unknown, close: () => void) => {
						this._ws.create(created as Wcapplication);

						close();
					}
				})
				.then(this._ws.create.bind(this));
		},
		update: (doc: Wcapplication) => {
			this._form
				.modal<Wcapplication>(this.form, [], doc)
				.then((updated: Wcapplication) => {
					this._core.copy(updated, doc);

					this._ws.save(doc);
				});
		},
		delete: (bird: Wcapplication) => {
			this._alert.question({
				text: this._translate.translate(
					'Applications.Are you sure you want to delete this Application?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: () => {
							this._ws.delete(bird);
						}
					}
				]
			});
		}
	};

	get rows(): Wcapplication[] {
		return this._ws.wcapplications;
	}

	constructor(
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService,
		private _ws: WcapplicationService
	) {}
}
