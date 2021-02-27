type avaiableTypes = string | number | Date;

export const getMyAge = (input: avaiableTypes) => {
  const currentYear = new Date().getFullYear();

  if (typeof input === "string" && isNaN(parseInt(input)))
    return "Given string can't be transform to number";

  function formatDate(date: avaiableTypes) {
    if (typeof date === "string") {
      return parseInt(date); // nan
    } else if (typeof date === "number") {
      return date; // nan
    } else if (date instanceof Date) {
      return date.getFullYear(); // invalid Datae
    }
  }

  const correctDate = formatDate(input);
  if (correctDate > currentYear || correctDate < 1900)
    return "Date format is not valid";

  function calculateAge() {
    const data = formatDate(input);
    return currentYear - data;
  }

  const age = calculateAge();
  return age;
};
