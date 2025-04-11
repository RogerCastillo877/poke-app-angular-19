import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { Species, Sprites } from '../../pokemons/models/pokemon.model';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-pokemon-card',
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './pokemon-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent implements OnInit {

  id = input.required<number>();
  name = input.required<string>();
  species = input.required<Species>();
  images = input.required<any[]>()
  defauld = 2;
  img?: string | null = null;

  ngOnInit(): void {
    this.img = this.images()[0] as string;
  }

  changeImage(num: number) {
    const min = 0;
    const max = this.images().length - 1;

    this.defauld = this.defauld + num;
    const index = this.defauld > max ? this.defauld = min : this.defauld < min ? this.defauld = max : this.defauld;
    this.img = this.images()[index] as string;
  }
}
