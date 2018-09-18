import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDoptionComponent } from './crudoption.component';

describe('CRUDoptionComponent', () => {
  let component: CRUDoptionComponent;
  let fixture: ComponentFixture<CRUDoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRUDoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
