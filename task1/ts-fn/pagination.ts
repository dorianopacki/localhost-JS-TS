type settingsProps = {
  actualPageIndex: number;
  entriesOnPage: number;
};

function areValuesValid(object: settingsProps) {
  const value = Object.values(object);
  for (let val in value) {
    const number = parseInt(val);
    if (!isNaN(number) && Number.isFinite(number) && Number.isInteger(number))
      return true;
  }
}

export const paginateArray = <T>(dataEntries: T[], settings: settingsProps) => {
  if (dataEntries.length < 1) return "Given array is empty";
  if (!areValuesValid(settings)) return "Settings values are not valid";

  const { entriesOnPage, actualPageIndex } = settings;

  if (dataEntries.length / entriesOnPage <= actualPageIndex)
    return "Number of pages is smaller than given page index";

  const index = entriesOnPage * (actualPageIndex - 1);
  const entriesOnSelectedPage: T[] = dataEntries.slice(
    index,
    index + entriesOnPage
  );

  return entriesOnSelectedPage;
};
