const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const first = array.filter((item, index) => {
  if (index <= 5) {
    return item;
  }
});

console.log(first);
