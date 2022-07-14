export default class BaseValidator {
  constructor({ assignValidators, validatorType }) {
    this.rules = [];
    this.shapeData = {};
    this.assignValidators = assignValidators;
    this.validatorType = validatorType;
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
