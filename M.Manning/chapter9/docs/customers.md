# Customers Path

The `Customers` components will be used to demonstrate the [`Template Driven`](https://angular.io/guide/forms) Forms 

###### Material Design

* Edit `app.module.ts` and add `MatButtonModule`, `MatListModule` and `MatIconModule` to the existing `MAT_MODULES` constant

```typescript
// Material Modules
const MAT_MODULES = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
];
```


#### Master 

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
