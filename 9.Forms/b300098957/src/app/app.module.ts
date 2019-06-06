import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CovalentLayoutModule, CovalentLoadingModule} from '@covalent/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CovalentLayoutModule,
    CovalentLoadingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
