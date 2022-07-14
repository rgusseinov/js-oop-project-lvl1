import StringValidator from './StringValidator';
import NumberValidator from './NumberValidator';
import ArrayValidator from './ArrayValidator';
import ShapeValidator from './ShapeValidator';

export default class Validator {
  constructor() {
    this.assignValidators = {};
  }

  addValidator(type, name, fn) {
    this.assignValidators[type] = { [name]: fn };
  }

  string() {
    return new StringValidator(this.assignValidators, 'string');
  }

  number() {
    return new NumberValidator(this.assignValidators, 'number');
  }

  array() {
    return new ArrayValidator(this.assignValidators, 'array');
  }

  object() {
    return new ShapeValidator(this.assignValidators, 'object');
  }
}
