import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { PokemonCardComponent } from "../../../ui/pokemon-card/pokemon-card.component";
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-panel',
  imports: [PokemonCardComponent],
  templateUrl: './pokemon-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPanelComponent implements OnInit {

  pokemons = input.required<Pokemon[]>();

  ngOnInit(): void { }
}
