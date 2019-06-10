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

* add operation CRUD functions like `save()`, `delete()`

```typescript 
  save() {
    if (this.customer.id) {
      this.customersService.update<Customer>(this.customer.id, this.customer).subscribe(response => {
        this.viewCustomer(response.id);
      });
    } else {
      this.customersService.create<Customer>(this.customer).subscribe(response => {
        this.viewCustomer(response.id);
      });
    }
  }

  delete() {
    this.dialogService.openConfirm({
      message: 'Are you sure you want to delete this customer?',
      title: 'Confirm',
      acceptButton: 'Delete'
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.loadingService.register('customer');
        this.customersService.delete(this.customer.id).subscribe(response => {
          this.loadingService.resolve('customer');
          this.customer.id = null;
          this.cancel();
        });
      }
    });
  }
```

* add navigation functions like `cancel()`, `viewCustomer()`

```typescript 
  cancel() {
    if (this.customer.id) {
      this.router.navigate(['/customers', this.customer.id]);
    } else {
      this.router.navigateByUrl('/customers');
    }
  }

  private viewCustomer(id: number) {
    this.router.navigate(['/customers', id]);
  }
```

```html
<button mat-fab class="mat-fab-bottom-right fixed mat-accent mat-fab" routerLink="/customers/create">
  <mat-icon>add</mat-icon>
</button>
```

