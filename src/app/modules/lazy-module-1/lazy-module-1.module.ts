import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Comp1Component } from './mod1-comp1/mod1-comp1.component';
import { Mod1Comp2Component } from './mod1-comp2/mod1-comp2.component';

@NgModule({
  declarations: [Mod1Comp1Component, Mod1Comp2Component],
  entryComponents: [Mod1Comp1Component, Mod1Comp2Component],
  imports: [
    CommonModule
  ]
})
export class LazyModule1Module { 
  static componentMap = {
    "Mod1Comp1Component" : Mod1Comp1Component,
    "Mod1Comp2Component" : Mod1Comp2Component
  }
}
