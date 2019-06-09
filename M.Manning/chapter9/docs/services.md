# Services 

Services are used to access data from backend

```
$ ng generate class services/Customer --skipTests
```

```typescript
export class Customer {
  email: string;
  id: number;
  name: string;
  phone: string;
}
```

```
$ ng generate class services/Invoice --skipTests
```


```typescript
export class Invoice {
  customerId: number;
  date: string;
  hours: number;
  id: number;
  paid: boolean = false;
  rate: number;
  service: string;
}
```

```
$ ng generate interface services/Query
```


```typescript
export interface Query {
  limit?: number;
  order?: string;
  sort?: string;
  embed?: string;
  expand?: string;
}
```


* Using [Barrel](https://medium.com/@adrianfaciu/barrel-files-to-use-or-not-to-use-75521cd18e65) files

```typescript
export * from './customer';
export * from './customers.service';
export * from './invoice';
export * from './invoices.service';
```
