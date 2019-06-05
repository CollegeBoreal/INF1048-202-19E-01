# Theme

* Install [Material Design](https://material.angular.io) and [Covalent](https://teradata.github.io/covalent) libraries

```
$ npm install material-icons @angular/material @angular/cdk @angular/animations --save
```

and Covalent

```
$ npm install @covalent/core --save 
```

* Edit the `styles.scss` file

```json
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
@import '~material-icons/iconfont/material-icons.css';
```


* Edit `app.module.ts`

   - Import each Material Module to the `imports:` metadeta of the `@NgModule` decorator

   - Import `BrowserAnimationsModule` to the `imports:` metadeta of the `@NgModule` decorator


```typescript
imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
```

* Final Result

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

[:fast_forward: Next ](navbar.md)
