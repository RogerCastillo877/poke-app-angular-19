import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Pokemon, PokemonApiResponse } from '../models/pokemons.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataApiService {

  private http = inject(HttpClient);

  pokemonsArray = signal<Pokemon[]>([]);
  pokemonsDataLoading = signal(true);

  constructor() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.http.get<PokemonApiResponse>(`${environment.urlPokemonApi}/pokemon?limit=10&offset=0`)
      .subscribe((resp) => {
        this.pokemonsArray.set(resp.results);
        this.pokemonsDataLoading.set(false);
        console.log(this.pokemonsArray(), resp.results);
      })
  }
}
