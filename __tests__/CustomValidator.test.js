/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import Validator from "../src/Validator";

test("Custom scheme with startsWith function", () => {
  const v = new Validator();
  const fn = (value, start) => value.startsWith(start);
  v.addValidator("string", "startWith", fn);

  const schema = v.string().test("startWith", "H");
  expect(schema.isValid("exlet")).toBe(false);
  expect(schema.isValid("Hexlet")).toBe(true);
  expect(schema.isValid("HF")).toBe(true);
});

test("Custom scheme with min function", () => {
  const v = new Validator();
  const fn2 = (value, min) => value >= min;
  v.addValidator("number", "min", fn2);

  const schema2 = v.number().test("min", 5);
  expect(schema2.isValid(4)).toBe(false);
  expect(schema2.isValid(6)).toBe(true);
});

test("Custom scheme range numbers", () => {
  const v = new Validator();
  const fn3 = (value, from, to) => value >= from && value <= to;
  v.addValidator("number", "range", fn3);

  const schema2 = v.number().test("range", 3, 6);
  expect(schema2.isValid(4)).toBe(true);
  expect(schema2.isValid(6)).toBe(true);
  expect(schema2.isValid(7)).toBe(false);
});

test("Custom scheme with wrong fn name", () => {
  const v = new Validator();

  const fn = (value, start) => value.startsWith(start);
  v.addValidator('string', 'a', fn);
  const schema = v.string().test("a", "H");
  expect(schema.isValid("exlet")).toBe(false);
});
