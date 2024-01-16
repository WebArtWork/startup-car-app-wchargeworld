import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Wcharge {
	_id?: string;
	name: string;
	author: string;
	application: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class WchargeService {
	wcharges: Wcharge[] = [];

	_wcharges: any = {};
	_byApplication: any = {};
	_byAuthor: any = {};

	new(): Wcharge {
		return {} as Wcharge;
	}

	constructor(
		private mongo: MongoService,
		private alert: AlertService
	) {
		this.wcharges = mongo.get('wcharge', {
			groups: 'author application'
		}, (arr: any, obj: any) => {
			this._wcharges = obj;
			this._byApplication = obj.application;
			this._byAuthor = obj.author;
		});
	}

	create(
		wcharge: Wcharge = this.new(),
		callback = (created: Wcharge) => {},
		text = 'wcharge has been created.'
	) {
		if (wcharge._id) {
			this.save(wcharge);
		} else {
			this.mongo.create('wcharge', wcharge, (created: Wcharge) => {
				callback(created);
				this.alert.show({ text });
			});
		}
	}

	doc(wchargeId: string): Wcharge {
		if(!this._wcharges[wchargeId]){
			this._wcharges[wchargeId] = this.mongo.fetch('wcharge', {
				query: {
					_id: wchargeId
				}
			});
		}
		return this._wcharges[wchargeId];
	}

	update(
		wcharge: Wcharge,
		callback = (created: Wcharge) => {},
		text = 'wcharge has been updated.'
	): void {
		this.mongo.afterWhile(wcharge, ()=> {
			this.save(wcharge, callback, text);
		});
	}

	save(
		wcharge: Wcharge,
		callback = (created: Wcharge) => {},
		text = 'wcharge has been updated.'
	): void {
		this.mongo.update('wcharge', wcharge, () => {
			if(text) this.alert.show({ text, unique: wcharge });
		});
	}

	delete(
		wcharge: Wcharge,
		callback = (created: Wcharge) => {},
		text = 'wcharge has been deleted.'
	): void {
		this.mongo.delete('wcharge', wcharge, () => {
			if(text) this.alert.show({ text });
		});
	}
}
