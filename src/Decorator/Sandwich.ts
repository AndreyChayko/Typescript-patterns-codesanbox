import { ISandwich } from "./ISandwich";

export class BaseSandwich implements ISandwich {
  constructor(public type: string, public price: number) {}

  description(): void {
    console.log(`${this.type} sandwich with price - $${this.price}`);
  }
}

export class DeluxeSandwich implements ISandwich {
  public type: string;
  public price: number = 0;

  constructor(private baseSandwich: ISandwich) {
    this.type = `Deluxe ${this.baseSandwich.type}`;
    this.price = this.baseSandwich.price + 2.5;
  }

  description(): void {
    console.log(`Wow! ${this.type} sandwich with price - $${this.price}`);
  }
}
