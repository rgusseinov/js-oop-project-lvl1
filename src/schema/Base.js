export default class BaseSchema {
  constructor(assignValidators = {}) {
    this.assignValidators = assignValidators;
    this.rules = [];
    this.shapeData = {};
  }

  test(fName, ...args) {
    return this.addRule((value) => {
      const res = this.assignValidators[fName](value, ...args);
      return res;
    });
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
