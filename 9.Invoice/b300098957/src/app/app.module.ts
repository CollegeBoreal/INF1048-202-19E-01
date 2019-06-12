import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {
  NbThemeModule
  , NbLayoutModule
  , NbActionsModule
  , NbSidebarModule
  , NbIconModule, NbDialogModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {AppRoutingModule} from './app-routing.module';
import {
  MatButtonModule
  , MatCardModule
  , MatFormFieldModule
  , MatIconModule, MatInputModule
  , MatListModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CustomersComponent} from './customers/customers.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import { PhoneDirective } from './validators/phone.directive';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';

// Nebular Modules
const NB_MODULES = [
  NbThemeModule.forRoot({name: 'default'}),
  NbEvaIconsModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbActionsModule,
  NbDialogModule.forRoot( )
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
    CustomerFormComponent,
    PhoneDirective,
    InvoicesComponent,
    InvoiceComponent,
    InvoiceFormComponent
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
export class AppModule {
}
