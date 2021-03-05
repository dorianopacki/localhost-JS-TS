type avaiblePhase = string | number;

export function filterWith<T>(arrOfSomething: T[], phrase: avaiblePhase): T[] {
  if (typeof phrase === "number") {
    if (phrase.toString().length < 2) {
      return [];
    }
  } else {
    if (phrase.length < 2) {
      return [];
    }
  }
  const toSearch = new RegExp(phrase.toString().toLowerCase());

  return arrOfSomething.filter((element) => {
    if (typeof element === "string") {
      return element.toLowerCase().match(toSearch);
    }

    if (typeof element === "number") {
      return element.toString().match(toSearch);
    }

    if (Array.isArray(element)) {
      return filterWith(element, phrase).length > 0;
    }

    if (Object.prototype.toString.call(element) === "[object Object]") {
      const arrayOfValues = Object.values(element);
      return filterWith(arrayOfValues, phrase).length > 0;
    }

    return false;
  });
}
