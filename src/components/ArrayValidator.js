import BaseValidator from "./BaseValidator";

export default class ArrayValidator extends BaseValidator {
  constructor() {
    super();
    this.rules = [(value) => typeof value === "object"];
  }

  required() {
    return this.addRule((array) => Array.isArray(array));
  }

  sizeOf(size) {
    return this.addRule((array) => array.length === size);
  }  
}