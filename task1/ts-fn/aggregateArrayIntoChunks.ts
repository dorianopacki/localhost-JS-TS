const MAX_VALUE = 7,
  MIN_VALUE = 4;

type ArrayType = (string | number)[];

const randomNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);

export const aggregateArrayIntoChunks = (array: ArrayType) => {
  const output: (string | number)[][][] = [];

  const givenArray = [...array];

  while (givenArray.length > 0) {
    output.push([givenArray.splice(0, randomNumber(MAX_VALUE, MIN_VALUE))]);
  }

  return output;
};
