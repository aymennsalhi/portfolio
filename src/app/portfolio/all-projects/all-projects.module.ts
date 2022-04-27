import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProjectsRoutingModule } from './all-projects-routing.module';
import { AllProjectsComponent } from './all-projects.component';
import { ContactmeModule } from '../contactme/contactme.module';


@NgModule({
  declarations: [
    AllProjectsComponent
  ],
  imports: [
    CommonModule,
    AllProjectsRoutingModule,
    ContactmeModule
  ]
})
export class AllProjectsModule { }
