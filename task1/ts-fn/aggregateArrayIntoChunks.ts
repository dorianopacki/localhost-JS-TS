enum NumberRange {
  MAX_VALUE = 7,
  MIN_VALUE = 4,
}

type ArrayType = (string | number)[];

const randomNumber = (max: NumberRange, min: NumberRange): number =>
  Math.floor(Math.random() * (max - min) + min);

export const aggregateArrayIntoChunks = (array: ArrayType) => {
  const output: (string | number)[][][] = [];

  const givenArray = [...array];

  while (givenArray.length > 0) {
    output.push([
      givenArray.splice(
        0,
        randomNumber(NumberRange.MAX_VALUE, NumberRange.MIN_VALUE)
      ),
    ]);
  }

  return output;
};
