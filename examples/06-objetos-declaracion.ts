// # Objetos: declaración de tipos

// Podemos usar estos tipos independientemente de la forma que
// estemos creandoe el objeto con Javascript:

import { UserInterface } from "./05-objetos-definicion";

export class User {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

function createUser(id: number, name: string) {
  return { id, name }
}

// Typescript comprobará si las propiedades del objeto coinciden

export const user1: UserInterface = new User(1, 'Paco');
export const user2: UserInterface = createUser(2, 'Pepe');
export const user3: UserInterface = { id: 3, name: 'Pablo' };