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
  pokeList = signal<PokemonApiResponse | null>(null);

  constructor() {
    this.loadPokemons();
    this.getPokemonsList();
  }

  loadPokemons(cant: number = 10) {
    const pokemons: Pokemon[] = [];
    for (let index = 1; index <= cant; index++) {
      this.http.get<FullPokemon>(`${environment.urlPokemonApi}/pokemon/${index}`)
        .subscribe((resp) => {

          pokemons.push(PokemonMapper.mapFullPokemonItemToPokemon(resp));
          this.pokemonsArray.set([...pokemons]);
        })
    }
    this.pokemonsDataLoading.set(false);
  }

  searchPokemonById(id: number = 1): Observable<FullPokemon> {
    return this.http.get<FullPokemon>(`${environment.urlPokemonApi}/pokemon/${id}`);
  }

  getPokemonsList() {
    return this.http.get<PokemonApiResponse>(`${environment.urlPokemonApi}/pokemon`)
      .subscribe(res => this.pokeList.set(res))
  }
}

// '?limit=20&offset=0'
// '/pokemon/{id or name}/'
// '/type/{id or name}/'
// '/evolution-chain/{id}/'
// '/pokedex/{id or name}/'
// 'item/{id or name}/'
