import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseBuyerComponent } from './choose-buyer.component';

describe('ChooseBuyerComponent', () => {
  let component: ChooseBuyerComponent;
  let fixture: ComponentFixture<ChooseBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
