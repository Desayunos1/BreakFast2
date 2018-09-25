import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidateTableComponent } from './consolidate-table.component';

describe('ConsolidateTableComponent', () => {
  let component: ConsolidateTableComponent;
  let fixture: ComponentFixture<ConsolidateTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidateTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
