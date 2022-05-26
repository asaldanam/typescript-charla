// # Herencia y composición

// Podemos crear tipos e interfaces que hereden de otros
export interface Machine {
  on: boolean;
}

export interface Transport {
  wheels: number
}

export interface Car extends Machine, Transport {
  model: string;
}

export const myCar: Car = {
  on: true,
  model: 'kia ceed',
  wheels: 4,
}

// Esto mismo se puede hacer con types mediante el operador de concatenación:
export type CarType = { model: string } & Machine & Transport;

export const otherCar: CarType = {
  on: true,
  model: 'kia ceed',
  wheels: 4,
}