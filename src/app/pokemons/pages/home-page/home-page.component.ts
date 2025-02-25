import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PokemonDataApiService } from '../../services/pokemon-data-api.service';

@Component({
  selector: 'app-home-page',
  imports: [],
  template: `<p>home-page works!</p>`,
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {

  pokeDataService = inject(PokemonDataApiService);

  constructor() { console.log(this.pokeDataService.pokemonsArray().length) }

}
