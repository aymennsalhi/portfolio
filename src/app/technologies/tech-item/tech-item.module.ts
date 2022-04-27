import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechItemRoutingModule } from './tech-item-routing.module';
import { TechItemComponent } from './tech-item.component';


@NgModule({
  declarations: [
    TechItemComponent
  ],
  imports: [
    CommonModule,
    TechItemRoutingModule
  ]
})
export class TechItemModule { }
