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
  images = input.required<any>()
  defauld = 2;
  img?: string | null = null;

  ngOnInit(): void {
    this.img === null ? this.img = this.images().front_default : this.img;
  }

  changeImage(num: number) {
    const imgs = Object.values(this.images()).slice(0, Object.values(this.images()).length - 2).filter(x => x !== null);
    const min = 0;
    const max = imgs.length - 1;

    this.defauld = this.defauld + num;
    const index = this.defauld > max ? this.defauld = min : this.defauld < min ? this.defauld = max : this.defauld;
    this.img = imgs[index] as string;
  }
}
