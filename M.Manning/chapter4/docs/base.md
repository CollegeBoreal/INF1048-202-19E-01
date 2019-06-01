# Base

* Install [ng-bootstrap](https://ng-bootstrap.github.io) library

```
$ npm install --save @ng-bootstrap/ng-bootstrap
```

* Edit `app.module.ts`

   - Import `NgbModule` to the `imports:` metadeta of the `@NgModule` decorator

```typescript
imports: [
    BrowserModule,
    NgbModule
  ],
```

* Final Result

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[Next](dashboard.md)
