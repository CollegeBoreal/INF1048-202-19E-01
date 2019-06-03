# Metric Component

### Generate the component

```
$ ng generate component metric
```

### Edit the component `metric.component.ts`

* Declare its variables

```typescript
  @Input() title: string = '';
  @Input() description: string = '';
  @Input('used') value = 0;
  @Input('available') max = 100;
```

* Declare its fonction `isDanger` monitoring the Metric Component

```typescript
  isDanger() {
    return this.value / this.max > 0.7;
  }
```

#### Final Result

```typescript
@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;

  constructor() {
  }

  ngOnInit() {
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}

```

### Edit its template `metric.component.html`

* Replace the template content by the below

```html
<div class="card card-block">
  <div class="card-body">
    <nav class="navbar navbar-dark bg-primary mb-1" [ngClass]="{'bg-danger': isDanger(), 'bg-success': !isDanger()}">     
<h1 class="navbar-brand mb-0">{{title}}</h1>     
</nav>
    <h4 class="card-title">{{value}}/{{max}} ({{value / max | percent:'1.0-2'}})</h4>     
<p class="card-text">
      {{description}}     
</p>
    <ngb-progressbar [value]="value" [max]="max" [type]="isDanger() ? 'danger' : 'success'"></ngb-progressbar>     
</div>
</div>
```
