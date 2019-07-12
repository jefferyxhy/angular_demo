/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { heroesComponent } from './heroes.component';

describe('heroesComponent', () => {
  let component: heroesComponent;
  let fixture: ComponentFixture<heroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ heroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(heroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
