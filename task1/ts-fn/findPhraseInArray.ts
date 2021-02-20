export const findPhraseInArray = (array: string[], phrase: string) => {
  if (array.length < 1) return "Given array is empty!";
  if (phrase.length < 1) return "You can't pass an empty string!";

  const words = [...array].entries();
  for (const word of words) {
    if (word[1] === phrase) {
      return word;
    }
  }

  return "There is no such a phrase in given array!";
};
