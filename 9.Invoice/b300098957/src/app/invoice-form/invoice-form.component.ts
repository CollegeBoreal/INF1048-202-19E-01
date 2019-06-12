import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CustomersService, InvoicesService, Customer, Invoice} from "../services";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm: FormGroup;
  invoice: Invoice;
  customer: Customer;
  customers: Customer[];
  total = 0;

  constructor(
    private invoicesService: InvoicesService,
    private customersService: CustomersService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.invoiceForm = this.formBuilder.group({
      id: [''],
      service: ['', Validators.required],
      customerId: ['', Validators.required],
      rate: ['', Validators.required],
      hours: ['', [Validators.required]],
      date: ['', Validators.required],
      paid: ['']
    });

    this.customersService.query<Array<Customer>>().subscribe(customers => {
      this.customers = customers;
    });

    this.route.params.map((params: Params) => params.invoiceId).subscribe(invoiceId => {
      if (invoiceId) {
        this.invoicesService.get<Invoice>(invoiceId).subscribe(invoice => {
          this.invoiceForm.setValue(invoice);
          this.invoice = invoice;
        });
      } else {
        this.invoice = new Invoice();
      }
    });

    Observable.combineLatest(
      this.invoiceForm.get('rate').valueChanges,
      this.invoiceForm.get('hours').valueChanges
    ).subscribe(([rate = 0, hours = 0]) => {
      this.total = rate * hours;
    });


  }

}
