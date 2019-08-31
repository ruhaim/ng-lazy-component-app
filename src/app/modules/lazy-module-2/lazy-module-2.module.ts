import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod2Comp1Component } from './mod2-comp1/mod2-comp1.component';
import { Mod2Comp2Component } from './mod2-comp2/mod2-comp2.component';

@NgModule({
  declarations: [Mod2Comp1Component, Mod2Comp2Component],
  imports: [
    CommonModule
  ]
})
export class LazyModule2Module { }
