import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod3Comp2Component } from './mod3-comp2.component';

describe('Mod3Comp2Component', () => {
  let component: Mod3Comp2Component;
  let fixture: ComponentFixture<Mod3Comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod3Comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod3Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
