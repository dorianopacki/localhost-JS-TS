export const isRectangularTriangle = (x1: number, x2: number, x3: number) => {
  if (x1 === 0 || x2 === 0 || x3 === 0)
    return "Side length can't be equal to 0";

  const sides = [x1, x2, x3].sort((a, b) => a - b);

  function triangleBuilder([x1, x2, x3]: number[]) {
    return Math.pow(x1, 2) + Math.pow(x2, 2) === Math.pow(x3, 2)
      ? "It is possible to build rectangular triangle with those sides"
      : "It is not possible to build rectangular triangle with those sides";
  }

  const canBuildTriangle = triangleBuilder(sides);
  return canBuildTriangle;
};
