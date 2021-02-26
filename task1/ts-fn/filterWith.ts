const isAnArray = <T>(data: T): boolean => Array.isArray(data);
const isAnObject = <T>(data: T): boolean =>
  Object.prototype.toString.call(data) === "[object Object]";
const isAString = <T>(data: T): boolean => typeof data === "string";
const isNumber = <T>(data: T): boolean => typeof data === "number";
const doesMatchPhrase = (
  data: string | number,
  phrase: string | number
): boolean => data.toString().toLowerCase() === phrase.toString().toLowerCase(); //regexp

export function filterWith<T>(array: T[], phrase: string | number): T[] {
  const isArrayNotEmpty = array.length > 0;
  const isPhraseLongEnough = phrase.toString().length > 2;

  if (!isArrayNotEmpty)
    throw new TypeError("Array should have at least one element");

  if (!isPhraseLongEnough) return [];

  function iterateThrough(data: any) {
    for (let key in data) {
      if (isAnArray(data[key]) || isAnObject(data[key])) {
        iterateThrough(data[key]);
      } else {
        if (doesMatchPhrase(data[key])) {
          console.log(`got it ${data[key]}`);
        }
      }
    }
  }

  // .filter

  // const searchingPhrase = new RegExp(phrase.toString());
  iterateThrough(array);
  return [];
}

// cos

//TODO
//switch matching method to match regexp, return data and fix types in iterateThrough fun
