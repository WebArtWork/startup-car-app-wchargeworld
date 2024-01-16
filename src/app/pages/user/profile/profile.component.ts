import { Component } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';
import { CoreService } from 'wacom';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/core/interfaces/user';

interface ChangePassword {
	oldPass: string;
	newPass: string;
}

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	user: Record<string, unknown>;

	constructor(
		private _form: FormService,
		private _core: CoreService,
		public us: UserService
	) {
		this._core.next('us.user', () => {
			const user = {};

			this._core.copy(this.us.user, user);

			this.user = user;
		});
	}

	// Update user profile
	formProfile: FormInterface = this._form.getForm('profile');

	update(submition: User): void {
		this._core.copy(submition, this.us.user);

		this.us.update();
	}

	// Update user password
	formPassword: FormInterface = this._form.getForm('change password');

	change_password(): void {
		this._form
			.modal<ChangePassword>(this.formPassword, {
				label: 'Change',
				click: (submition: unknown, close: () => void) => {
					this.us.change_password(
						(submition as ChangePassword).oldPass,
						(submition as ChangePassword).newPass
					);

					close();
				}
			})
			.then((submition: ChangePassword) => {
				this.us.change_password(submition.oldPass, submition.newPass);
			});
	}
}
