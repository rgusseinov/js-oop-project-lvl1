/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import Validator from "../src/components/Validator";

test("Validator without required", () => {
  const v = new Validator();
  const schema = v.number();
  expect(schema.isValid(123)).toBe(true);
  expect(schema.isValid("hello")).toBe(false);
  expect(schema.isValid(null)).toBe(true);
});

test("Validator with required", () => {
  const v = new Validator();
  const schema = v.number();
  schema.required();
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid(7)).toBe(true);
});

test("Validator positive value", () => {
  const v = new Validator();
  const schema = v.number();
  expect(schema.positive().isValid(112)).toBe(true);
  expect(schema.positive().isValid(0)).toBe(false);
  expect(schema.positive().isValid(-1)).toBe(false);
});

test("Validator range values", () => {
  const v = new Validator();
  const schema = v.number();
  schema.range(-5, 5);
  expect(schema.isValid(-6)).toBe(false);
  expect(schema.isValid(0)).toBe(true);
  expect(schema.isValid(6)).toBe(false);
});
