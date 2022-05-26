// # Utility types

// Typescript nos proporciona varias utilidades "out of the box" para crear tipos derivados.

// Partiendo de la siguiente interface (valdría también type)

export interface Lead {
  id: number;
  name: string;
  surname: string;
  source?: 'google' | 'facebook'
}

// Partial: Nos permite hacer todas sus claves opcionales
export const lead1: Partial<Lead> = { id: 1 } 
lead1.name?.length
lead1.name.length

// Omit: omite una o más propiedades
export const lead2: Omit<Lead, 'name' | 'surname'> = { 
  id: 1,
  name: 'Paco',
}

// Pick: incluye sólo lo indicado: 
export const lead3: Pick<Lead, 'id' & 'name'>