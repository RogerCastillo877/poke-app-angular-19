import { Component, inject, signal } from '@angular/core';
import { ApiPokemonDataService } from '../../../../services/api-pokemon-data/api-pokemon-data.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-search-by',
  imports: [],
  templateUrl: './search-by.component.html',
  styleUrl: './search-by.component.scss'
})
export default class SearchByComponent {

  public apiPokemonService = inject(ApiPokemonDataService);

  requestNewPokemon$: Subject<void> = new Subject();
  name = signal('Pikachu')

  pokemon$: Observable<any> = this.requestNewPokemon$.pipe(
    switchMap(_ => this.apiPokemonService.getPokemon())
  )

  constructor() { }

  ngOnInit(): void {
    this.getNewPokemon();
  }

  getNewPokemon(): void {
    if (!this.name()) return;
    // this.requestNewPokemon$.next();
    console.log(this.name())
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
  }
}
