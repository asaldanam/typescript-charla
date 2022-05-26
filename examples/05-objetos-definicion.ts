// # Objetos: definición de tipos

// Hasta ahora hemos visto como tipar valores primitivos que ya vienen
// definidos en Typescript, sin embargo para objetos es suele ser habitual
// declararlos como 'interfaces' y/o 'types'

// Ambas sintaxis son equivalentes en el 99% de los casos, pero
// existen diferencias y convenciones en su aplicación
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// https://blog.logrocket.com/types-vs-interfaces-in-typescript/

// Sintaxis interface
export interface UserInterface {
  id: number;
  name: string;
}

// Sintaxis type
export type UserType = {
  id: number;
  name: string;  
}

// Podemos definir propiedades las cuales desconocemos pero 
// si conocemos el valor que tendrán, por ejemplo:

export interface Form {
  [key: string]: string;
}

// Esto nos permite aplicar este tipo a diferentes objetos acotando
// El tipo de sus propiedades al definido en la interfaz:

export const form1: Form = {
  username: 'Abel',
  password: '1234',
  nonStringField: 1,
}
