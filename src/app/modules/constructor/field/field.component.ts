import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TemplateField } from '../constructor.service';


@Component({
  selector: 'constructor-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
	@Input() field: Record<string, string>;
	@Input() fields: TemplateField[];
	@Output() update = new EventEmitter();
}
