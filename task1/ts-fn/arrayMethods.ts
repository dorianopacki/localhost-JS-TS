// forEach

export const forEachFn = <T>(array: T[], callback: Function): void => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// map

export const mapFn = <T>(array: T[], callback: Function) => {
  const output: unknown[] = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

// entries

export const entriesFn = function* (array: any) {
  if (!array.length) return "array is empty";
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    let elements = array[i];
    arr.push(yield elements);
  }
  return arr;
};

// filter

export const filterFn = <T>(array: T[], callback: Function) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    callback(array[i]) ? output.push(array[i]) : null;
  }
  return output;
};

// reduce

export const reduceFn = <T, U>(array: T[], callback: Function, initial?: U) => {
  let accumulator = initial ? initial : null;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
};

// every

export const everyFn = <T>(array: T[], callback: Function): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) return false;
  }
  return true;
};

// some

export const someFn = <T>(array: T[], callback: Function): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return true;
  }
  return false;
};
