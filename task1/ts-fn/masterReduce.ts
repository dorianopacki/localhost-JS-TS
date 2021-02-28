//filter

type filterFnCallback = <T extends number | string>(
  currentValue: T,
  index: number,
  array: T[]
) => boolean;

export const filterFn = <T extends number | string>(
  array: T[],
  callback: filterFnCallback
) => {
  const copy = [...array];

  return copy.reduce((accumulator, currentValue, index, copy) => {
    const shouldBepushed = callback(currentValue, index, copy);
    if (shouldBepushed) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, [] as T[]);
};

//map

export const mapFn = <T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => T
) => {
  const copy = [...array];

  return copy.reduce((accumulator: T[], currentValue, index, copy) => {
    accumulator.push(callback(currentValue, index, copy));
    return accumulator;
  }, []);
};

//every

export const everyFn = <T>(
  array: T[],
  callback: (currentValue: T, index: number, array: T[]) => boolean
) => {
  const copy = [...array];

  return copy.reduce(
    (accumulator, currentValue, index, copy) =>
      accumulator && callback(currentValue, index, copy),
    true
  );
};

//some

export const someFn = <T>(
  array: T[],
  callback: (currentValue: T, index: number, array: T[]) => boolean
) => {
  const copy = [...array];

  return copy.reduce((accumulator, currentValue, index, copy) => {
    if (callback(currentValue, index, copy)) return true;
    return accumulator;
  }, false);
};
