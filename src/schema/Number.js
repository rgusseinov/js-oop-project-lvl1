import BaseSchema from "./Base";

export default class NumberShema extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [
      (value) => (!isNaN(value) && typeof value !== "object") || value === null
    ];
  }

  required() {
    return this.addRule((value) => !isNaN(value));
  }

  positive() {
    return this.addRule((value) => value > 0 || value === null);
  }

  range(from, to) {
    return this.addRule((value) => value >= from && value <= to);
  }
}
