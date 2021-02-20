import task1 from "./task1";
import { findPhraseInArray } from "./task1/ts-fn/findPhraseInArray";

const array = [1, 2, 3, 4];

const alphabet = "abcdefghijklmnoprstuwxyz".split("");
const ab = ["adam", "eve"];

const a = findPhraseInArray(ab, "adam");
console.log(a);
