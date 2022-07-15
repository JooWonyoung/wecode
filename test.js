const getEvenNum = () => {
  let result = [];

  for (i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
};
