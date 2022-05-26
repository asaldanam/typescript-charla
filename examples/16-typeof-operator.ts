// # Typeof operator

// Nos permite extraer un tipo de una variable:

export const payload = {
  limit: 10 as number,
  offset: 0 as number,
}

export function getUsers(params: typeof payload) {
  console.log(params.limit.toFixed())
  console.log(params.limit.length)
}

