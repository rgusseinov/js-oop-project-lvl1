/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
// @ts-check

export default class Validator {
  constructor(type) {
    this.stringValidTypes = ["", null, undefined];
    this.validTypes = { string: this.stringValidTypes };
    this.activeTypes = this.validTypes[type];
    this.options = { required: false, contains: null };
  }

  string() {
    return new Validator("string");
  }

  required() {
    this.options.required = true;
  }

  contains(value) {
    this.options.contains = value;
    return this;
  }

  isValid(value = "") {
    if (this.options.required) {
      if (!value) return false;
      if (this.options.contains) {
        return value.includes(this.options.contains);
      }
      return Boolean(value);
    }
    if (this.options.contains) {
      if (!value) return false;
      return value.includes(this.options.contains);
    }
    return (this.activeTypes.includes(value) || !value !== undefined);
  }
}
