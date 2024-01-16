import { NgModule, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { InputModule } from 'src/app/modules/input/input.module';
import { CardModule } from 'src/app/modules/card/card.module';
import { FormModule } from 'src/app/modules/form/form.module';
import { TableModule } from '../modules/table/table.module';
import { UserComponent } from './selectors/user/user.component';
import { IconModule } from '../modules/icon/icon.module';
import { TranslateModule } from '../modules/translate/translate.module';
import { FileModule } from '../modules/file/file.module';

@NgModule({
	declarations: [UserComponent],
	exports: [
		/* exports */
		FileModule,
		TranslateModule,
		CommonModule,
		FormsModule,
		WacomModule,
		ButtonModule,
		InputModule,
		CardModule,
		FormModule,
		TableModule,
		IconModule
	],
	imports: [CommonModule, FormsModule, WacomModule],
	providers: []
})
export class CoreModule {}
