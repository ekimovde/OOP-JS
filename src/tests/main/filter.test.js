const Container = require("../../Container");

describe("Filter function", () => {
  let container = new Container();
  let array;

  beforeEach(() => {
    array = [
      {
        replacement: "[a->x]-[b->y]-[c->z]",
        decodedText: "xyz",
        text: "abc",
        name: "2",
      },
      {
        replaceNumber: "[a->3]-[b->2]-[c->1]",
        decodedText: "321",
        text: "abc",
        name: "6",
      },
      { shift: 10, decodedText: "klm", text: "abc", name: "4" },
    ];
  });

  afterAll(() => {
    container = new Container();
  });

  test("Should by defined:", () => {
    expect(container.filter(array, 0)).toBeDefined();
    expect(container.filter(array, 0)).not.toBeUndefined();
  });

  test("Should compare all elements:", () => {
    expect(container.filter(array, 0)).toEqual(true);
    expect(container.filter(array, 1)).toEqual(false);
    expect(container.filter(array, 2)).toEqual(false);
  });

  test("Should check for the content:", () => {
    expect(container.filter(array, 0)).not.toContain(false);
    expect(container.filter(array, 1)).not.toContain(true);
    expect(container.filter(array, 2)).not.toContain(true);
  });
});
