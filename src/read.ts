export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('HAMUSANN');

console.log(myVisaCard.owner);
// myVisaCard.owner = 'BE-KONN';
