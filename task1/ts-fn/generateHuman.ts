import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { User } from "./User";

type userInfo = {
  results: {
    gender: string;
    name: { title: string; first: string; last: string };
    nat: string;
  };
};

const MIN_AGE: number = 18;
const MAX_AGE: number = 85;

const randomAge = () =>
  Math.floor(Math.random() * (MAX_AGE - MIN_AGE)) + MIN_AGE;

export const generateHuman = () => {
  const getUser = function () {
    axios
      .get<any>("https://randomuser.me/api/?inc=gender,name,nat")
      .then((response) => {
        let people = response.data.results;
        return people.map((human: any) => new User(human, randomAge));
      })
      .catch((error) => console.log(error));
  };
  return getUser();
};
