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

* Barrel

```typescript
export * from './customer';
export * from './customers.service';
export * from './invoice';
export * from './invoices.service';
```
