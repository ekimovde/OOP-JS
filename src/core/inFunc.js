const Replacement = require("./Replacement");
const Shift = require("./Shift");
const ReplaceNumber = require("./ReplaceNumber");

export const inFunc = (tmp, setText, array) => {
  switch (tmp[0]) {
    case "1":
      let replacement = new Replacement();
      replacement.in(tmp.toString().split(" "));

      setText = replacement;
      setText.setText(tmp.split(" ")[1].replace(/\r/g, ""));
      setText.setName(tmp.split(" ")[3].replace(/\r/g, ""));
      array.push(replacement);

      break;
    case "2":
      let shift = new Shift();
      shift.in(tmp.toString().split(" "));

      setText = shift;
      setText.setText(tmp.split(" ")[1].replace(/\r/g, ""));
      setText.setName(tmp.split(" ")[3].replace(/\r/g, ""));
      array.push(shift);

      break;
    case "3":
      let replaceNumber = new ReplaceNumber();
      replaceNumber.in(tmp.toString().split(" "));

      setText = replaceNumber;
      setText.setText(tmp.split(" ")[1].replace(/\r/g, ""));
      setText.setName(tmp.split(" ")[3].replace(/\r/g, ""));
      array.push(replaceNumber);

      break;
    default:
      return 0;
  }
};
