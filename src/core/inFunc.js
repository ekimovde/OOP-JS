const Replacement = require("./Replacement");
const Shift = require("./Shift");

export const inFunc = (tmp, setText, array) => {
  switch (tmp[0]) {
    case "1":
      let replacement = new Replacement();
      replacement.in(tmp.toString().split(" "));

      setText = replacement;
      setText.setText(tmp.split(" ")[1].replace(/\r/g, ""));
      array.push(replacement);

      break;
    case "2":
      let shift = new Shift();
      shift.in(tmp.toString().split(" "));

      setText = shift;
      setText.setText(tmp.split(" ")[1]);
      array.push(shift);

      break;
    default:
      return 0;
  }
};
