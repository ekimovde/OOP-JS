const Container = require("../../Container");
let Writer = require("../../Writer");

describe("In function:", () => {
  let container = new Container();
  let writer = new Writer("out.txt");

  afterAll(() => {
    container = new Container();
  });

  test("Should by defined:", () => {
    expect(container.out(writer)).toBeDefined();
    expect(container.out(writer)).not.toBeUndefined();
  });

  test("Should check the input function:", () => {
    let result = [
      "ReplaceNumber: [г->5]-[l->3], DecodedText: 53",
      "Replacement: [А->б]-[б->а], DecodedText: ба",
      "Shift: 2, DecodedText: Мрф",
    ];

    // expect(container.out(writer)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(container.out(writer)).not.toContain();
    expect(container.out(writer)).not.toContain(null);
    expect(container.out(writer)).not.toContain(false);
    expect(container.out(writer)).not.toContain(true);
    expect(container.out(writer)).not.toContain("");
  });
});
