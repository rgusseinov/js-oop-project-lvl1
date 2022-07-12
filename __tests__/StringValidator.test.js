/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import Validator from "../src/components/Validator";

test("Validator without required", () => {
  const v = new Validator();
  const schema = v.string();
  expect(schema.isValid(123)).toBe(false);
  expect(schema.isValid()).toBe(true);
  expect(schema.isValid("Almaty")).toBe(true);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);
});

test("Validator with required", () => {
  const v = new Validator();
  const schema = v.string();
  schema.required();
  expect(schema.isValid("what does the fox say")).toBe(true);
  expect(schema.isValid("hexlet")).toBe(true);
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid("")).toBe(false);
});

test("Validator contains", () => {
  const v = new Validator();
  const schema = v.string();
  schema.required();
  expect(schema.contains("what").isValid("what does the fox say")).toBe(true);
  expect(schema.contains("whatthe").isValid("what does the fox say")).toBe(
    false
  );
  expect(schema.isValid("what does the fox say")).toBe(false);
});

test("Validator with minLength", () => {
  const v = new Validator();
  const schema = v.string();
  schema.minLength(5);
  expect(schema.isValid("Hello from Almaty")).toBe(true);
  expect(schema.isValid("ALA")).toBe(false);
});