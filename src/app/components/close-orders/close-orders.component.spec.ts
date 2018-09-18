import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseOrdersComponent } from './close-orders.component';

describe('CloseOrdersComponent', () => {
  let component: CloseOrdersComponent;
  let fixture: ComponentFixture<CloseOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
