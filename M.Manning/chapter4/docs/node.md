# Node

## Create Node master/details

   * Master

```
$ ng generate component nodes
```

   * Details

```
$ ng generate component nodes-row
```


## Edit `nodes.component.html`

:bookmark: `<ng-content>`

```html
<thead>
  <tr>
    <th>Node</th>
    <th [colSpan]="2">CPU</th>
    <th [colSpan]="2">Memory</th>
    <th>Details</th>
  </tr>
</thead>
<ng-content></ng-content>
```

## Edit `nodes-row.component.html`

   * Replace its content with the below

```html
<th scope="row">{{node.name}}</th>
<td [class.table-danger]="isDanger('cpu')">     
  {{node.cpu.used}}/{{node.cpu.available}}
</td>
<td [class.table-danger]="isDanger('cpu')">
  ({{node.cpu.used / node.cpu.available | percent}})     
</td>
<td [class.table-danger]="isDanger('mem')">
  {{node.mem.used}}/{{node.mem.available}}
</td>
<td [class.table-danger]="isDanger('mem')">
  ({{node.mem.used / node.mem.available | percent}})
</td>
<td><button class="btn btn-secondary">View</button></td>
```

## Edit `nodes-row.component.ts`

   * add the `@Input()` decorator

```typescript
 @Input() node: any;
```

   * add the `isDanger` function

```typescript
  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
```

  * Final Result

```typescript
@Component({
  selector: 'app-nodes-row',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent implements OnInit {

  @Input() node: any;

  constructor() { }

  ngOnInit() {
  }

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

}
```
