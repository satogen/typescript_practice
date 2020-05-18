export {};

class Me {
  static isProgramer: boolean = true;

  static firstName: string = 'sato';
  static lastName: string = 'gen';

  static work() {
    return `Hey, guys!${this.firstName}`;
  }
}
// let me = new Me();
// console.log(me.isProgramer);

console.log(Me.isProgramer);
// インスタンスを作らずにもアクセスできる。static変寸ならば

console.log(Me.work());
