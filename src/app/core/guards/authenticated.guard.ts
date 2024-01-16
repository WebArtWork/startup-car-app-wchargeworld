import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { StoreService } from 'wacom';

@Injectable()
export class AuthenticatedGuard {
	constructor(private _router: Router, private _store: StoreService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		if (localStorage.getItem('waw_user')) {
			return true;
		} else {
			this._store.set('navigateByUrl', state.url);

			this._router.navigateByUrl('/sign');

			return false;
		}
	}
}
