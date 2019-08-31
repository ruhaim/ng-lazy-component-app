import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2Comp2Component } from './mod2-comp2.component';

describe('Mod2Comp2Component', () => {
  let component: Mod2Comp2Component;
  let fixture: ComponentFixture<Mod2Comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2Comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
