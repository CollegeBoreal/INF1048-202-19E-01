# Customer Form

This component allows the editing of customer component

##### Create the `customer` Form Component

```
$ ng generate component customerForm
```

##### Edit the `customer` Form Controller `customer-form.component.ts`


* add the customer local variable

```typescript 
  customer: Customer;
```

* change its constructor

```typescript 
  constructor(
    private router: Router,
    private dialogService: TdDialogService,
    private customersService: CustomersService,
    private route: ActivatedRoute) { }
```typescript 


* change its `nbOnInit()` function

```typescript 
  ngOnInit() {
    this.route.params.map((params: Params) => params.customerId).subscribe(customerId => {
      if (customerId) {
        this.customersService.get<Customer>(customerId).subscribe(customer => {
          this.customer = customer;
        });
      } else {
        this.customer = new Customer();
      }
    });
  }
```



```html
<button mat-fab class="mat-fab-bottom-right fixed mat-accent mat-fab" routerLink="/customers/create">
  <mat-icon>add</mat-icon>
</button>
```

