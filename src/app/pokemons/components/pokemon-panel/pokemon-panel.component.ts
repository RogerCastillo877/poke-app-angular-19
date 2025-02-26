import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { PokemonCardComponent } from "../../../ui/pokemon-card/pokemon-card.component";
import { BasicPokemon } from '../../models/pokemon-api-response.model';

@Component({
  selector: 'app-pokemon-panel',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPanelComponent {

  basicPokemons = input.required<BasicPokemon[]>();
}
