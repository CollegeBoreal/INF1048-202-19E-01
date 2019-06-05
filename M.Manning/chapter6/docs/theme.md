# Theme

* Install [ng-bootstrap](https://ng-bootstrap.github.io) and [bootstrap](https://getbootstrap.com) libraries

```
$ npm install @clr/icons @clr/angular @clr/ui @webcomponents/custom-elements@1.0.0 --save
```

* Edit the `Angular` configuration file `angular.json` add the below snippet (look for styles:)

```json
   "styles": [
      "node_modules/@clr/icons/clr-icons.min.css",
      "node_modules/@clr/ui/clr-ui.min.css",
     "src/styles.css"
   ],
   "scripts": [
     ... any existing scripts
     "node_modules/@webcomponents/custom-elements/custom-elements.min.js",
     "node_modules/@clr/icons/clr-icons.min.js"
   ]
```


* Edit `app.module.ts`

   - Import `ClarityModule` to the `imports:` metadeta of the `@NgModule` decorator

```typescript
imports: [
    BrowserModule,
    ClarityModule
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
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[:fast_forward: Next ](navbar.md)
