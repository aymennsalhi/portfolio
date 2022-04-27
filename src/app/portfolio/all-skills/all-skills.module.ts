import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllSkillsRoutingModule } from './all-skills-routing.module';
import { AllSkillsComponent } from './all-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ContactmeModule } from '../contactme/contactme.module';


@NgModule({
  declarations: [
    AllSkillsComponent
  ],
  imports: [
    CommonModule,
    AllSkillsRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ContactmeModule
  ]
})
export class AllSkillsModule { }
