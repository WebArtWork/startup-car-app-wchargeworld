import { TemplateRef } from "@angular/core";

export interface TemplateFieldInterface {
	name: string;
	value: unknown;
}

export interface TemplateComponentInterface {
	name: string;
	ref: TemplateRef<any>;
	fields: string[];
}

export interface FormComponentInterface {
	name: string; // template name
	templateRef?: TemplateRef<any>;

	key?: string; // submition location
	root?: boolean; // if key should be applied to data or root document

	focused?: boolean;
	hidden?: boolean;
	class?: string;

	components?: FormComponentInterface[];
	fields: TemplateFieldInterface[];
}
