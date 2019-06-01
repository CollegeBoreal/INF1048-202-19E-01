# Dashboard

### Generate the Dashboard component

```
$ ng generate component dashboard
```

### Generate `Metric` and `Node` data

* Generate `Metric` Interface

```
$ ng generate interface data/metric
```

   * Edit the `Metric.ts` file and add the below fields

```typescript
export interface Metric {
  used: number;
  available: number;
}
```
* Generate `Node` Interface

```bash
$ ng generate interface data/node
```

   * Edit the `Node.ts` file and add the below fields

```typescript
export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}
```

### Evolve Dashboard Component

* Add a Component life Cycle `OnDestroy` to the `Dashboard` class

```typescript
implements OnInit, OnDestroy {
```
