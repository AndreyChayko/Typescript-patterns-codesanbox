import { ISandwich } from "./ISandwich";

export class Customer {
  private food: ISandwich[] = [];
  constructor(private balance: number) {}

  makeOrder(sandwich: ISandwich) {
    if (sandwich.price < this.balance) {
      this.food.push(sandwich);
      this.balance -= sandwich.price;
    } else {
      console.log(
        `Oooops, I have not enough money to order - ${sandwich.type}`
      );
    }
  }

  printOrderDetails() {
    if (this.food.length) {
      this.food.forEach((sandwich) => {
        console.log(`You ordered ${sandwich.type} by $${sandwich.price}`);
      });
    }
  }
}
