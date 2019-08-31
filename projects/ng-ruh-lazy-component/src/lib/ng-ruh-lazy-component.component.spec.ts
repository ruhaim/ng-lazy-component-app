import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRuhLazyComponentComponent } from './ng-ruh-lazy-component.component';

describe('NgRuhLazyComponentComponent', () => {
  let component: NgRuhLazyComponentComponent;
  let fixture: ComponentFixture<NgRuhLazyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRuhLazyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRuhLazyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
