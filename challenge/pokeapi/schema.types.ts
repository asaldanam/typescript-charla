import { Pokemon } from "./models/pokemon.model";

export interface PokeApiSchema {
  '/api/v2/pokemon': {
    get: {
      params?: {
        query?: {
          limit?: number;
          offset?: number;
        }
      },
      response: {
        count: number;
        next: string;
        previous: string;
        results: definitions['list']
      }
    }
    post: {
      params: {
        body: Pokemon
      },
      response: null;
    }
  }
  '/api/v2/pokemon/:name': {
    get: {
      params: {
        route: {
          name: string;
        }
      },
      response: definitions['detail']
    }
  }
}

interface definitions {
  detail: Pokemon;
  list: Array<definitions['listItem']>;
  listItem: Pick<Pokemon, 'name'> & { url: string };
}