import { TestBed } from '@angular/core/testing';

import { TokenofferingService } from './tokenoffering.service';

describe('TokenofferingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenofferingService = TestBed.get(TokenofferingService);
    expect(service).toBeTruthy();
  });
});
