# Customer


```
$ ng generate component customer
```

```typescript
import {Component, OnInit} from '@angular/core';
import {Customer, CustomersService} from '../services';
import {ActivatedRoute, Params} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer;

  constructor(
    private customersService: CustomersService,
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
```

```
<mat-list *ngIf="customers">
  <h3 mat-subheader>Customers</h3>
  <mat-list-item *ngFor="let customer of customers" routerLink='/customers/{{customer.id}}'>
    <mat-icon mat-list-icon>note</mat-icon>
    <h4 mat-line>{{customer.name}}</h4>
    <p mat-line> {{customer.email}} </p>
  </mat-list-item>
</mat-list>
```

```
<button mat-fab class="mat-fab-bottom-right fixed mat-accent mat-fab" routerLink="/customers/create">
  <mat-icon>add</mat-icon>
</button>
```


