export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return ' ican run';
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    return `${parentMessage}${this.speed}km/h`;
  }
}

// let animal = new Animal();
let animal = new Animal('simba');
let lion = new Lion('lion', 80);

// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
