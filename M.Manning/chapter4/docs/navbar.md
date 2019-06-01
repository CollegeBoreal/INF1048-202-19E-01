# NavBar

```
ng generate component navbar
```

* Edit the `navbar.component.ts`
 
   * add an output EventEmitter `onRefresh`

```typescript
  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();
```

   * add a method `refresh`

```typescript
  refresh() {
    this.onRefresh.emit();
  }
```

* Edit the `navbar.component.css`

   * add a sty to the `btn` class

```css
.btn {
  background-color: #999999;
}
```


