export {};

let bmi = (weight: number, height: number, printabl?: boolean) =>
  weight / (height * height);

// let bmi = (weight: number, height: number, printabl: boolean) => weight / (height * height)

bmi(1.78, 87);
