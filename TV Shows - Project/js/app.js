((data, ui) => {

    $(() => {

        data.fetchShows(data.baseEndpoint, createHomepageCallback, ui.displayError);

        $(ui.selectors.searchInput).on("keyup", () => {

            let currentValueSearch = ui.searchByValueURL();

            data.fetchShows(currentValueSearch, createDropdownCallback, ui.displayError);

        })
    })


    // CALLBACK FUNCTIONS
    const createHomepageCallback = (response) => {
        const topShows = response.filter(element => parseFloat(element.rating.average) > 8.3).slice(0, 50);
        ui.createHomePage(topShows);

        $(ui.selectors.card).on("click", function () {
            const singleSearchUrl = ui.generateURL(this.id);

            createShowPageOnSelect(singleSearchUrl);
        });
    }

    const createDropdownCallback = (response) => {
        ui.createDropDownList(response);

        $(".dropdown li").on("click", function (e) {
            e.stopPropagation();

            const singleSearchUrl = ui.generateURL(this.id);

            createShowPageOnSelect(singleSearchUrl);
        })

        $(ui.selectors.searchInput).on("blur", () => {
            setTimeout(() => {
                $(".dropdown").css("display", "none");
            }, 150);
        })
    }

    const createShowPageOnSelect = (singleSearchUrl) => {
        data.fetchShows(singleSearchUrl, pageCreationCallback, ui.displayError);
        ui.createShowPage(this.id);
    }

    const pageCreationCallback = (({ id, name, image, _embedded, summary }) => {
        let show = data.createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary);
        ui.createShowPage(show);
    })

})(dataModule, uiModule);