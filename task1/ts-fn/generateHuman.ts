import axios from "axios";

const getUser = () => {
  axios
    .get("https://random-data-api.com/api/users/random_user")
    .then((response) => {
      console.log(response);
    });
};
