import { NgModule } from '@angular/core';
import { NgRuhLazyComponentComponent } from './ng-ruh-lazy-component.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgRuhLazyComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [NgRuhLazyComponentComponent]
})
export class NgRuhLazyComponentModule { }
