export {};

let fooCompatible: any;
let barCompatible: string = 'TYpeScript';

console.log(typeof fooCompatible);

// fooCompatible = barCompatible;

fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooInCompatible: string;

let barInCompatible: number = 1;

// fooInCompatible = barInCompatible;

let fooString: string;
let barstring: string = 'string';

fooString = barstring;

// 方にはお互いに互換性がある
// 互換性がない場合には、エラーが出る。

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'Hamsan');
