const sentenceCapital = str => {
  str = str.toLowerCase();
  let capsArr = [],
    newArr = [],
    word = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') word += str[i];
    else {
      newArr.push(word);
      word = '';
    }
  }

  newArr.push(word);

  for (let j = 0; j < newArr.length; j++)
    capsArr[j] = newArr[j][0].toUpperCase() + newArr[j].slice(1);

  return capsArr.join(' ');
};

console.log(sentenceCapital('heLLo world'));
console.log(sentenceCapital('nature is always beautiful!'));
