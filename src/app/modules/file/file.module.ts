import { NgModule } from '@angular/core';
import { FileComponent } from './file.component';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		FileComponent
	],
	exports: [
		FileComponent
	],
	imports: [
		CommonModule
	]
})

export class FileModule {}
