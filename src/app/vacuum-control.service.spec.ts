import { TestBed } from '@angular/core/testing';

import { VacuumControlService } from './vacuum-control.service';

describe('VacuumControlService', () => {
  let service: VacuumControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacuumControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
