export const isRectangularTriangle = (x1: number, x2: number, x3: number) => {
  // walidacja na nany
  if (isNaN(x1) || isNaN(x2) || isNaN(x3)) return;
  if (x1 < 0 || x2 < 0 || x3 < 0) return;

  const [a, b, c] = [x1, x2, x3].sort((a, b) => a - b);

  if (a < 0) return "Side length has to be a natural number";

  //

  function triangleBuilder([x1, x2, x3]: number[]) {
    return Math.pow(x1, 2) + Math.pow(x2, 2) === Math.pow(x3, 2)
      ? "It is possible to build rectangular triangle with those sides"
      : "It is not possible to build rectangular triangle with those sides";
  }

  const canBuildTriangle = triangleBuilder([a, b, c]);
  return canBuildTriangle;
};

// czy to są numery
// czy to nie są nany
// czy nie są ujemne

// ??? [1,1,9]

// czy trójkąt jest prostokątny
