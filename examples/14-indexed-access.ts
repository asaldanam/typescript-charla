// # Indexed Access

// Podemos crear tipos a partir de propiedaes de interfaces y otros tipos.

export interface User {
  id: number;
  name: string;
  roles: {
    app1: string;
    app2: [];
  }
}

// Esto es particularmente útil para casos de un sólo uso donde no queremos
// Disponer de un tipo independiente:

export function setUserRoles(roles: User['roles']) {
  console.log(roles.app1.length);
  console.log(roles.app1.push());
  
  console.log(roles.app2.push());
}