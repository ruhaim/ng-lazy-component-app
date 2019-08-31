import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod3Comp1Component } from './mod3-comp1/mod3-comp1.component';
import { Mod3Comp2Component } from './mod3-comp2/mod3-comp2.component';

@NgModule({
  declarations: [Mod3Comp1Component, Mod3Comp2Component],
  imports: [
    CommonModule
  ]
})
export class LazyModule3Module { }
