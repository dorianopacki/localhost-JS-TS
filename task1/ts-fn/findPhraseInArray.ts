type arrayOfTuples = [number, string][];

export const findPhraseInArray = (array: string[], phrase: string) => {
  if (array.length < 1) return "Given array seems to be empty";

  const copy = [...array];

  const result = copy.reduce(
    (acc: arrayOfTuples, val: string, index: number) => {
      if (val.toLocaleLowerCase().includes(phrase.toLocaleLowerCase())) {
        acc.push([index, val]);
      }
      return acc;
    },
    []
  );

  if (result.length < 1) {
    return "Couldn't find any mathching phrase in given array";
  } else {
    return result;
  }
};
