import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-panel',
  imports: [],
  templateUrl: './pokemon-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPanelComponent { }
