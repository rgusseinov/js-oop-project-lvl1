export default class BaseValidator {
  constructor() {
    this.rules = [];
  }

  addRule(rule) {
    this.rules.push(rule);
    return this;
  }
  
  isValid(value) {
    return this.rules.every((rule) => rule(value));
  }
}
