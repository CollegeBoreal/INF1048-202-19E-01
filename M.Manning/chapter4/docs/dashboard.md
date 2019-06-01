# Dashboard

* Generate the Dashboard component

```
$ ng generate component dashboard
```

* Generate `Metric` and `Node` data

```
$ ng generate interface data/metric
```

   * Add the below fields

```typescript
export interface Metric {
  used: number;
  available: number;
}
```

```typescript
$ ng generate interface data/node
```

  * Add the below fields

```
export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}
```
