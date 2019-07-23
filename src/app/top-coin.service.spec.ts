import { TestBed } from '@angular/core/testing';

import { TopCoinService } from './top-coin.service';

describe('TopCoinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopCoinService = TestBed.get(TopCoinService);
    expect(service).toBeTruthy();
  });
});
