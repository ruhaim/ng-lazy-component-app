import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1Comp1Component } from './mod1-comp1.component';

describe('Mod1Comp1Component', () => {
  let component: Mod1Comp1Component;
  let fixture: ComponentFixture<Mod1Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod1Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod1Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
