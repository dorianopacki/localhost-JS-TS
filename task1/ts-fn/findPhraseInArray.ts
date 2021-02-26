// do poprawy

// type anyTuple = [number, string];

export const findPhraseInArray = (array: string[], phrase: string) => {
  const copy = [...array];
  const result = copy.reduce((acc, av, index) => {
    if (av.toLocaleLowerCase() === phrase.toLocaleLowerCase()) {
      acc.push([index, av]);
    }
  }, [] as [number, string][]);
  return result;
};

// result = [[id, elem],[ id, elment],[]]
