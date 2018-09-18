import { TestBed } from '@angular/core/testing';

import { ManageDBService } from './manage-db.service';

describe('ManageDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageDBService = TestBed.get(ManageDBService);
    expect(service).toBeTruthy();
  });
});
