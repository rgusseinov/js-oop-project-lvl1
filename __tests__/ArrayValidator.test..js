/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import Validator from "../src/components/Validator";

test("Validator array", () => {
  const v = new Validator();

  const schema = v.array();
  expect(schema.isValid(null)).toBe(true);
});

test("Validator array with required", () => {
  const v = new Validator();
  const schema = v.array();

  schema.required();
  expect(schema.isValid(123)).toBe(false);
  expect(schema.isValid([])).toBe(true);
  expect(schema.isValid(['hexlet', 1988])).toBe(true);
});

test("Validator test array size", () => {
  const v = new Validator();
  const schema = v.array();

  schema.required();
  schema.sizeOf(2);

  expect(schema.isValid([1])).toBe(false);
  expect(schema.isValid([10])).toBe(false);
  expect(schema.isValid(['hexlet', 1988])).toBe(true);
  expect(schema.isValid(['', 1988])).toBe(true);
});

