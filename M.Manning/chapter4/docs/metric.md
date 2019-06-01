# Metric Component

### Generate the component

```
$ ng generate component metric
```

* Declare its variables

```typescript
  @Input('used') value = 0;
  @Input('available') max = 100;
```

### Add a Component life Cycle `OnChanges` to the `MetricComponent` class

   * inherit the classes

```typescript
implements OnInit, OnChanges {
```

   * implement the required function `OnChanges`

```typescript
  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.value && isNaN(changes.value.currentValue)) { this.value = 0; }
    if (changes.max && isNaN(changes.max.currentValue)) { this.max = 0; }
  }
```

### Add the other `public` function

```typescript
  isDanger() {
    return this.value / this.max > 0.7;
  }
```

