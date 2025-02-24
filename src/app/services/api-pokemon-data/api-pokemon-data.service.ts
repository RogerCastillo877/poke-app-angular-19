import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../features/pokemon/models/pokemon.model';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonDataService {
  // private http = inject(HttpClient);

  constructor() { }

  getPokemon(): any {
    // return this.http.get<Pokemon>(`${environment.urlPokemonApi}/pokemon/`);
  }
}
