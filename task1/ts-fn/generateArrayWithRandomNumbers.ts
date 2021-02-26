export const generateArrayWithRandomNumbers = (
  howManyNumbers: number,
  min: number,
  max: number
) => {
  // NaN ??? brak walidacji na NaN
  if (howManyNumbers < 1)
    throw Error("Amount of numbers can't be smaller than 1"); // musi być liczba całkowita

  if (min < 1 || max < 1)
    throw Error("Minimum and maxiumum value can't be smaller than 1");

  // min > max -> error

  const output: number[] = [];

  const randomNumber = () => Math.floor(Math.random() * (max - min)) + min;

  for (let i = 0; i < howManyNumbers; i++) {
    output.push(randomNumber());
  }
  return output;
};

export const generateArrayOfArrays = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number
) => {
  if (howManyArrays < 1)
    throw Error("Amount of arrays can't be smaller than 1");
  if (howManyNumbers < 1)
    throw Error("Amount of numbers can't be smaller than 1");
  if (min < 1 || max < 1)
    throw Error("Minimum and maxiumum value can't be smaller than 1");

  const output: number[][] = [];
  for (let i = 0; i < howManyArrays; i++) {
    output.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
  }
  return output;
};
