import {StringSchema, NumberSchema, ArraySchema, ShapeSchema} from './schema';

export default class Validator {
  constructor() {
    this.assignValidators = {};
  }

  addValidator(type, name, fn) {
    this.assignValidators[type] = { [name]: fn };
  }

  string() {
    return new StringSchema({ assignValidators: this.assignValidators, validatorType: 'string' });
    // StringValidator(this.assignValidators.string);
  }

  number() {
    return new NumberSchema({ assignValidators: this.assignValidators, validatorType: 'number' });
  }

  array() {
    return new ArraySchema({ assignValidators: this.assignValidators, validatorType: 'array' });
  }

  object() {
    return new ShapeSchema({ assignValidators: this.assignValidators, validatorType: 'object' });
  }
}