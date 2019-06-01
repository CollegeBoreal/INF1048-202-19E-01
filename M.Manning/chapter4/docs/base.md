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
