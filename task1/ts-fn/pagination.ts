type Settings = {
  actualPageIdx: number;
  entriesOnPage: number;
};

export const pagination = (dataEntries: number, settings: Settings) => {
    const paginatedList = []
    const entriesOnPage = settings.entriesOnPage
    const currentPage = settings.actualPageIdx
    let upperLimit, lowerLimit

    for(let i = 1; i < entriesOnPage && i < dataEntries) {
        if(lowerLimit > 1) {
            
        }
    }
};
