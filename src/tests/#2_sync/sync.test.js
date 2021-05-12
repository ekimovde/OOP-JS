const Lodash = require("./sync");

describe("Lodash compact:", () => {
  let _ = new Lodash();
  let array;

  beforeEach(() => {
    array = [false, 42, 0, "", true, null, "hello"];
  });

  afterAll(() => {
    _ = new Lodash();
  });

  test("Should by defined", () => {
    expect(_.compact).toBeDefined();
    expect(_.compact).not.toBeUndefined();
  });

  test("Should working array be editable", () => {
    array.push(...["one", "two"]);

    expect(array).toContain("one");
    expect(array).toContain("two");
  });

  test("Should remove falsy values from array", () => {
    const result = [42, true, "hello"];

    expect(_.compact(array)).toEqual(result);
  });

  test("Should NOT contain falsy values", () => {
    expect(_.compact(array)).not.toContain(false);
    expect(_.compact(array)).not.toContain(0);
    expect(_.compact(array)).not.toContain("");
    expect(_.compact(array)).not.toContain(null);
  });
});
