import BaseValidator from "./BaseValidator";

export default class ShapeValidator extends BaseValidator {
  constructor() {
    super();
    this.rules = [(value) => typeof value === "object"];
    this.shapeData = {};
  }

  shape(data) {
    return (this.shapeData = data);
  }

  isValid(obj) {
    return (
      Object.keys(obj).every((key) => this.shapeData[key].isValid(obj[key])) &&
      Object.keys(obj).length === Object.keys(this.shapeData).length
    );
  }
}

/* schema.shape({
  name: v.string().required(),
  age: v.number().positive(),
});

schema.isValid({ name: 'kolya', age: 100 }); // true
schema.isValid({ name: 'maya', age: null }); // true
schema.isValid({ name: '', age: null }); // false
schema.isValid({ name: 'ada', age: -5 }); // false */
