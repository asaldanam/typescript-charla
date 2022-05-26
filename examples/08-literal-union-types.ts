// # Literal union types

// Como complemento a los tipos primitimos, podemos declarar tipos que acoten
// sus valores a unos dados, por ejemplo:

export type ErrorType = 'forbidden' | 'not-found' | 'uncaught'
export const errorType: ErrorType = 'forbidden';

export type ErrorCode = 403 | 404 | 500;
export const errorCode: ErrorCode = 404;