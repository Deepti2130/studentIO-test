import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StdDashboardComponent } from './shared/component/std-dashboard/std-dashboard.component';
import { StdformComponent } from './shared/component/stdform/stdform.component';
import { StdtableComponent } from './shared/component/stdtable/stdtable.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StdDashboardComponent,
    StdformComponent,
    StdtableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
