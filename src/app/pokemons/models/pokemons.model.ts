export type PokemonApiResponse = {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export type Pokemon = {
  name: string;
  url: string;
}
