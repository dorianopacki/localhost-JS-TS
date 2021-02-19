export const generateArrayWithRandomNumbers = (
  howManyNumbers: number,
  min: number,
  max: number
) => {
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
  const output = [];
  for (let i = 0; i < howManyArrays; i++) {
    output.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
  }
  return output;
};
