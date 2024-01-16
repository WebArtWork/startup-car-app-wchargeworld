import { Component, Injectable } from '@angular/core';
import { MongoService, AlertService, HttpService } from 'wacom';

export interface ConstructorComponent {
	folder: string;
	field: Record<string, string>;
}

export interface ConstructorSection {
	folder: string;
	field: Record<string, string>;
	components: ConstructorComponent[];
}

export interface Constructor {
	_id: string;
	name: string;
	template: string;
	domain: string;
	url: string;
	description: string;
	field: Record<string, string>;
	components: ConstructorComponent[];
	sections: ConstructorSection[];
}

export interface TemplateField {
	name: string;
	default: string;
}
export interface TemplateComponent {
	name: string;
	folder: string;
	fields: TemplateField[];
}

export interface TemplateSection {
	name: string;
	folder: string;
	fields: TemplateField[];
	components: TemplateComponent[];
}
export interface Template {
	name: string;
	fields: TemplateField[];
	components: TemplateComponent[];
	sections: TemplateSection[];
}

@Injectable({
	providedIn: 'root'
})
export class ConstructorService {
	templates: Template[] = [];
	constructors: Constructor[] = [];
	_constructors: any = {};

	new(): Constructor {
		const constructor = {} as Constructor;

		constructor.sections = [];

		return constructor;
	}

	new_section(): ConstructorSection {
		return {
			folder: '',
			field: {},
			components: []
		} as ConstructorSection;
	}

	new_component(): ConstructorComponent {
		return {
			folder: '',
			field: {}
		} as ConstructorComponent;
	}

	constructor(
		private mongo: MongoService,
		private alert: AlertService,
		private _http: HttpService
	) {
		this.constructors = mongo.get(
			'constructor',
			{
				replace: {
					components: (
						components: ConstructorComponent[],
						cb: (components: ConstructorComponent[]) => void
					) => {
						if (!components) {
							components = [];
						}

						for (const component of components) {
							if (!component.field) {
								component.field = {};
							}
						}

						cb(components);
					},
					sections: (
						sections: ConstructorSection[],
						cb: (sections: ConstructorSection[]) => void
					) => {
						if (!sections) {
							sections = [];
						}

						for (const section of sections) {
							if (!section.field) {
								section.field = {};
							}
							if (!section.components) {
								section.components = [];
							}
							for (const component of section.components) {
								if (!component.field) {
									component.field = {};
								}
							}
						}

						cb(sections);
					},
					field: mongo.beObj
				}
			},
			(arr: any, obj: any) => {
				this._constructors = obj;
			}
		);

		this._http.get(
			'/api/constructor',
			(templates) => (this.templates = templates)
		);
		setTimeout(() => {
			console.log(this.templates);
		}, 1000);
	}

	create(
		constructor: Constructor = this.new(),
		callback = (created: Constructor) => {},
		text = 'constructor has been created.'
	) {
		if (constructor._id) {
			this.save(constructor);
		} else {
			this.mongo.create(
				'constructor',
				constructor,
				(created: Constructor) => {
					callback(created);

					this.alert.show({ text });
				}
			);
		}
	}

	doc(constructorId: string): Constructor {
		if (!this._constructors[constructorId]) {
			this._constructors[constructorId] = this.mongo.fetch(
				'constructor',
				{
					query: {
						_id: constructorId
					}
				}
			);
		}

		return this._constructors[constructorId];
	}

	update(
		constructor: Constructor,
		callback = (created: Constructor) => {},
		text = 'constructor has been updated.'
	): void {
		this.mongo.afterWhile(constructor, () => {
			this.save(constructor, callback, text);
		});
	}

	save(
		constructor: Constructor,
		callback = (created: Constructor) => {},
		text = 'constructor has been updated.'
	): void {
		this.mongo.update('constructor', constructor, () => {
			if (text) this.alert.show({ text, unique: constructor });
		});
	}

	delete(
		constructor: Constructor,
		callback = (created: Constructor) => {},
		text = 'constructor has been deleted.'
	): void {
		this.mongo.delete('constructor', constructor, () => {
			if (text) this.alert.show({ text });
		});
	}
}
