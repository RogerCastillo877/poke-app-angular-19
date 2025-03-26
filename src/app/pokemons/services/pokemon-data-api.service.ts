import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { BasicPokemon, PokemonApiResponse } from '../models/pokemon-api-response.model';
import { PokemonMapper } from '../mapper/pokemon.mapper';
import { FullPokemon, Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataApiService {

  private http = inject(HttpClient);

  pokemonsArray = signal<Pokemon[]>([]);
  pokemonsDataLoading = signal(true);
  // pokeArr = signal<FullPokemon>();

  constructor() {
    this.loadPokemons();
    console.log(this.pokemonsArray())
  }

  loadPokemons(cant: number = 10) {
    const pokemons: FullPokemon[] = [];
    for (let index = 1; index <= cant; index++) {
      this.http.get<FullPokemon>(`${environment.urlPokemonApi}/pokemon/${index}`)
        .subscribe((resp) => {
          // pokemons.push(PokemonMapper.mapFullPokemonItemToPokemon(resp));
          pokemons.push(resp);
          this.pokemonsArray.set([...pokemons]);
        })
    }
    this.pokemonsDataLoading.set(false);
  }

  searchPokemonById(id: number = 1): Observable<FullPokemon> {
    return this.http.get<FullPokemon>(`${environment.urlPokemonApi}/pokemon/${id}`);
  }
}

// '?limit=20&offset=0'
// '/pokemon/{id or name}/'
// '/type/{id or name}/'
// '/evolution-chain/{id}/'
// '/pokedex/{id or name}/'
// 'item/{id or name}/'
