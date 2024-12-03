import { TestBed } from '@angular/core/testing';

import { LabwareActionsService } from './labware-actions.service';

describe('LabwareActionsService', () => {
  let service: LabwareActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabwareActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
