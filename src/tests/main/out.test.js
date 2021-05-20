import fs from "fs";
let Container = require("../../Container");
let Reader = require("../../Reader");
let Writer = require("../../Writer");

describe("In function:", () => {
  let writer;
  let reader;
  let container = new Container();
  let dataOut = [
    {
      text: "гl",
      replaceNumber: "[г->5]-[l->3]",
      decodedText: "53",
      name: "Denis",
    },
    {
      text: "Аб",
      replacement: "[А->б]-[б->а]",
      decodedText: "ба",
      name: "Vlad",
    },
    { text: "Кот", shift: 2, decodedText: "Мрф", name: "Vadim" },
  ];

  beforeEach(() => {
    writer = new Writer("out.txt");
  });

  test("Should check the input function:", () => {
    let result =
      "Text: гl, Name: Denis, Length: 2, ReplaceNumber: [г->5]-[l->3], DecodedText: 53";
    reader = new Reader("in.txt");
    let array = container.in(reader);
    container.out(writer, array);
    writer.save();

    let readerOut = new Reader("out.txt");

    let arrayOut = reader.readLine();
    console.log(arrayOut);

    // expect(fs.readFileSync('out.txt').toString()).toEqual(result);
  });
});
