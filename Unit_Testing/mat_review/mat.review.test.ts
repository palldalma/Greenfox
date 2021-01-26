import * as test from "tape";
import { NumberOperations } from "/Users/dalmapall/Desktop/Greenfox/Unit_Testing/mat_review/operations";

test("add: adding two numbers", (t) => {
  let operations = new NumberOperations();
  let actual = operations.add(1, 2);
  let expected = 3;
  t.equal(actual, expected);
  t.end();
});

test("subtraction", (t) => {
  let operations = new NumberOperations();
  t.equal(operations.subtract(5, 4), 1);
  t.end();
});
