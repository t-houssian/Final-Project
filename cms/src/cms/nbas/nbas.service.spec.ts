import { TestBed } from '@angular/core/testing';

import { NbaService } from './nbas.service';

describe('NbaService', () => {
  let service: NbaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NbaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
