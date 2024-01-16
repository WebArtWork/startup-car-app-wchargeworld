import { Component } from '@angular/core';
import {
	ConstructorService,
	Template,
	TemplateComponent,
	TemplateField,
	TemplateSection
} from './constructor.service';

@Component({
	templateUrl: './constructor.component.html',
	styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent {
	template(name: string): Template {
		return (
			this.cs.templates && this.cs.templates[
				this.cs.templates?.map((t) => t.name).indexOf(name)
			] || ({} as Template)
		);
	}

	templateComponent(template: string, name: string): TemplateComponent {
		const _template = this.template(template);

		return (
			_template.components && _template.components[
				_template.components?.map((t) => t.name).indexOf(name)
			] || ({} as TemplateComponent)
		);
	}

	templateSection(template: string, folder: string): TemplateSection {
		const _template = this.template(template);

		return (
			_template.sections[
				_template.sections.map((t) => t.folder).indexOf(folder)
			] || ({} as TemplateSection)
		);
	}

	constructor(public cs: ConstructorService) {}
}
