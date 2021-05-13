const SetText = require("../../core/SetText");

describe("LengthText function:", () => {
  let setText = new SetText();
  let str;

  beforeEach(() => {
    str = "Hello world!";
  });

  afterAll(() => {
    setText = new SetText();
  });

  test("Should by defined:", () => {
    expect(setText.setLengthText(str)).toBeDefined();
    expect(setText.setLengthText(str)).not.toBeUndefined();
  });

  test("Should compare one elements:", () => {
    expect(setText.setLengthText(str)).toEqual(12);
    expect(setText.setLengthText(str)).toBeGreaterThan(6);
    expect(setText.setLengthText(str)).toBeGreaterThanOrEqual(12);
    expect(setText.setLengthText(str)).toBeLessThan(20);
    expect(setText.setLengthText(str)).toBeLessThanOrEqual(12);
  });

  test("Should check for the content:", () => {
    expect(setText.setLengthText(str)).not.toContain(false);
    expect(setText.setLengthText(str)).not.toContain(true);
    expect(setText.setLengthText(str)).not.toContain(null);
    expect(setText.setLengthText(str)).not.toContain("");
  });
});
