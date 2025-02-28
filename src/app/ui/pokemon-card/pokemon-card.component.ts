import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Species, Sprites } from '../../pokemons/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  imports: [],
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  id = input.required<number>();
  name = input.required<string>();
  species = input.required<Species>();
  image = input.required<string>()
}
