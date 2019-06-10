import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbActionsModule, NbSidebarModule, NbIconModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import { CustomersComponent } from './customers/customers.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';

// Nebular Modules
const NB_MODULES = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbEvaIconsModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbActionsModule,
];

// Material Modules
const MAT_MODULES = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...NB_MODULES,
    ...MAT_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
