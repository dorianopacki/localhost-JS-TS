import { strict } from "assert";

export interface User {
  _id: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  tags: string[];
  friends: Friend[];
}

export interface Friend {
  id: number;
  name: string;
}

export const filterWith = (array: User[], phrase: number | string) => {
  if (typeof phrase === "string" && phrase.length < 3) return [];
  return ["bar"];
};

// TODO
// Well everything to be honest
// Find out if and how to pass a number as at leasr 3 chars long phrase (???XD)
