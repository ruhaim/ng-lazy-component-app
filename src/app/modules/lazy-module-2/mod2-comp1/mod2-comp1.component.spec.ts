import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2Comp1Component } from './mod2-comp1.component';

describe('Mod2Comp1Component', () => {
  let component: Mod2Comp1Component;
  let fixture: ComponentFixture<Mod2Comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2Comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
