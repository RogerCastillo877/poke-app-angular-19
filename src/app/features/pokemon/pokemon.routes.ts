import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})

export class PokemonRoutesModule { }
