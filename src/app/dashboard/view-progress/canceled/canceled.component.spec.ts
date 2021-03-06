/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CanceledComponent } from './canceled.component';

describe('CanceledComponent', () => {
  let component: CanceledComponent;
  let fixture: ComponentFixture<CanceledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanceledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
