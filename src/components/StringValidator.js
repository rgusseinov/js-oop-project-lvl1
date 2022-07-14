import BaseValidator from './BaseValidator';

export default class StringValidator extends BaseValidator {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => !Boolean(value) || typeof value === "string"];
  }

  required() {
    return this.addRule((value) => value !== "" && value !== null);
  }

  contains(substring) {
    return this.addRule((value) => value.includes(substring));
  }

  minLength(length) {
    return this.addRule((value) => value.length >= length);
  }
}
