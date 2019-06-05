# Theme

* Install [Clarity](https://clarity.design) libraries

```
$ npm install material-icons @clr/angular @clr/ui @webcomponents/custom-elements@1.0.0 --save
```


* Edit the `styles.scss` file

```json
@import '~material-icons/iconfont/material-icons.css';
```


* Edit `app.module.ts`

   - Import `ClarityModule` to the `imports:` metadeta of the `@NgModule` decorator

   - Import `BrowserAnimationsModule` to the `imports:` metadeta of the `@NgModule` decorator


```typescript
imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
```

* Final Result

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

[:fast_forward: Next ](navbar.md)
