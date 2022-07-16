import BaseSchema from "./Base";

export default class NumberShema extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [
      (value) => !isNaN(value) && typeof value !== "object",
    ];
  }

  required() {
    return this.addRule((value) => !isNaN(value));
  }

  positive() {
    return this.addRule((value) => value > 0 && typeof value === "number");
  }

  range(from, to) {
    return this.addRule((value) => value >= from && value <= to);
  }
}
