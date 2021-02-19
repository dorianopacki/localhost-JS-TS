// forEach

export const forEachFn = <T>(array: T[], callback: Function): void => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

// map

export const mapFn = <T>(array: T[], callback: Function) => {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

// entries

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

export const everyFn = <T>(array: T[], callback: Function) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) return false;
  }
  return true;
};

// some

export const someFn = <T>(array: T[], callback: Function) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) return true;
  }
  return false;
};

// *****************

// import {
//   forEachFn,
//   mapFn,
//   filterFn,
//   everyFn,
//   someFn,
//   reduceFn,
// } from "./task1/ts-fn/arrayMethods";

// ********
// const nums = [1, 2, 3, 4];
// const chars = ["a", "b", "c", "d"];

// const multiply = (x: number) => x * 2;
// const multiply = (x: number) => x > 0;

// ********

// forEachFn(nums, multiply);

// const a = mapFn(chars, multiply);

// const a = filterFn(nums, (x: number) => x >= 2);

// const a = everyFn(chars, (x: any) => typeof x === "number");

// const a = someFn(nums, (x: any) => x === 3);

// const a = reduceFn(nums, (acc: number, val: number) => acc + val, null);
// console.log(a);
