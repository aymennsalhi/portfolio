import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifLoginRoutingModule } from './verif-login-routing.module';
import { VerifLoginComponent } from './verif-login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VerifLoginComponent
  ],
  imports: [
    CommonModule,
    VerifLoginRoutingModule,
    FormsModule
  ]
})
export class VerifLoginModule { }
