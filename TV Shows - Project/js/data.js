const dataModule = (() => {

    const createSeason = (startDate, endDate) => new Season(startDate, endDate);

    const actor = (name, surname) => new Actor(name, surname);

    const createShow = (id, name, posterURL, listOfSeasons, listOfActors, details) => {

        let seasonsList = listOfSeasons.map(season => new Season(season.premiereDate, season.endDate));
        let actorsList = listOfActors.map(actor => new Actor(actor.person.name));

        return new Show(id, name, posterURL, seasonsList, actorsList, details);
    }
    return {
        createShow,
    }
})();