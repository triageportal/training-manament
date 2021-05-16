/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InprogressComponent } from './inprogress.component';

describe('InprogressComponent', () => {
  let component: InprogressComponent;
  let fixture: ComponentFixture<InprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
