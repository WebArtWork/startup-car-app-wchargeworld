import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Worder {
	_id: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class WorderService {
	worders: Worder[] = [];

	_worders: any = {};

	new(): Worder {
		return {} as Worder;
	}

	constructor(
		private mongo: MongoService,
		private alert: AlertService
	) {
		this.worders = mongo.get('worder', {}, (arr: any, obj: any) => {
			this._worders = obj;
		});
	}

	create(
		worder: Worder = this.new(),
		callback = (created: Worder) => {},
		text = 'worder has been created.'
	) {
		if (worder._id) {
			this.save(worder);
		} else {
			this.mongo.create('worder', worder, (created: Worder) => {
				callback(created);
				this.alert.show({ text });
			});
		}
	}

	doc(worderId: string): Worder {
		if(!this._worders[worderId]){
			this._worders[worderId] = this.mongo.fetch('worder', {
				query: {
					_id: worderId
				}
			});
		}
		return this._worders[worderId];
	}

	update(
		worder: Worder,
		callback = (created: Worder) => {},
		text = 'worder has been updated.'
	): void {
		this.mongo.afterWhile(worder, ()=> {
			this.save(worder, callback, text);
		});
	}

	save(
		worder: Worder,
		callback = (created: Worder) => {},
		text = 'worder has been updated.'
	): void {
		this.mongo.update('worder', worder, () => {
			if(text) this.alert.show({ text, unique: worder });
		});
	}

	delete(
		worder: Worder,
		callback = (created: Worder) => {},
		text = 'worder has been deleted.'
	): void {
		this.mongo.delete('worder', worder, () => {
			if(text) this.alert.show({ text });
		});
	}
}
