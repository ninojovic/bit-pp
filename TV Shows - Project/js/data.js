const dataModule = (() => {

    const ajaxGetTopShows = (apiURL) => {


    }

    const ajaxGetCurrentSearch = (apiURL, searchValue) => {


    }

    const ajaxGetSelectedShow = (apiURL, searchValue) => {



    }

    const createSeason = (startDate, endDate) => new Season(startDate, endDate);

    const actor = (name, surname) => new Actor(name, surname);

    const createShow = (id, name, posterURL, listOfSeasons, listOfActors, details) => {
// CHECK VARIABLES NAMES
        let seasonsList = listOfSeasons.map(season => new Season({startDate}, {endDate}));
        let actorsList = listOfActors.map(actor => new Actor({name}, {surname}));

        return new Show(id, name, posterURL, seasonsList, actorsList, details);
    }
    return {

    }
})();