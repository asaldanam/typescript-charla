// # Enums

// Otra forma de acotar los valores de una variable es mediante Enums. 
// A diferencia de los string literals un enum si que será transpilado 
// a un objeto en javascript

export enum Products {
  ABANCA    = '0adsfm1012k-a0dskfas0k-a0sdfj00k',
  BANKINTER = 'asd0fksdf0k-1932m4k0as-13j9mj9fs',
  SANTANDER = '0sk0sdflg12-a9sdkfka0s-123123123'
}

export const product: Products = Products.ABANCA;

// Como se puede observar, los enum son particularmente interesantes 
// cuando el listado de valores no es lo suficientemente significativo
// como para que el código sea legible.