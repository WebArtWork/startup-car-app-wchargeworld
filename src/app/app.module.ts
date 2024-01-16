import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Renderer2 } from '@angular/core';
// Core
import { GuestComponent } from './core/theme/guest/guest.component';
import { UserComponent } from './core/theme/user/user.component';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// config
import { WacomModule, MetaGuard } from 'wacom';
import { environment } from 'src/environments/environment';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AdminsGuard } from './core/guards/admins.guard';
import { OwnersGuard } from './core/guards/owner.guard';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/sign',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UserComponent,
		children: [
			/* user */
			{
				path: 'book',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Book'
					}
				},
				loadChildren: () => import('./pages/user/book/book.module').then(m => m.BookModule)
			}, 
			{
				path: 'orders',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Orders'
					}
				},
				loadChildren: () => import('./pages/user/orders/orders.module').then(m => m.OrdersModule)
			},
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		]
	},
	{
		path: 'owner',
		canActivate: [OwnersGuard],
		component: UserComponent,
		children: [
			/* owner */
			{
				path: 'applications',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Applications'
					}
				},
				loadChildren: () => import('./pages/owner/applications/applications.module').then(m => m.ApplicationsModule)
			},
			{
				path: 'charges',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Charges'
					}
				},
				loadChildren: () => import('./pages/owner/charges/charges.module').then(m => m.ChargesModule)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'leads',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Leads'
					}
				},
				loadChildren: () => import('./pages/admin/leads/leads.module').then(m => m.LeadsModule)
			}, 
			{
				path: 'applications',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Applications'
					}
				},
				loadChildren: () => import('./pages/admin/applications/applications.module').then(m => m.ApplicationsModule)
			},
			{
				path: 'articles',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Articles'
					}
				},
				loadChildren: () => import('./pages/admin/articles/articles.module').then(m => m.ArticlesModule)
			},
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./pages/admin/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import('./modules/form/pages/forms/forms.module').then(
						(m) => m.FormsModule
					)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			},
			{
				path: 'constructor',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Constructor'
					}
				},
				loadChildren: () =>
					import('./modules/constructor/constructor.module').then(
						(m) => m.ConstructorModule
					)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [AppComponent, GuestComponent, UserComponent],
	imports: [
		CoreModule,
		BrowserModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: 'Web Art Work',
					titleSuffix: ' | Web Art Work',
					'og:image': 'https://webart.work/api/user/cdn/waw-logo.png'
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [AuthenticatedGuard, GuestGuard, OwnersGuard, AdminsGuard],
	bootstrap: [AppComponent]
})
export class AppModule {}
