// export const aggregateArrayIntoChunks = <T>(array: T[]) => {
//   const output = []

// };

export const aggregateArrayIntoChunks = (array: unknown[]) => {
  const output = [];
  const copy = [...array];

  const randomNumber = function () {
    return Math.floor(Math.random() * (7 - 4) + 4);
  };

  while (copy.length > 0) {
    output.push([copy.splice(0, randomNumber())]);
  }

  return output;
};
