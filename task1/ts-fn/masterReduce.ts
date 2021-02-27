type mapFnCallback = <T>(currentValue: T, index?: number, array?: T[]) => T[];

export const mapFn = <T>(array: T[], callback: mapFnCallback) => {
  const copy: T[] = [];
  copy.reduce((acc: T[], av: T, index: number, array: T[]) => {
    acc.push(callback(av, index, array));
    return acc;
  }, []);
};

type filterFnCallback = <T>(
  currentValue: T,
  index?: number,
  array?: T[]
) => boolean;

export const filterFn = <T>(array: T[], callback: filterFnCallback) => {
  const copy: T[] = array;
  copy.reduce((accumulator, currentValue, index, copy) => {
    if (callback(currentValue, index, copy)) return accumulator;
  }, [] as T[]);
};
