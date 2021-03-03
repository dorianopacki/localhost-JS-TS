//utils
// const isAnArray = <T>(data: T): boolean => Array.isArray(data);
// const isAnObject = <T>(data: T): boolean =>
//   Object.prototype.toString.call(data) === "[object Object]";
// const isAString = <T>(data: T): boolean => typeof data === "string";
// const isNumber = <T>(data: T): boolean => typeof data === "number";
// const doesMatchPhrase = (data: string | number, phrase: RegExp) =>
//   !!data.toString().toLowerCase().match(phrase);

export function filterWith<T, U>(array: U, phrase: T): T[] {
  if (!Array.isArray(array)) {
    throw new Error("Aray is not valid");
  }
  if (
    typeof phrase !== "string" ||
    (typeof phrase !== "number" && phrase.length < 2)
  ) {
    return [];
  }
  const result = array.filter((element: T) => {
    for (const value of Object.values(element)) {
      if (typeof value === "string" && value === phrase) {
        return element;
      } else if (typeof value === "number" && value.toString() === phrase) {
        return element;
      } else if (typeof value === "object") {
        if (value.some((valueInArray: T) => valueInArray === phrase)) {
          return element;
        } else {
          const secondResult: T[] = filterWith(value, phrase);
          if (secondResult.some((valueInObject: T) => valueInObject)) {
            return element;
          }
        }
      }
    }
  });
  return result;
}
