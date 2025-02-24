import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-pokemon-title',
  imports: [],
  templateUrl: './pokemon-title.component.html',
  styleUrl: './pokemon-title.component.scss'
})
export class PokemonTitleComponent {
  public environment = environment;
}
