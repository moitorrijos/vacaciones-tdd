import { vacaciones } from "./vacaciones";
import { test, expect } from "vitest";

test("vacaciones tomadas", () => {
  expect(vacaciones(30, [10, 30])).toEqual([0, 10])
  expect(vacaciones(5, [10, 30])).toEqual([5, 30])
})