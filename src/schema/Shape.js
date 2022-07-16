import BaseSchema from './Base';

export default class ShapeSheme extends BaseSchema {
  constructor(...args) {
    super(...args);
    this.rules = [(value) => typeof value === 'object'];
    this.shapeData = {};
  }

  shape(data) {
    this.shapeData = data;
  }

  isValid(obj) {
    if (obj === null || obj === undefined) return true;
    return (
      Object.keys(obj).every((key) => this.shapeData[key].isValid(obj[key]))
      && Object.keys(obj).length === Object.keys(this.shapeData).length
    );
  }
}
