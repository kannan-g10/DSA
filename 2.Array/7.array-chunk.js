const arrChunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    // console.log("------------", chunk);
    chunked.push(chunk);
    index += size;
  }

  return chunked;
};

console.log(arrChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(arrChunk([1, 2, 3, 4, 5], 2));
