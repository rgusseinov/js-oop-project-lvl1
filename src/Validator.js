import {
  StringSchema, NumberSchema, ArraySchema, ShapeSchema,
} from './schema';

export default class Validator {
  constructor() {
    this.assignValidators = {
      string: {}, number: {}, array: {}, object: {},
    };
  }

  addValidator(type, name, fn) {
    if (!Object.prototype.hasOwnProperty.call(this.assignValidators, type)) {
      throw new Error(`Method ${type} not exist`);
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
