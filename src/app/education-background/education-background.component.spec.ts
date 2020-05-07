/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducationBackgroundComponent } from './education-background.component';

describe('EducationBackgroundComponent', () => {
  let component: EducationBackgroundComponent;
  let fixture: ComponentFixture<EducationBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
