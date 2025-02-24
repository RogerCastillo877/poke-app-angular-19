import { Component, signal } from '@angular/core';
import { NavComponent } from "../../../../ui/nav/nav.component";
import { PokemonCardComponent } from "../../components/pokemon-card/pokemon-card.component";
import SearchByComponent from '../../components/search-by/search-by.component';

@Component({
  selector: 'app-search-page',
  imports: [NavComponent, SearchByComponent, PokemonCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  pokemons = signal<any[]>([
    { id: 1, name: 'pokemon1' },
    { id: 2, name: 'pokemon2' },
    { id: 3, name: 'pokemon3' },
  ]);
}
