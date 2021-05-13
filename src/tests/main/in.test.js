const Container = require("../../Container");
let Reader = require("../../Reader");

describe("In function:", () => {
  let container = new Container();
  let reader = new Reader("in.txt");
  let result;

  beforeEach(() => {
    result = [
      {
        replaceNumber: "[г->5]-[l->3]",
        decodedText: "53",
        text: "гl",
        name: "Denis",
      },
      {
        replacement: "[А->б]-[б->а]",
        decodedText: "ба",
        text: "Аб",
        name: "Vlad",
      },
      { shift: 2, decodedText: "Мрф", text: "Кот", name: "Vadim" },
    ];
  });

  afterAll(() => {
    container = new Container();
  });

  test("Should file is opened: ", () => {
    expect(!reader.fileEmpty());
  });

  test("Should by defined:", () => {
    expect(container.in(reader)).toBeDefined();
    expect(container.in(reader)).not.toBeUndefined();
  });

  test("Should check the input function:", () => {
    expect(container.in(reader)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(container.in(reader)).not.toContain();
    expect(container.in(reader)).not.toContain(null);
    expect(container.in(reader)).not.toContain(false);
    expect(container.in(reader)).not.toContain(true);
    expect(container.in(reader)).not.toContain("");
  });
});
