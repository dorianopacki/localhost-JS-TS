const canBuildATriangle = ([a, b, c]: number[]) => c < a + b;

export const isRectangularTriangle = (x1: number, x2: number, x3: number) => {
  if (isNaN(x1) || isNaN(x2) || isNaN(x3)) return "Number is not valid";
  if (x1 < 0 || x2 < 0 || x3 < 0)
    return "Side length has to be a natural number";

  const [a, b, c] = [x1, x2, x3].sort((a, b) => a - b);

  if (!canBuildATriangle([a, b, c]))
    return "The biggest side has to be greater than sum of smaller ones to create a triangle";

  function rectangularTriangleBuilder([x1, x2, x3]: number[]) {
    return Math.pow(x1, 2) + Math.pow(x2, 2) === Math.pow(x3, 2)
      ? "It is possible to build rectangular triangle with those sides"
      : "It is not possible to build rectangular triangle with those sides";
  }

  const canBuildRectangularTriangle = rectangularTriangleBuilder([a, b, c]);
  return canBuildRectangularTriangle;
};
