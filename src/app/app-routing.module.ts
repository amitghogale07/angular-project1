import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ActivitiesComponent} from './modules/activities/activities.component';
import { AminitiesComponent } from './modules/aminities/aminities.component';

const routes: Routes = [
  {path: 'activities', component: ActivitiesComponent},
  {path: 'aminities', component: AminitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
