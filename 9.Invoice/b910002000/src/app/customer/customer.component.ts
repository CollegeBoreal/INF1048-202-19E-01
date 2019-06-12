import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../Customer';
import {CustomersService} from '../services';
import {ActivatedRoute, Params} from '@angular/router';
import {switchMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  customer: Customer;
  constructor(private customersService: CustomersService,
              private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params.customerId),
      switchMap(customerId => this.customersService.get<Customer>(customerId))
    ).subscribe(customer => {
      this.customer = customer;
    });
  }

}
