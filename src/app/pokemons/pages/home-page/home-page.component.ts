import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PokemonDataApiService } from '../../services/pokemon-data-api.service';

import { PokemonPanelComponent } from "../../components/pokemon-panel/pokemon-panel.component";

@Component({
  selector: 'app-home-page',
  imports: [PokemonPanelComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent {
  pokeDataService = inject(PokemonDataApiService);
}
