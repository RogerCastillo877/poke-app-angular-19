import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { BasicPokemon, PokemonApiResponse } from '../models/pokemon-api-response.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataApiService {

  private http = inject(HttpClient);

  pokemonsArray = signal<BasicPokemon[]>([]);
  pokemonsDataLoading = signal(true);

  constructor() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.http.get<PokemonApiResponse>(`${environment.urlPokemonApi}/pokemon?limit=10&offset=0`)
      .subscribe((resp) => {
        this.pokemonsArray.set(resp.results);
        this.pokemonsDataLoading.set(false);
      })
  }
}

// '?limit=20&offset=0'
// '/pokemon/{id or name}/'
// '/type/{id or name}/'
// '/evolution-chain/{id}/'
// '/pokedex/{id or name}/'
// 'item/{id or name}/'
