import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConstructorComponent } from './constructor.component';
import { WacomModule } from 'wacom';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { InputModule } from '../input/input.module';
import { SelectModule } from '../select/select.module';
import { FieldComponent } from './field/field.component';

const routes: Routes = [
	{
		path: '',
		component: ConstructorComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ButtonModule,
		FormsModule,
		WacomModule,
		InputModule,
		SelectModule
	],
	declarations: [ConstructorComponent, FieldComponent],
	providers: []
})
export class ConstructorModule {}
