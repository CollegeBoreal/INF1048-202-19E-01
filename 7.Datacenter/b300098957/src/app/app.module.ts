import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricComponent } from './metric/metric.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NodesComponent } from './nodes/nodes.component';
import { NodesRowComponent } from './nodes-row/nodes-row.component';
import { NodesDetailComponent } from './nodes-detail/nodes-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MetricComponent,
    NavbarComponent,
    NodesComponent,
    NodesRowComponent,
    NodesDetailComponent
  ],
  entryComponents: [
    NodesDetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
