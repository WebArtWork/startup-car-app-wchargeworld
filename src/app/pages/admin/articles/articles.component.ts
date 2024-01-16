import { Component } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';

import { ArticleService, Article } from 'src/app/core/services/article.service';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/modules/translate/translate.service';
import { AlertService, CoreService } from 'wacom';

@Component({
	templateUrl: './articles.component.html',
	styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('article', {
		formId: 'article',
		title: 'Article',
		components: [
			{
				name: 'Text',
				key: 'name',
				focused: true,
				fields: [
					{
						name: 'Placeholder',
						value: 'fill article title'
					},
					{
						name: 'Label',
						value: 'Title'
					}
				]
			},
			{
				name: 'Photo',
				key: 'thumb',
				fields: [
					{
						name: 'Label',
						value: 'Header picture'
					}
				]
			},
			{
				name: 'Text',
				key: 'short',
				fields: [
					{
						name: 'Placeholder',
						value: 'fill article short description'
					},
					{
						name: 'Label',
						value: 'Short Description'
					}
				]
			},
			{
				name: 'Text',
				key: 'description',
				fields: [
					{
						name: 'Placeholder',
						value: 'fill article description'
					},
					{
						name: 'Label',
						value: 'Description'
					}
				]
			},
			{
				name: 'Text',
				key: 'reference',
				fields: [
					{
						name: 'Placeholder',
						value: 'fill article reference'
					},
					{
						name: 'Label',
						value: 'Reference'
					}
				]
			}
		]
	});

	config = {
		create: () => {
			this._form
				.modal<Article>(this.form, {
					label: 'Create',
					click: (created: unknown, close: () => void) => {
						this._as.create(created as Article);

						close();
					}
				})
				.then(this._as.create.bind(this));
		},
		update: (doc: Article) => {
			this._form
				.modal<Article>(this.form, [], doc)
				.then((updated: Article) => {
					this._core.copy(updated, doc);

					this._as.save(doc);
				});
		},
		delete: (bird: Article) => {
			this._alert.question({
				text: this._translate.translate(
					'Articles.Are you sure you want to delete this Article?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: () => {
							this._as.delete(bird);
						}
					}
				]
			});
		}
	};

	get rows(): Article[] {
		return this._as.articles;
	}

	constructor(
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService,
		private _as: ArticleService
	) {}
}
