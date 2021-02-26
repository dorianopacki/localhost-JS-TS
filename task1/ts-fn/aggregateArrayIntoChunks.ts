const MAX_VALUE = 7,
  MIN_VALUE = 4;

const randomNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const aggregateArrayIntoChunks = <T>(array: Array<T>) => {
  const output: Array<Array<T>> = [];

  function setChunksLength() {
    const givenArray = [...array];
    const result = [];

    while (givenArray.length > 0) {
      result.push(givenArray.splice(0, randomNumber(MAX_VALUE, MIN_VALUE)));
    }

    if (result.some((el) => el.length < MIN_VALUE)) {
      setChunksLength();
    } else {
      output.push(...result);
    }
  }

  setChunksLength();
  return output;
};
