# Theme

* Install [Nebular](https://akveo.github.io/nebular/) and [Material Design](https://material.angular.io) libraries

```
$ ng add @nebular/theme
```

and Covalent

```
$ npm install @angular/material material-icons --save
```

* Edit the `styles.scss` file and add the below at the end

```json
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
@import '~material-icons/iconfont/material-icons.css';
```


* Edit `app.module.ts`

   - Import each Material Module to the `imports:` metadeta of the `@NgModule` decorator


```typescript
imports: [
    ... Previous Modules,
    // Material Modules
    MatCardModule,
    MatButtonModule
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
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    // Material Modules
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[:fast_forward: Next ](navbar.md)
