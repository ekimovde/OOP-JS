const { sum, nativeNull } = require("./intro");

describe("Sum function:", () => {
  test("Should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(1, 3)).toEqual(4);
  });

  test("Should return value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(10);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test("Should sum 2 float values correctl", () => {
    expect(sum(0.3, 0.4)).toBeCloseTo(0.7);
  });
});

describe("Native null function:", () => {
  test("Native null should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // undefined, null, 0, ''
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
