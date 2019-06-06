import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
/*
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/create', component: InvoiceFormComponent },
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
  { path: 'invoices/:invoiceId/edit', component: InvoiceFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' },
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
