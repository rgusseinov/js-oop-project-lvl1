import BaseSchema from "./Base";

export default class Number extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => !(value) || typeof value === 'number'];
  }

  required() {
    return this.addRule((value) => Number.isInteger(value));
  }

  positive() {
    return this.addRule((value) => value > 0 || typeof value === 'object');
  }

  range(from, to) {
    return this.addRule((value) => value >= from && value <= to);
  }
}