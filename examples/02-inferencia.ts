// # Declaración implícita (inferencia)

// La inferencia nos permite tipar variables implíciamente.
// actua cuando inicializamos variables o operamos valores ya tipados.
// Cuando Typescript tiene suficiente información:

export const items = ['1', 2, '3'];

export const lengths = items.map(
  item => item.length
);

export const numbers = items.map(
  item => {
    if (typeof item === 'string') return parseInt(item);
    return item;
  }
);