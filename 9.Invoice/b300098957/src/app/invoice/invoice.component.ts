import {Component, OnInit} from '@angular/core';
import {Customer, CustomersService, Invoice, InvoicesService} from '../services';
import {ActivatedRoute, Params} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  customer: Customer;

  constructor(
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params.invoiceId),
      switchMap(invoiceId => this.invoicesService.get<Invoice>(invoiceId)),
      map(invoice => {
        this.invoice = invoice;
        return invoice.customerId;
      }),
      switchMap(customerId => this.customersService.get<Customer>(customerId))
    ).subscribe(customer => {
      this.customer = customer;
    });
  }

}
