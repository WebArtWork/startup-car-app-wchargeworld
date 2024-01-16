import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output
} from '@angular/core';
import { FormComponentInterface } from '../../interfaces/component.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { FormService } from '../../form.service';
import { FormInterface } from '../../interfaces/form.interface';

interface Data {
	field: Record<string, unknown>;
	value: unknown;
}

@Component({
	selector: 'form-component',
	templateUrl: './form-component.component.html',
	styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
	@Input() component: FormComponentInterface;

	@Input() config: FormInterface;

	@Input() form: FormGroup;

	@Input() control: FormControl;

	@Input() submition: Record<string, unknown> = {};

	@Output() wSubmit = new EventEmitter();

	@Output() wChange = new EventEmitter();

	@Output() wClick = new EventEmitter();

	get hasComponents(): boolean {
		return Array.isArray(this.component.components);
	}

	data: Data;

	constructor(private _form: FormService) {}

	ngOnInit(): void {
		const data: Data = {
			field: {}
		} as Data;

		if (Array.isArray(this.component.fields)) {
			for (const field of this.component.fields) {
				data.field[field.name] = field.value;
			}
		}

		if (this.component.key && this.submition !== undefined) {
			if (!this.component.root && this.submition['data']) {
				data.value = (
					this.submition['data'] as Record<string, unknown>
				)[this.component.key];
			} else {
				data.value = this.submition[this.component.key];
			}
		}

		if (this.component.key && !this.control) {
			this.control = new FormControl(data.value);

			this.control.valueChanges.subscribe((value: unknown) => {
				this.submition[this.component.key as string] = value;

				this.wChange.emit();
			});

			this.form.addControl(this.component.key, this.control);
		}

		this.data = data;

		if (!this.component.templateRef) {
			this._form.addRef(this.component);
		}
	}
}
