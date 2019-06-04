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
