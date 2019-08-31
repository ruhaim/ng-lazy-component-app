import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod3Comp1Component } from './mod3-comp1.component';

describe('Mod3Comp1Component', () => {
  let component: Mod3Comp1Component;
  let fixture: ComponentFixture<Mod3Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod3Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod3Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
