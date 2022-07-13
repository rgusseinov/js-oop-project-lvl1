/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import Validator from "../src/components/Validator";

test("Validator shape", () => {
  const v = new Validator();
  const schema = v.object();

  schema.shape({
    name: v.string().required(),
    age: v.number().positive(),
  });

  expect(schema.isValid({ name: "kolya", age: 100 })).toBe(true);
  expect(schema.isValid({ name: "maya", age: null })).toBe(true);
  expect(schema.isValid({ name: "", age: null })).toBe(false);
  expect(schema.isValid({ name: "ada", age: -5 })).toBe(false);
  expect(schema.isValid({ name: "ada" })).toBe(false);
  expect(schema.isValid({ age: 12 })).toBe(false);
});
