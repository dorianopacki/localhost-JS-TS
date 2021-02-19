export const findPhraseInArray = (array: string[], phrase: string) => {
  if (typeof phrase !== "string")
    return "Second argument has to of type string";

  const copy = [...array].entries();
  for (const el of copy) {
    if (el[1] === phrase) {
      return el;
    }
  }

  return "There is no such a phrase in given array!";
};
