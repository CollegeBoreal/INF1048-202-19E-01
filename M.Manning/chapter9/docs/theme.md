# Theme

#### Install [Nebular](https://akveo.github.io/nebular/) and [Material Design](https://material.angular.io) libraries

* Install [Nebular](https://akveo.github.io/nebular/) Theme

```
$ ng add @nebular/theme
```
   * When asked:

```
? Which Nebular theme do you want to use: dark
? Use customizable scss themes? No
? Set up browser animations for Nebular? No
```

* Add [Material Design](https://material.angular.io) library

```
$ npm install @angular/material material-icons --save
```

* Edit the `styles.scss` file and add the below at the end

```json
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
@import '~material-icons/iconfont/material-icons.css';
```


* Edit `app.module.ts`

   - Import each Material Module to the `imports:` metadata of the `@NgModule` decorator


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
