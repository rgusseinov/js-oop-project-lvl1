import BaseSchema from './Base';

export default class String extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => !(value) || typeof value === 'string'];
  }

  required() {
    return this.addRule((value) => value !== '' && value !== null);
  }

  contains(substring) {
    return this.addRule((value) => value.includes(substring));
  }

  minLength(length) {
    return this.addRule((value) => value.length >= length);
  }
}