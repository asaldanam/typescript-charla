// # Keyof operator

// Nos permite obtener las propiedades del tipo de un objeto como un literal type

export interface User {
  id: number;
  name: string;
  roles: {
    app1: string;
    app2: [];
  }
}

export type RolesApps = keyof User['roles'];

export const app1: RolesApps = 'app1';
export const app3: RolesApps = 'app3';