import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1Comp2Component } from './mod1-comp2.component';

describe('Mod1Comp2Component', () => {
  let component: Mod1Comp2Component;
  let fixture: ComponentFixture<Mod1Comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod1Comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod1Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
