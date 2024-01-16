import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CoreService } from 'wacom';
import { FormComponentInterface } from '../interfaces/component.interface';
import { FormInterface } from '../interfaces/form.interface';

interface Submission {
	data: Record<string, unknown>;
	[key: string]: unknown;
}

@Component({
	selector: 'wform',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent {
	@Input() config: FormInterface;

	@Input() submition: Record<string, unknown> = {};

	@Input() form = this._fb.group({});

	@Output() wChange = new EventEmitter();

	@Output() wSubmit = new EventEmitter();

	constructor(private _core: CoreService, private _fb: FormBuilder) {}

	component(
		key: string,
		components = this.config.components
	): FormComponentInterface | false {
		for (const component of components) {
			if (component.key === key) {
				return component;
			}

			if (component.components?.length) {
				const deepComponent = this.component(key, component.components);

				if (deepComponent) {
					return deepComponent;
				}
			}
		}

		return false;
	}

	_values() {
		const submition: Submission = {
			data: {}
		};

		for (const field in this.form.controls) {
			const component = this.component(field);

			if (component && component.root) {
				submition[field] = this.form.get(field)?.value;
			} else {
				submition.data[field] = this.form.get(field)?.value;
			}
		}

		return submition;
	}

	onSubmit(): void {
		this._core.afterWhile(this, () => {
			this.wSubmit.emit(this._values());
		});
	}

	onChange(): void {
		this._core.afterWhile(this, () => {
			this.wChange.emit(this._values());
		});
	}

	onClick(/* component: FormComponentInterface */): void {
		// if (typeof component.click === 'function') {
		// 	component.click(this._values());
		// }
	}
}
