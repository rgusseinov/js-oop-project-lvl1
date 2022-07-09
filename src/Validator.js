/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
// @ts-check

export default class Validator {
  constructor(type) {
    this.validTypes = type;
    this.options = { required: false, contains: null, minLength: null };
  }

  string() {
    return new Validator("string");
  }

  required() {
    this.options.required = true;
  }

  minLength(length) {
    this.options.minLength = length;
  }

  isValid(value) {
    if (this.options.required) {
      if (!value) return false;

      if (this.options.contains) return value.includes(this.options.contains);
      if (this.options.minLength) return value.length >= this.options.minLength;

      return Boolean(value);
    } else {
      if (this.options.contains) {
        if (!value) return false;
        return value.includes(this.options.contains);
      }
      if (Number.isInteger(value)) return false;
      if (this.options.minLength) return value.length >= this.options.minLength;
    }
    return value != " ";
  }
  contains(value) {
    this.options.contains = value;
    return this;
  }
}
