import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ModulesModule } from './modules/modules.module';
import { ActivitiesModule } from './modules/activities/activities.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    ModulesModule,
    ActivitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }