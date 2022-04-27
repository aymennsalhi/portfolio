import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BundleItemComponent } from './bundle-item.component';

const routes: Routes = [{ path: '', component: BundleItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BundleItemRoutingModule { }
