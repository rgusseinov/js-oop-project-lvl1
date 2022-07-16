import BaseSchema from './Base';

export default class StringSheme extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => typeof value !== 'object' || value === null];
  }

  required() {
    return this.addRule((value) => value !== undefined && value !== '' && value !== null && typeof value !== 'object');
  }

  contains(substring) {
    return this.addRule((value) => value.indexOf(substring.trim()) !== -1);
  }

  minLength(length) {
    return this.addRule((value) => value.length >= length);
  }
}
