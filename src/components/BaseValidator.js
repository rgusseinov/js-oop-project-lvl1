export default class BaseValidator {
  constructor(...args) {
    this.rules = [];
    this.shapeData = {};
    this.assignValidators = args[0];
    this.validatorType = args[1];
  }

  test(fName, ...args) {
    return this.addRule((value) => this.assignValidators[this.validatorType][fName](value, ...args));
  }

  shape(data) {
    this.shapeData = data;
    return this;
  }

  addRule(rule) {
    this.rules.push(rule);
    return this;
  }

  isValid(value) {
    return this.rules.every((rule) => rule(value));
  }
}
