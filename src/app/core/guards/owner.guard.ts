import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { StoreService } from 'wacom';

@Injectable()
export class OwnersGuard {
	constructor(private _router: Router, private _store: StoreService) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		if (localStorage.getItem('waw_user')) {
			const user = JSON.parse(localStorage.getItem('waw_user') as string);

			if (user.is && user.is.owner) return true;

			this._router.navigateByUrl('/profile');

			return false;
		} else {
			this._store.set('navigateByUrl', state.url);

			this._router.navigateByUrl('/sign');

			return false;
		}
	}
}
