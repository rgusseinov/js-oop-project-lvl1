import StringValidator from "./StringValidator";
import NumberValidator from "./NumberValidator";
import ArrayValidator from "./ArrayValidator";
import ShapeValidator from "./ShapeValidator";

export default class Validator {
  constructor() {}

  string() {
    return new StringValidator("string");
  }

  number() {
    return new NumberValidator("number");
  }

  array() {
    return new ArrayValidator("array");
  }

  object() {
    return new ShapeValidator("object");
  }
}
