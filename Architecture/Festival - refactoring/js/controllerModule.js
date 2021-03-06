var controllerModule = (function (data, ui){

    //MOVIE CREATION EVENT HANDLER
    $(ui.selectors.createMovieBtn).click(function (){
        var movieData = ui.collectMovieData();

        if (movieData.emptyOrInvalid()){
            ui.errorMsg(ui.error.fillTheForm);
            return false;
        }

        var newMovieAndIndex = data.addMovieToList(movieData.title, movieData.length, movieData.genre);
        
        if (!newMovieAndIndex){
            ui.errorMsg(ui.error.alreadyInList);
            return false;
        }

        var newMovie = newMovieAndIndex[0];
        var newMovieIndex = newMovieAndIndex[1];
        ui.showMovieData(newMovie, newMovieIndex);

    })

    //PROGRAM CREATION EVENT HANDLER
    $(ui.selectors.createProgramBtn).click(function (){

        var programData = ui.collectProgramData();

        if (programData.emptyOrInvalid()){
            ui.errorMsg(ui.error.fillTheForm);
            return false;
        }

        var newProgramAndIndex = data.addProgramToList(programData.date);

        if (!newProgramAndIndex){
            ui.errorMsg(ui.error.alreadyInList);
            return false;
        }

        var newProgram = newProgramAndIndex[0];
        var newProgramIndex = newProgramAndIndex[1];
        ui.showProgramData(newProgram, newProgramIndex);

    })

    //ADD MOVIE TO PROGRAM
    $(ui.selectors.addMovieToProgramBtn).click(function (){

        var selectedMovieAndProgram = ui.collectAddMovieData();

        if (selectedMovieAndProgram.emptyOrInvalid()){
            ui.errorMsg(ui.error.fillTheForm);
            return false;
        }

        var movie = data.getMovieFromList(selectedMovieAndProgram.movieIndex);
        var program = data.getProgramFromList(selectedMovieAndProgram.programIndex);

        if (!program.addMovieToList(movie)){
            ui.errorMsg(ui.error.alreadyInList);
            return false;
        }
        
        ui.updateProgramData(program, selectedMovieAndProgram.programIndex);
    })

})(dataModule, uiModule);