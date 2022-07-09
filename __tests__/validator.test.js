/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import Validator from "../src/Validator.js";

const v = new Validator();
const schema = v.string();

test("Validator without required", () => {
  expect(schema.isValid(123)).toBe(false);
  expect(schema.isValid()).toBe(true);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);
});

test("Validator with required", () => {
  schema.required();
  expect(schema.isValid("what does the fox say")).toBe(true);
  expect(schema.isValid("hexlet")).toBe(true);
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid("")).toBe(false);
});

test("Validator contains", () => {
  schema.required();
  expect(schema.contains("what").isValid("what does the fox say")).toBe(true);
  expect(schema.contains("whatthe").isValid("what does the fox say")).toBe(
    false
  );
  expect(schema.isValid("what does the fox say")).toBe(false);
});
