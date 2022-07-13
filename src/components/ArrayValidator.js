import BaseValidator from "./BaseValidator";

export default class ArrayValidator extends BaseValidator {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => typeof value === "object"];
  }

  required() {
    return this.addRule((array) => Array.isArray(array));
  }

  sizeof(size) {
    return this.addRule((array) => array.length === size);
  }
}
