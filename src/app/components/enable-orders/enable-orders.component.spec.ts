import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableOrdersComponent } from './enable-orders.component';

describe('EnableOrdersComponent', () => {
  let component: EnableOrdersComponent;
  let fixture: ComponentFixture<EnableOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnableOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnableOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
