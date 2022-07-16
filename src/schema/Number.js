import BaseSchema from './Base';

export default class NumberShema extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [
      (value) => (value === null || typeof value === 'number')
    ];
  }

  required() {
    return this.addRule((value) => value != null);
  }

  positive() {
    return this.addRule((value) => value == null || value > 0);
  }

  range(from, to) {
    return this.addRule((value) => value >= from && value <= to);
  }
}
