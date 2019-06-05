# Detail

### Generate the Detail component

```
$ ng generate component nodes-detail
```

* Edit the `nodes-detail.component.ts` file 
   
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



