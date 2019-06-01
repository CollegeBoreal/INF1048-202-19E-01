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

* Declare a vew local variables

```typescript
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;
```

* The component will return a date value (i.e. Output a date to calling components)

```typescript
  @Output() onRefresh: EventEmitter<Date> = new EventEmitter<Date>();
```

* Add a Component life Cycle `OnDestroy` to the `Dashboard` class

   * inherit the classes

```typescript
implements OnInit, OnDestroy {
```

    * implement the required functions `ngOnInit` and `ngOnDestroy`

```typescript
  ngOnInit(): void {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 15000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
```
