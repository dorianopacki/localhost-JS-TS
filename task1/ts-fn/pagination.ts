type Settings = {
  actualPageIdx: number;
  entriesOnPage: number;
};

const isValidNumber = (number: number) =>
  Number.isInteger(number) && !isNaN(number) && Number.isFinite(number);

const areArgumentsValid = (...args: number[]) =>
  args.every((argument) => isValidNumber(argument));

export const pagination = (dataEntries: number, settings: Settings) => {
  let amountOfPages: number,
    paginationRange: number,
    currentPage: number,
    startingPage: number;

  amountOfPages = dataEntries;
  paginationRange = settings.entriesOnPage;
  currentPage = settings.actualPageIdx;
  startingPage = 1;

  if (
    !areArgumentsValid(
      amountOfPages,
      paginationRange,
      currentPage,
      startingPage,
      settings.actualPageIdx,
      settings.entriesOnPage
    )
  )
    return "Argument's are not valid";

  const output: string[] = [];

  if (currentPage < paginationRange + 1) {
    startingPage = 1;
  } else if (currentPage >= amountOfPages - paginationRange / 2) {
    startingPage = Math.floor(amountOfPages - paginationRange + 1);
  } else {
    startingPage = currentPage - Math.floor(paginationRange / 2);
  }

  for (let i = startingPage; i <= startingPage + paginationRange - 1; i++) {
    if (i === currentPage) {
      output.push(`[${i}]`);
    } else {
      output.push(i.toString());
    }
  }

  return output;
};
