((data, ui) => {

    $(() => {

        $.get(ui.genericSearchURL)
            .done(response => {
                const topShows = response.filter(element => parseFloat(element.rating.average) > 8.3).slice(0, 50);
                ui.createHomePage(topShows);

                $(ui.selectors.card).on("click", function () {
                    const singleSearchUrl = ui.generateURL(this.id);

                    createShowPageOnSelect(singleSearchUrl);
                });
            })
            .fail(() => { ui.error(); });

        $(ui.selectors.searchInput).on("keyup", () => {

            let currentValueSearch = ui.searchByValueURL();

            $.get(currentValueSearch)
                .done(response => {
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
                })
                .fail(() => { ui.error(); });
        })

        
        const createShowPageOnSelect = (singleSearchUrl) => {
            $.get(singleSearchUrl)
                .done(({ id, name, image, _embedded, summary }) => {
                    let show = data.createShow(id, name, image.medium, _embedded.seasons, _embedded.cast, summary);
                    ui.createShowPage(show);
                })
                .fail(() => { ui.error(); });

            ui.createShowPage(this.id);
        }
    })

})(dataModule, uiModule);