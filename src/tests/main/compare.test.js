const { compare } = require("../../utils/compare");
const SetText = require("../../core/SetText");

describe("Compare function:", () => {
  let setText = new SetText();
  let str1, str2;

  beforeEach(() => {
    str1 = "Кот";
    str2 = "Собака";
  });

  afterAll(() => {
    setText = new SetText();
  });

  test("Should by defined:", () => {
    expect(compare(setText, str1, str2)).toBeDefined();
    expect(compare(setText, str1, str2)).not.toBeUndefined();
  });

  test("Should compare two elements:", () => {
    const result = true;

    expect(compare(setText, str1, str2)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(compare(setText, str1, str2)).toBeTruthy();
    expect(compare(setText, str1, str2)).not.toContain(0);
    expect(compare(setText, str1, str2)).not.toContain(false);
    expect(compare(setText, str1, str2)).not.toContain(null);
    expect(compare(setText, str1, str2)).not.toContain("");
  });
});
