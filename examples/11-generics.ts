// # Generics

// En algunso casos podemos tener componentes o módulos reutilizables que no tienen una API definida
// y queremos tener la posibilidad de poder pasarle valores de varios tipos

// De primeras, nuestra primera idea podría ser hacer uso de el tipo "any", pero esto nos hace
// perder las posibilidades que nos ofrece la inferencia en estos casos.

// En este escenario, podemos utilizar "Generics" (tipos variables). Es habitual que los generics
// extiendan de otros tipos si consideramos que puede haber un acote de lo que podemos pasarle

export function createOption<V extends string | number>(value: V, text: string) {
  return { value, text }
}

// El tipo del parámetro ha sido inferido a "value" gracias al Generic

export const option1 = createOption(1, 'bulbasaur');
option1.value.toFixed();
option1.value.length; 

export const option2 = createOption('a', 'bulbasaur');
option2.value === 'b';

// Si queremos darle un tipo más genérico o concreto, podemos hacerlo
// pasándolo como "diamante"
export const option3 = createOption<string>('a', 'bulbasaur');
option3.value === 'b';

// Esto mismo podemos aplicarlo a los tipos, además que podemos declarar tantos
// generics como deseemos:

export type Response<D> = { data: D, status: 200 | 500 }
export type Pokemon = { id: number, name: string, skills: string[] }

// Incluso Typescript ya nos provee algunas utilidades de este tipo, como Promise<>

export async function getPokemon(): Promise<Response<Pokemon>> {
  const data = await Promise.resolve({ id: 1, name: 'bulbasaul', skills: ['latigo cepa'] })
  return { data, status: 200 }
}

(async () => {
  const bulbasaur = await getPokemon();
  console.log(bulbasaur.status);
  console.log(bulbasaur.data.id);
  console.log(bulbasaur.data.name);
  console.log(bulbasaur.data.otracosa);
})()