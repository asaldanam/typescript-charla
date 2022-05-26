// # Type assertions

// En algunos casos Typescript no determinar correctamente un tipo
// y nos otorga uno más genérico. Esto puede suceder por ejemplo en
// el acceso al DOM ya que Typescript no tiene conocimiento sobre el HTML:

export const image = document.querySelector('#my-image');

// No podemos declarar el tipo a la variable, porque no hay suficiente "overlap"
// Entre tipos como para que el tipo valor que estamos introduciendo sea asignable al
// tipo de la variable: 

export const typedImage1: HTMLImageElement = document.querySelector('#my-image');

// En estos casos, podemos forzar un tipo garantizándole a Typescript 
// que el resultado que puede esperar es el que queremos:

export const typedImage2 = document.querySelector('#my-image') as HTMLImageElement;
export const imageUrl = typedImage2.src;

// Hay que tener en cuenta que estos comportan cierto riesgo, ya que si 
// #my-image no existe en el DOM, imageUrl provocará una excepción.