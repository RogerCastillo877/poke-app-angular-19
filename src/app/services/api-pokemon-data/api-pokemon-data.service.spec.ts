import { TestBed } from '@angular/core/testing';

import { ApiPokemonDataService } from './api-pokemon-data.service';

describe('ApiPokemonDataService', () => {
  let service: ApiPokemonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPokemonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
