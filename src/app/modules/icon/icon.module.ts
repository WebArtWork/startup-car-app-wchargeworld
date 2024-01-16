import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';
import { SpiderComponent } from './icons/spider/spider.component';

@NgModule({
	declarations: [IconComponent, SpiderComponent],
	exports: [IconComponent, SpiderComponent]
})
export class IconModule {}
