/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import Validator from "../src/Validator";

test("String schema without required", () => {
  const v = new Validator();
  const schema = v.string();

  expect(schema.isValid(123)).toBe(true);
  expect(schema.isValid()).toBe(true);
  expect(schema.isValid("Almaty")).toBe(true);
  // expect(schema.isValid(null)).toBe(false);

  expect(schema.isValid(undefined)).toBe(true);
  expect(schema.isValid({})).toBe(false);
  expect(schema.isValid([])).toBe(false);
  expect(schema.isValid(1 + 2)).toBe(true);

  expect(schema.isValid(0)).toBe(true);
  expect(schema.isValid(-10)).toBe(true);
});

test("String schema with required", () => {
  const v = new Validator();
  const schema = v.string();
  schema.required();

  expect(schema.isValid("what does the fox say")).toBe(true);
  expect(schema.isValid("hexlet")).toBe(true);
  // expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid("")).toBe(false);

  expect(schema.isValid()).toBe(false);
  expect(schema.isValid({})).toBe(false);
  expect(schema.isValid([])).toBe(false);
  expect(schema.isValid(undefined)).toBe(false);
  expect(schema.isValid(1)).toBe(true);
  expect(schema.isValid(0)).toBe(true);
  expect(schema.isValid(-5)).toBe(true);
  expect(schema.isValid(5 + 7)).toBe(true);
});

test("String schema contains substring", () => {
  const v = new Validator();
  const schema = v.string();
  schema.required();
  expect(schema.contains("what").isValid("what does the fox say")).toBe(true);
  expect(schema.contains("whatthe").isValid("what does the fox say")).toBe(
    false
  );

  expect(schema.contains("").isValid("hello from Kazakhstan")).toBe(false);
  expect(schema.contains(" ").isValid(" hello from")).toBe(false);

  expect(schema.contains(null).isValid("hello from Kazakhstan")).toBe(false);
  expect(schema.contains(undefined).isValid("hello from Kazakhstan")).toBe(
    false
  );
  expect(schema.contains().isValid("hello from Kazakhstan")).toBe(false);
  expect(schema.contains({}).isValid("hello from Kazakhstan")).toBe(false);
  expect(schema.contains([]).isValid("hello from Kazakhstan")).toBe(false);
  expect(schema.contains(1).isValid("hello from Kazakhstan")).toBe(false);
  expect(schema.contains(-5).isValid("hello from Kazakhstan")).toBe(false);

  expect(schema.isValid("what does the fox say")).toBe(false);
});

test("String schema with minLength", () => {
  const v = new Validator();
  const schema = v.string();
  schema.minLength(5);
  expect(schema.isValid("Hello from Almaty")).toBe(true);
  expect(schema.isValid("ALA")).toBe(false);
});
