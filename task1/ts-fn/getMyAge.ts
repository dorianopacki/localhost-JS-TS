export const getMyAge = (date: string | number | Date) => {
  const currentYear = new Date().getFullYear();
  function formatData(): number {
    if (typeof date === "string") return parseInt(date);
    if (typeof date === "number") return date;
    if (date instanceof Date) return date.getFullYear();
  }

  function calculateAge() {
    const data = formatData();
    return currentYear - data;
  }
};
