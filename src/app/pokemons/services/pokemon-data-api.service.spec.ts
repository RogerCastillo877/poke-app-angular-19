import { TestBed } from '@angular/core/testing';

import { PokemonDataApiService } from './pokemon-data-api.service';

describe('PokemonDataApiService', () => {
  let service: PokemonDataApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDataApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
