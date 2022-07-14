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
    return new StringValidator({ assignValidators: this.assignValidators, validatorType: 'string' });
  }

  number() {
    return new NumberValidator({ assignValidators: this.assignValidators, validatorType: 'number' });
  }

  array() {
    return new ArrayValidator({ assignValidators: this.assignValidators, validatorType: 'array' });
  }

  object() {
    return new ShapeValidator({ assignValidators: this.assignValidators, validatorType: 'object' });
  }
}
