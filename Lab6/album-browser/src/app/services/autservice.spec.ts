import { TestBed } from '@angular/core/testing';

import { Autservice } from './autservice';

describe('Autservice', () => {
  let service: Autservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Autservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
