# Customers Path

The `Customers` components will be used to demonstrate the [`Template Driven`](https://angular.io/guide/forms) Forms 

#### Master (List of all Customers)

###### Generate `Customers` Component

```
$ ng generate component customers
```

###### Edit the `customers.component.ts`

* Add the local variable `customers` Array

```typescript
   customers: Customer[];
```

* Edit its `constructor` by addind the `CustomersService` class

```typescript
  constructor(private customersService: CustomersService) { }
```

* Edit its `ngOnInit` function with the below code

```typescript
  ngOnInit() {
    this.customersService.query<Array<Customer>>({sort: 'created', order: 'desc'})
      .subscribe(customers => {
        this.customers = customers;
      });
  }
```

* Final Result

```typescript
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customersService.query<Array<Customer>>({sort: 'created', order: 'desc'})
      .subscribe(customers => {
        this.customers = customers;
      });
  }
}
```

###### Edit the `customers.component.html`

*** ADD `Material Design` Modules used by the template

* Edit `app.module.ts` and add `MatButtonModule`, `MatListModule` and `MatIconModule` to the existing `MAT_MODULES` constant

```typescript
// Material Modules
const MAT_MODULES = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
];
```


* Replace all its content by the below snippet

```html
<mat-list *ngIf="customers">
  <h3 mat-subheader>Customers</h3>
  <mat-list-item *ngFor="let customer of customers" >
    <mat-icon mat-list-icon>note</mat-icon>
    <h4 mat-line>{{customer.name}}</h4>
    <p mat-line> {{customer.email}} </p>
  </mat-list-item>
</mat-list>
```


#### Routing

* Edit the `app-routing.module.ts` file and add the below route

```typescript
const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: '', pathMatch: 'full', redirectTo: '/customers' },
];
```

### You should see this

![image](../images/customers.png)

[:fast_forward: Next ](customer.md)
