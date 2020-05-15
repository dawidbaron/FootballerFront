import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFootballerComponent } from './add-footballer.component';

describe('AddFootballerComponent', () => {
  let component: AddFootballerComponent;
  let fixture: ComponentFixture<AddFootballerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFootballerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFootballerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
