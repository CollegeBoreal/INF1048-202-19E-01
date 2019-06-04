import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricComponent } from './metric/metric.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NodesComponent } from './nodes/nodes.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetricComponent,
    NavbarComponent,
    NodesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
