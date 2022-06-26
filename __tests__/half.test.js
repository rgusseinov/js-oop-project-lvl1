/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
import { test, expect } from "@jest/globals";
import half from "../index.js";

test("half", () => {
  expect(half(6)).toBe(3);
});
