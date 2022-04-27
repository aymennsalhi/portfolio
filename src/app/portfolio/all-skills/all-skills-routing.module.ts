import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSkillsComponent } from './all-skills.component';

const routes: Routes = [{ path: '', component: AllSkillsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllSkillsRoutingModule { }
