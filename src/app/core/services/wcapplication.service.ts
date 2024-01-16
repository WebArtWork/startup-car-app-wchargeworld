import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Wcapplication {
	_id: string;
	author: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class WcapplicationService {
	wcapplications: Wcapplication[] = [];

	_wcapplications: any = {};

	new(): Wcapplication {
		return {} as Wcapplication;
	}

	constructor(
		private mongo: MongoService,
		private alert: AlertService
	) {
		this.wcapplications = mongo.get('wcapplication', {}, (arr: any, obj: any) => {
			this._wcapplications = obj;
		});
	}

	create(
		wcapplication: Wcapplication = this.new(),
		callback = (created: Wcapplication) => {},
		text = 'wcapplication has been created.'
	) {
		if (wcapplication._id) {
			this.save(wcapplication);
		} else {
			this.mongo.create('wcapplication', wcapplication, (created: Wcapplication) => {
				callback(created);
				this.alert.show({ text });
			});
		}
	}

	doc(wcapplicationId: string): Wcapplication {
		if(!this._wcapplications[wcapplicationId]){
			this._wcapplications[wcapplicationId] = this.mongo.fetch('wcapplication', {
				query: {
					_id: wcapplicationId
				}
			});
		}
		return this._wcapplications[wcapplicationId];
	}

	update(
		wcapplication: Wcapplication,
		callback = (created: Wcapplication) => {},
		text = 'wcapplication has been updated.'
	): void {
		this.mongo.afterWhile(wcapplication, ()=> {
			this.save(wcapplication, callback, text);
		});
	}

	save(
		wcapplication: Wcapplication,
		callback = (created: Wcapplication) => {},
		text = 'wcapplication has been updated.'
	): void {
		this.mongo.update('wcapplication', wcapplication, () => {
			if(text) this.alert.show({ text, unique: wcapplication });
		});
	}

	delete(
		wcapplication: Wcapplication,
		callback = (created: Wcapplication) => {},
		text = 'wcapplication has been deleted.'
	): void {
		this.mongo.delete('wcapplication', wcapplication, () => {
			if(text) this.alert.show({ text });
		});
	}
}
