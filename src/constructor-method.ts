export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

let taro = new Person('Taro', 30);

const me = new Person('GEN', 20);
console.log(me);
