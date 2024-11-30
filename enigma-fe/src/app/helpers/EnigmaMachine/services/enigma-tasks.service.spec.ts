import { TestBed } from '@angular/core/testing';

import { EnigmaTasksService } from './enigma-tasks.service';

describe('EnigmaTasksService', () => {
  let service: EnigmaTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnigmaTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
