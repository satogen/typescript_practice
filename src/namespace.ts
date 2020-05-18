export {};

namespace Japanses {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanses.Tokyo.Person('HAMUSAN');
console.log(me.name);

const me2 = new English.Person('gen', 'gen', 'gen');
console.log(me.name);
