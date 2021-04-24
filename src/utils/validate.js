export const validate = (tmp) => {
  let array = tmp.toString().split(" ");
  const regNumbers = /[0-9]/;
  const regWords = /[A-Za-zА-Яа-я]/;

  if (array.length === 4) {
    if (parseInt(array[0]) === 1) {
      if (
        regWords.test(array[1]) &&
        regWords.test(array[2]) &&
        array[1].length === array[2].length
      )
        return true;
    }

    if (parseInt(array[0]) === 2) {
      if (regWords.test(array[1]) && regNumbers.test(parseInt(array[2])))
        return true;
    }

    if (parseInt(array[0]) === 3) {
      if (
        regWords.test(array[1]) &&
        regNumbers.test(array[2]) &&
        array[1].length === array[2].length
      )
        return true;
    }
  }
};
