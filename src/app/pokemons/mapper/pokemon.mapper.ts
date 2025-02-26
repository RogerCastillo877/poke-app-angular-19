import { FullPokemon, Pokemon } from "../models/pokemon.model";

export class PokemonMapper {
  static mapFullPokemonItemToPokemon(pokemonItem: FullPokemon) {
    return {
      id: pokemonItem.id,
      name: pokemonItem.name,
      species: pokemonItem.species,
      sprites: pokemonItem.sprites
    }
  }

  static mapPokemonsItemsToPokemonArray(pokemonItems: FullPokemon[]): Pokemon[] {
    return pokemonItems.map(this.mapFullPokemonItemToPokemon);
  }
}
