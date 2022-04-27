import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerifLoginComponent } from './verif-login.component';

const routes: Routes = [{ path: '', component: VerifLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifLoginRoutingModule { }
