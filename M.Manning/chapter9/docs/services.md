# Services 

Services are used to access data from backend



```typescript
export class Customer {
  email: string;
  id: number;
  name: string;
  phone: string;
}
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

```typescript
interface Query {
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
