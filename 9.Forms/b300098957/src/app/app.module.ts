import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbActionsModule, NbSidebarModule, NbIconModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule, MatCardModule, MatError, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule
} from '@angular/material';
import { CustomersComponent } from './customers/customers.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {FormsModule} from "@angular/forms";

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
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

// Form Modules
const FORM_MODULES = [
  FormsModule
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...NB_MODULES,
    ...MAT_MODULES,
    ...FORM_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
