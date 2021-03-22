import { Customer } from "./Decorator/Customer";
import { BaseSandwich, DeluxeSandwich } from "./Decorator/Sandwich";

const customer = new Customer(10);
const baseSandwich = new BaseSandwich("Turkey", 1.33);
customer.makeOrder(baseSandwich);
customer.makeOrder(baseSandwich);
customer.makeOrder(baseSandwich);
customer.makeOrder(baseSandwich);
customer.makeOrder(new DeluxeSandwich(baseSandwich));
customer.printOrderDetails();
