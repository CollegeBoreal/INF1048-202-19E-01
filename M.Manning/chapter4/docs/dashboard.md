# Dashboard

* Generate the Dashboard component

```
$ ng generate component dashboard
```

* Generate `Metric` and `Node` data

```
$ ng generate interface data/metric
```

  - Add the below fields

```
export interface Metric {
  used: number;
  available: number;
}
```

```
$ ng generate interface data/node
```

  - Add the below fields

```
export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}
```
