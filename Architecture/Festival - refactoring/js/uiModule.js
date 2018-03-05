var uiModule = (function (){

    var selectors = {
        createMovieBtn: ".create-movie",
        movieTitleInput: ".movie-title",
        movieLengthInput: ".movie-length",
        genreSelectInput: ".genre-select",
        movieOrderedList: ".movie-list",
        createProgramBtn: ".create-program",
        programDateInput: ".program-date",
        programOrderedList: ".program-list",
        movieSelection: ".movie-select",
        programSelection: ".program-select",
        addMovieToProgramBtn: ".add-movie",
        updateProgramInfo: ".program-list li"
    }

    var error = {
        alreadyInList: "That's already in the list",
        fillTheForm: "Please fill all required fields",
    }

    function createElement (htmlTag){
        return document.createElement(htmlTag);
    }

    function collectMovieData(){
        var movieTitle = $(selectors.movieTitleInput).val();
        var movieLength = $(selectors.movieLengthInput).val();
        var movieGenre = $(selectors.genreSelectInput).val();

        return {
            title: movieTitle,
            length: movieLength,
            genre: movieGenre,
        }
    }

    function errorMsg(error){
        alert(error)
        return false;
    }

    function showMovieData(movie, index){
        var li = createElement("li");
        $(li).text(movie.getData());
        $(li).appendTo(selectors.movieOrderedList);

        var option = createElement("option");
        $(option).text(movie.title);
        $(option).val(index);
        $(option).appendTo(selectors.movieSelection);
    }

    function collectProgramData(){
        var programDate = $(selectors.programDateInput).val();

        return {
            date: programDate,
        }
    }

    function showProgramData(program, index){
        var li = createElement("li");
        $(li).text(program.getData());
        $(li).appendTo(selectors.programOrderedList);

        var option = createElement("option");
        $(option).text(program.formatedDate);
        $(option).val(index);
        $(option).appendTo(selectors.programSelection);
    }

    function collectAddMovieData (){
        var selectedMovieValue = $(selectors.movieSelection).val();
        var selectedProgramValue = $(selectors.programSelection).val();

        return {
            movieIndex: selectedMovieValue,
            programIndex: selectedProgramValue
        }
    }

    function updateProgramData(program, index){
        var li = createElement("li");
        $(li).text(program.getData());
        
        $(selectors.updateProgramInfo).eq(index).replaceWith(li);
    }

    var dataToExpose = {
        selectors: selectors,
        collectMovieData: collectMovieData,
        showMovieData: showMovieData,
        collectProgramData: collectProgramData,
        showProgramData: showProgramData,
        collectAddMovieData: collectAddMovieData,
        updateProgramData: updateProgramData,
        error: error,
        errorMsg: errorMsg,
    }

    return dataToExpose;
})();