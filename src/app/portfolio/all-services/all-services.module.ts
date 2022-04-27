import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllServicesRoutingModule } from './all-services-routing.module';
import { AllServicesComponent } from './all-services.component';
import { ContactmeModule } from '../contactme/contactme.module';


@NgModule({
  declarations: [
    AllServicesComponent
  ],
  imports: [
    CommonModule,
    AllServicesRoutingModule,
    ContactmeModule
  ]
})
export class AllServicesModule { }
