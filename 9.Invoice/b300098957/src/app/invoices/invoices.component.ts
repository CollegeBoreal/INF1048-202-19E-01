import {Component, OnInit} from '@angular/core';
import {Invoice, InvoicesService} from '../services';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices: Invoice[];

  constructor(private invoicesService: InvoicesService) {
  }

  ngOnInit() {
    this.invoicesService.query<Array<Invoice>>({sort: 'created', order: 'desc'})
      .subscribe(invoices => {
        this.invoices = invoices;
      });
  }

}
