# Customer


```
$ ng generate component customer
```

```typescript
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer;

  constructor(
    private customersService: CustomersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .map((params: Params) => params.customerId)
      .switchMap(customerId => this.customersService.get<Customer>(customerId))
      .subscribe(customer => {
        this.customer = customer;
      });
  }
}
```

