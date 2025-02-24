import { Component } from '@angular/core';
import { PokemonTitleComponent } from "../../ui/pokemon-title/pokemon-title.component";

@Component({
  selector: 'app-home-page',
  imports: [PokemonTitleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export default class HomePageComponent {
}
