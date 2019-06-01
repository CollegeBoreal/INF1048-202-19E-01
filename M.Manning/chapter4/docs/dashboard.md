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

```bash
$ ng generate interface data/node
```

  * Add the below fields

```typescript
export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}
```
