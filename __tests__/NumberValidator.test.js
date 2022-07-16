/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import Validator from "../src/Validator";

test("Number schema without required", () => {
  const v = new Validator();
  const schema = v.number();

  expect(schema.isValid(123)).toBe(true);
  expect(schema.isValid("123")).toBe(false);
  expect(schema.isValid("hello")).toBe(false);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid({})).toBe(false);
  expect(schema.isValid([])).toBe(false);
});

test("Number schema with required", () => {
  const v = new Validator();
  const schema = v.number();
  schema.required();

  expect(schema.isValid(null)).toBe(false);
  expect(!schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(false);
  expect(schema.isValid(7)).toBe(true);
  expect(schema.isValid(0)).toBe(true);
  expect(schema.isValid(-777)).toBe(true);
  expect(schema.isValid(10.12)).toBe(true);
  expect(schema.isValid({})).toBe(false);
  expect(schema.isValid("hello")).toBe(false);
});

test("Number schema positive value", () => {
  const v = new Validator();
  const schema = v.number();

  expect(schema.positive().isValid(112)).toBe(true);
  expect(schema.positive().isValid(0)).toBe(false);
  expect(schema.positive().isValid(-1)).toBe(false);
  expect(schema.positive().isValid(null)).toBe(true);
  expect(schema.positive().isValid("hello")).toBe(false);
});

test("Number schema range values", () => {
  const v = new Validator();
  const schema = v.number();
  schema.range(-5, 5);
  expect(schema.isValid(-6)).toBe(false);
  expect(schema.isValid(0)).toBe(true);
  expect(schema.isValid(6)).toBe(false);
});
