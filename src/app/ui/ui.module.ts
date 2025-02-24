import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTitleComponent } from './pokemon-title/pokemon-title.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PokemonTitleComponent,
    NavComponent
  ],
  exports: [
    PokemonTitleComponent,
    NavComponent
  ]
})
export class UiModule { }
