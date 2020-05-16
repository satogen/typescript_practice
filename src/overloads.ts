export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value == 'number') {
    return value ** 2;
  } else if (typeof value == 'string') {
    return value + value;
  }
  // else {
  //   throw 'NO NUMBER STRING';
  // }
}

console.log(double('3'));
console.log(double('Go'));
