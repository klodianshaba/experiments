import { TestBed } from '@angular/core/testing';

import { LazyServiceService } from './lazy-service.service';

describe('LazyServiceService', () => {
  let service: LazyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
