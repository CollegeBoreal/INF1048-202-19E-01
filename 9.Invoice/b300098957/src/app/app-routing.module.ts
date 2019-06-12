import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {CustomerComponent} from './customer/customer.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {InvoicesComponent} from './invoices/invoices.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:customerId', component: CustomerComponent },
  { path: 'customers/:customerId/edit', component: CustomerFormComponent },
  { path: 'customers/create', component: CustomerFormComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
