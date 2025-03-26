import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PokemonDataApiService } from '../../services/pokemon-data-api.service';

import { PokemonPanelComponent } from "../../components/pokemon-panel/pokemon-panel.component";
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { FullPokemon } from '../../models/pokemon.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [PokemonPanelComponent, AsyncPipe],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
  pokeDataService = inject(PokemonDataApiService);

  requestPokemon$: Subject<any> = new BehaviorSubject('');

  otherPokemon$: Observable<FullPokemon> = this.requestPokemon$.pipe(
    switchMap(_ => this.pokeDataService.searchPokemonById(_))
  )

  onSearch(query: string) {
    this.requestPokemon$.next(query)
    this.otherPokemon$.subscribe(res => console.log(res))
  }
}
