import { FullPokemon, Other, Pokemon, Sprites, Versions } from "../models/pokemon.model";

export class PokemonMapper {
  static mapFullPokemonItemToPokemon(pokemonItem: FullPokemon): Pokemon {
    const extraction: { key: string, value: string }[] = [];
    this.recursiveExtraction(pokemonItem.sprites, '', extraction);
    const allSprites = this.filterSpritesValues(extraction);

    return {
      id: pokemonItem.id,
      name: pokemonItem.name,
      species: pokemonItem.species,
      sprites: allSprites
    }
  }

  static mapPokemonsItemsToPokemonArray(pokemonItems: FullPokemon[]): Pokemon[] {
    return pokemonItems.map(this.mapFullPokemonItemToPokemon);
  }

  static recursiveExtraction(obj: any, parentKey: string, arr: any[]) {
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        this.recursiveExtraction(obj[key], `${parentKey}-${key}`, arr)
      } else {
        (!parentKey && key === 'front_default')
          ? arr.unshift({ [`${parentKey}-${key}`]: obj[key] })
          : arr.push({ [`${parentKey}-${key}`]: obj[key] });
      }
    }
  }

  static filterSpritesValues(arr: { key: string, value: string }[]): string[] {
    return arr.filter(item => Object.values(item)[0] !== null).map(item => Object.values(item)[0]);
  }
}
