const Container = require("../../Container");

describe("Clear function", () => {
  let container = new Container();
  let array;

  beforeEach(() => {
    array = ["1", 2, 3, 4, "5"];
  });

  beforeAll(() => {
    container = new Container();
  });

  test("Should by defined:", () => {
    expect(container.clear(array)).toBeDefined();
    expect(container.clear(array)).not.toBeUndefined();
  });

  test("Should compare all elements:", () => {
    expect(container.clear(array)).toEqual([]);
  });

  test("Should check for the content:", () => {
    expect(container.clear(array)).not.toContain(false);
    expect(container.clear(array)).not.toContain(true);
    expect(container.clear(array)).not.toContain("");
    expect(container.clear(array)).not.toContain(null);
  });
});
