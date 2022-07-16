import BaseSchema from './Base';

export default class ArrayShema extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => value === null || Array.isArray(value)];
  }

  required() {
    return this.addRule((array) => array != null);
  }

  sizeof(size) {
    return this.addRule((array) => array.length === size);
  }
}
