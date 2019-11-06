import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtComponent } from './jwt.component';

describe('JwtComponent', () => {
  let component: JwtComponent;
  let fixture: ComponentFixture<JwtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
