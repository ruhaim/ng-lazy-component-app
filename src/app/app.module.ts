import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRuhLazyComponentModule } from 'ng-ruh-lazy-component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgRuhLazyComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
