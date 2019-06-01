# Metric Component

* Generate the component

```
$ ng generate component metric
```

* Declare its variables

```typescript
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;
```

* Declare its function

```typescript
  isDanger() {
    return this.value / this.max > 0.7;
  }
```
