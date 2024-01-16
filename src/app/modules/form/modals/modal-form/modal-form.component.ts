import { Component, TemplateRef } from '@angular/core';
import { FormModalButton, FormService } from '../../form.service';
import { FormInterface } from '../../interfaces/form.interface';
import { CoreService } from 'wacom';

@Component({
	templateUrl: './modal-form.component.html',
	styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {
	form: FormInterface;

	submition: Record<string, unknown>;

	set(submition: Record<string, unknown>) {
		this._core.copy(submition, this.submition);
		this._core.copy(submition['data'], this.submition['data']);
	}

	close: () => void;

	submit: (form: any) => void;

	change: (form: any) => void;

	buttons: FormModalButton[];

	buttonRef: TemplateRef<any>;

	constructor(private _fs: FormService, private _core: CoreService) {
		const button = this._fs.getComponent('Button');

		if (button?.ref) {
			this.buttonRef = button.ref;
		}
	}
}
