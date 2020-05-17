export {};

class Person {
  public name: string;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationarily: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'JP');
// console.log(taro);
console.log(taro.name);
console.log(taro.profile());
// Protectedは、子クラスでも使うことができる
// Priavteは、そのクラス内でしか使えない
// Publicは、どこからのアクセスでも使える
