# Detail

### Generate the Detail component

```
$ ng generate component nodes-detail
```

##### Edit the `nodes-detail.component.ts` file 
   
   * add the below local variable

```typescript
   @Input() node;
```

   * add the parameter `activeModal` to its constructor allowing the display of a modal window


```typescript
  constructor(public activeModal: NgbActiveModal) {}
```

   * add the 2 following functions
   
```typescript
 isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
 }

 getType(prop) {
    return (this.isDanger(prop)) ? 'danger' : 'success';
 }
```

* Final Result

```typescript
@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.css']
})
export class NodesDetailComponent implements OnInit {

  @Input() node;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  getType(prop) {
    return (this.isDanger(prop)) ? 'danger' : 'success';
  }

}
```

##### Replace the content of the `nodes-detail.component.html` template file with the below 

```html
<div class="modal-header">
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
    <span aria-hidden="true">&times;</span>
  </button>
  <h4 class="modal-title">{{node.name}}</h4>
</div>
<div class="modal-body container">
  <div class="col-xs-6">
    <app-metric [used]="node.cpu.used" [available]="node.cpu.available">
      <metric-title>CPU</metric-title>
    </app-metric>
  </div>
  <div class="col-xs-6">
    <app-metric [used]="node.mem.used" [available]="node.mem.available">
      <metric-title>Memory</metric-title>
    </app-metric>
  </div>
</div>
```

##### Edit the file `nodes-row.conponent.html` 

   * add open event to the view button 

```html
(click)="open(node)"
```

##### Edit the file `nodes-row.conponent.ts` 

   * add the parameter `activeModal` to its constructor allowing the display of a modal window


```typescript
  constructor(private activeModal: NgbActiveModal) {}
```

   * add the `open` function
  

```typescript
  open(node) {
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }
```

* Final Result

```typescript
@Component({
  selector: '[app-nodes-row]',
  templateUrl: './nodes-row.component.html',
  styleUrls: ['./nodes-row.component.css']
})
export class NodesRowComponent implements OnInit {

  @Input() node: any;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

  open(node) {
    const modal = this.modalService.open(NodesDetailComponent);
    modal.componentInstance.node = node;
  }

}
```

