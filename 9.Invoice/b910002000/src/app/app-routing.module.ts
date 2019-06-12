import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
