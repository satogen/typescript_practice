export {};

type Mojiretu = string;

const fooString: string = 'Hello';
const foo: Mojiretu = 'Hello';

type objectarray = {
  name: string;
  age: number;
};

const example: objectarray = {
  name: 'name',
  age: 43,
};

type Profile2 = typeof example;
