// # Declaración explícita

// Cuando los valores que tratamos son dinámicos y el tipo no puede ser inferido,
// no nos quedará más remedio que definir el tipo. Esta es la forma más común
// para definir los tipos en parámetros de funciones

export function getFullName(name: string, surname: string) {
  return `${name} ${surname}`
}

getFullName('Abel', 'Saldaña');

// Otro ejemplo es aquellas variables que inicializamos con un tipo
// Diferente porque vamos a reasignarlas en algún punto

export let name: string | null = null;

// Con el pipe "|" podemos declarar union types que nos permiten 
// contemplar los tipos de todos sus posibles valores