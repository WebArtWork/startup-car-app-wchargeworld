import {
	Any,
	MongoService,
	FileService,
	HttpService,
	AlertService,
	CoreService,
	StoreService
} from 'wacom';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

interface AnyUser {
	[key: string]: User;
}

@Injectable({
	providedIn: 'root'
})
export class UserService {
	mode = '';

	set(mode = ''): void {
		if (mode) {
			this._store.set('mode', mode);

			(document.body.parentNode as HTMLElement).classList.add(mode);
		} else {
			this._store.remove('mode');

			(document.body.parentNode as HTMLElement).classList.remove('dark');
		}

		this.mode = mode;
	}

	user: User = this.new();

	roles = ['admin', 'owner'];

	role(role: string): boolean {
		return !!this.user.is[role];
	}

	users: User[] = [];

	leads: User[] = [];

	_users: AnyUser = {};

	constructor(
		private _alert: AlertService,
		private _mongo: MongoService,
		private _store: StoreService,
		private _http: HttpService,
		private _file: FileService,
		private _core: CoreService,
		private _router: Router,
	) {
		this._store.get('mode', (mode: string) => {
			if (mode) {
				this.mode = mode;

				(document.body.parentNode as HTMLElement).classList.add(mode);
			}
		});

		this._file.add({
			id: 'userAvatarUrl',
			resize: 256,
			part: 'user',
			cb: (file: string | File) => {
				if (typeof file != 'string') return;

				this.user.thumb = file;
			}
		});

		this._mongo.config('user', {
			replace: {
				data: (data: Any, cb: (data: Any) => Any) => {
					if (typeof data != 'object') data = {};

					cb(data);
				},
				is: this._mongo.beObj
			},
			query: {
				leads: (doc: User) => doc.data['partnership']
			}
		});

		if (localStorage.getItem('waw_user')) {
			this.user = JSON.parse(localStorage.getItem('waw_user') as string);

			this.load();
		}
	}

	load(): void {
		this.user = this._mongo.fetch(
			'user',
			{
				name: 'me'
			},
			(user: User) => {
				if (user) {
					this.user = user;

					this._core.done('us.user');

					localStorage.setItem('waw_user', JSON.stringify(user));
				} else {
					this.logout();
				}
			}
		);

		this.users = this._mongo.get('user', (users: User[], obj: AnyUser) => {
			this._users = obj;
			this.leads = obj['leads'] as unknown as User[];
		});
	}

	new(): User {
		return {
			name: '',
			email: '',
			thumb: '',
			is: {},
			data: {}
		};
	}

	create(user: User): void {
		this._mongo.create('user', user);
	}

	doc(userId: string): User {
		if (!this._users[userId]) {
			this._users[userId] = this._mongo.fetch('user', {
				query: { _id: userId }
			});
		}

		return this._users[userId];
	}

	update(): void {
		this._mongo.afterWhile(this, () => {
			localStorage.setItem('waw_user', JSON.stringify(this.user));

			this._mongo.update('user', this.user);
		});
	}

	save(user: User): void {
		this._mongo.afterWhile(this, () => {
			this._mongo.update('user', user, {
				name: 'admin'
			});
		});
	}

	delete(user: User): void {
		this._mongo.delete('user', user, {
			name: 'admin'
		});
	}

	change_password(oldPass: string, newPass: string): void {
		this._http.post(
			'/api/user/changePassword',
			{
				newPass: newPass,
				oldPass: oldPass
			},
			(resp: boolean) => {
				if (resp) {
					this._alert.info({
						text: 'Successfully changed password'
					});
				} else {
					this._alert.error({
						text: 'Failed to change password'
					});
				}
			}
		);
	}

	logout(): void {
		this.user = this.new();

		localStorage.removeItem('waw_user');

		this._router.navigateByUrl('/sign');

		this._http.remove('token');
	}
}
