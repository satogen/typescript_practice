export {};

class MyNumber {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumber('HAMUSANN', 123455);

// card.owner = 'Ham';
console.log(card.owner);
console.log(card.debugPrint());
card.secretNumber = 20;

console.log(card.debugPrint());

// let card._secretNumber
console.log(card.secretNumber);
