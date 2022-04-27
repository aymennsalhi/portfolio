import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundleItemRoutingModule } from './bundle-item-routing.module';
import { BundleItemComponent } from './bundle-item.component';


@NgModule({
  declarations: [
    BundleItemComponent
  ],
  imports: [
    CommonModule,
    BundleItemRoutingModule
  ]
})
export class BundleItemModule { }
