import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ChargesComponent } from './charges.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ChargesComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ChargesComponent
	],
	providers: []

})

export class ChargesModule { }
