// # Mapped types

// Esto nos permite declarar las keys de un objeto a partir de un literal union type
// sin necesidad de declararla una a una

export type AssertionsList = 'equal' | 'notEqual' | 'moreThan' | 'lessThan'
export type Assertions = {
  [assertion in AssertionsList]: (a: any, b: any) => boolean;
}

export const assertions: Assertions = {
  // Implementar en la charla
}