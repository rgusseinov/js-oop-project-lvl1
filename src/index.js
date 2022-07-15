import Validator from "./Validator";

const v = new Validator();

const fn = (value, start) => value.startsWith(start);
// Метод добавления новых валидаторов
// addValidator(type, name, fn)
v.addValidator("string", "startWith", fn);

// Новые валидаторы вызываются через метод test
const schema = v.string().test("startWith", "H");
console.log(schema.isValid("exlet")); // false
console.log(schema.isValid("Hexlet")); // true
