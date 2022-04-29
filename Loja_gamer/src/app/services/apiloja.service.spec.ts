import { TestBed } from '@angular/core/testing';

import { ApilojaService } from './apiloja.service';

describe('ApilojaService', () => {
  let service: ApilojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApilojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
