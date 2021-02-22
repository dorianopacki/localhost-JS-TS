export const getMyAge = (date: string | number | Date) => {
  const currentYear = new Date().getFullYear();

  if (typeof date === "string" && isNaN(parseInt(date)))
    return "Given string can't be transform to number";
  if (formatDate(date) > currentYear || formatDate(date) < 1900)
    return "Year / Date format is not valid";

  function formatDate(date: string | number | Date) {
    if (typeof date === "string") {
      return parseInt(date);
    } else if (typeof date === "number") {
      return date;
    } else if (Object.prototype.toString.call(date) === "[object Date]") {
      return date.getFullYear();
    } else {
      throw new Error("Ups.. Something went wrong");
    }
  }

  function calculateAge() {
    const data = formatDate(date);
    return currentYear - data;
  }

  const age = calculateAge();
  return age;
};
