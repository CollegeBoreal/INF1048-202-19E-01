import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbIconModule, NbSidebarModule, NbActionsModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {MatIconModule} from '@angular/material';


const NB_MODULES = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbEvaIconsModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbActionsModule,
];

const MAT_MODULES = [
  MatIconModule,
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
      ...NB_MODULES,
      ...MAT_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
