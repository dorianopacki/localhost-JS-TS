export function filterWith<T>(array: T[], phrase: string | number): T[] {
  const isArrayNotEmpty = array.length > 0;
  const isPhraseLongEnough = phrase.toString().length > 2;

  if (!isArrayNotEmpty)
    throw new TypeError("Array should have at least one element");

  if (!isPhraseLongEnough) return [];

  const isAnArray = <T>(data: T): boolean => Array.isArray(data);
  const isAnObject = <T>(data: T): boolean =>
    Object.prototype.toString.call(data) === "[object Object]";
  const isAString = <T>(data: T): boolean => typeof data === "string";
  const isNumber = <T>(data: T): boolean => typeof data === "number";
  const doesMatchPhrase = (data: string | number): boolean =>
    data.toString().toLowerCase() === phrase.toString().toLowerCase();

  function iterateThrough<T>(data: T) {
    if (isAnArray(data) || isAnObject(data)) {
      for (let element in data) {
        if (isAString(data[element])) {
        }
      }
    }
  }

  return [];
}
