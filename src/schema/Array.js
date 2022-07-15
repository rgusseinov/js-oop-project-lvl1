import BaseSchema from "./Base";

export default class ArrayShema extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => Array.isArray(value)];
  }

  required() {
    return this.addRule((array) => Array.isArray(array));
  }

  sizeof(size) {
    return this.addRule((array) => array.length === size);
  }
}