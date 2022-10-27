import { TestBed } from '@angular/core/testing';

import { PackagesDataService } from './packages-data.service';

describe('PackagesDataService', () => {
  let service: PackagesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
