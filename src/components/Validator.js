import StringValidator from "./StringValidator";
import NumberValidator from "./NumberValidator";

export default class Validator {
  constructor() {}

  string() {
    return new StringValidator("string");
  }

  number() {
    return new NumberValidator("number");
  }
}
