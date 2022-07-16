import {
  StringSchema, NumberSchema, ArraySchema, ShapeSchema,
} from './schema';

export default class Validator {
  constructor() {
    this.assignValidators = {};
  }

  addValidator(type, name, fn) {
    if (!Object.prototype.hasOwnProperty.call(events, key)) {
      throw new Error(`Method ${type} not exist`);
    }
    if (!this.assignValidators[type]) {
      this.assignValidators[type] = {};
    }
    this.assignValidators[type][name] = fn;
  }

  string() {
    return new StringSchema(this.assignValidators.string);
  }

  number() {
    return new NumberSchema(this.assignValidators.number);
  }

  array() {
    return new ArraySchema(this.assignValidators.array);
  }

  object() {
    return new ShapeSchema(this.assignValidators.object);
  }
}
