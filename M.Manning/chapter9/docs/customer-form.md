# Customer Form

This component allows the editing of customer component

##### Create the `customer` Form Component

```
$ ng generate component customerForm
```

##### Edit the `app-routing.module.ts` and add the `CustomerFormComponent` form to the `routes` constant

```typescript
const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customers/:customerId', component: CustomerComponent },
  { path: 'customers/:customerId/edit', component: CustomerFormComponent },
  { path: 'customers/create', component: CustomerFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
];
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
    private dialogService: NbDialogService,
    private customersService: CustomersService,
    private route: ActivatedRoute) {
  }
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
  /*
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
    */
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

* Final Result

```typescript
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  customer: Customer;

  constructor(
    private router: Router,
    private dialogService: NbDialogService,
    private customersService: CustomersService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.pipe(
      map((params: Params) => params.customerId)
    ).subscribe(customerId => {
      if (customerId) {
        this.customersService.get<Customer>(customerId)
          .subscribe(customer => {
            this.customer = customer;
          });
      } else {
        this.customer = new Customer();
      }
    });
  }

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
/*
    this.dialogService.open({
      message: 'Are you sure you want to delete this customer?',
      title: 'Confirm',
      acceptButton: 'Delete'
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.customersService.delete(this.customer.id).subscribe(response => {
          this.customer.id = null;
          this.cancel();
        });
      }
    });
*/
  }

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

}
```

* Edit the `customer-form.component.html` template file

```html
<form *ngIf="customer" #form="ngForm" (ngSubmit)="save()">
  <mat-card>
    <mat-card-header>Edit Customer</mat-card-header>
    <mat-card-content>
      <mat-form-field>
        <input name="customer" mdInput placeholder="Customer Name" 
               [(ngModel)]="customer.name" required #name="ngModel">
        <mat-error *ngIf="name.touched && name.invalid">
          Name is required
        </mat-error>
      </mat-form-field>
      <mat-form-field>
        <input name="email" mdInput type="email" placeholder="Email" 
               [(ngModel)]="customer.email" required #email="ngModel">
        <mat-error *ngIf="email.touched && email.invalid">
          A valid email is required
        </mat-error>
      </mat-form-field>
      <mat-form-field>
        <input name="phone" mdInput type="tel" placeholder="Phone" 
               [(ngModel)]="customer.phone" required phone #phone="ngModel">
        <!--<mat-error *ngIf="phone.touched && phone.errors.required">-->
        <mat-error *ngIf="phone.touched">
          Not a valid phone number
        </mat-error>
      </mat-form-field>
    </mat-card-content>
    <mat-card-actions>
      <button type="button" mat-button (click)="delete()" *ngIf="customer.id">Delete</button>
      <button type="button" mat-button (click)="cancel()">Cancel</button>
      <button type="submit" mat-raised-button color="primary" [disabled]="form.invalid">Save</button>
    </mat-card-actions>
  </mat-card>
</form>

```



```html
<button mat-fab class="mat-fab-bottom-right fixed mat-accent mat-fab" routerLink="/customers/create">
  <mat-icon>add</mat-icon>
</button>
```

