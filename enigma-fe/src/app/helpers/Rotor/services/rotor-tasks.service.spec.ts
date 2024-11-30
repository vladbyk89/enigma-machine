import { TestBed } from '@angular/core/testing';

import { RotorTasksService } from './rotor-tasks.service';

describe('RotorTasksService', () => {
  let service: RotorTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotorTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
