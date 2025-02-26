export type PokemonApiResponse = {
  count: number;
  next: string;
  previous: null;
  results: BasicPokemon[];
}

export type BasicPokemon = {
  name: string;
  url: string;
}
