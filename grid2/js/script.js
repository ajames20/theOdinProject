//function to build grid
function buildGrid(size) {
    for (var row = 0; row < size; row++) {
        for (var column = 0; column < size; column++) {
            $('#container').append("<div class='grid'></div>");
        }
    }
    $('.grid').width(384 / size);
    $('.grid').height(384 / size);
}


//function to clear grid
function clearGrid() {
    $(".grid").remove();
}

//function to ask user how many boxes they would like to add
function userInput() {
    var askUser = prompt("How many boxes would you like to have on each side?");
    clearGrid();
    buildGrid(askUser);
}

$(document).ready(function() {
    //clears grid from any previous drawing
    clearGrid();
    //creating grid by calling the buildGrid function
    buildGrid(16);

    //function to create mouse over drawing
    $('.grid').mouseover(function() {
        $(this).css("background-color", "#6772e5");
    });


    //function to listen for click and to clear and rebuild grid
    $(".clear").click(function() {
        clearGrid();
        buildGrid(16);
        console.log("grid cleared");

        $('.grid').mouseover(function() {
            $(this).css("background-color", "#6772e5");
        });
    });

    //function ot listen for click and to build userInput for grid and draw
    $(".newGrid").click(function() {
        clearGrid();
        userInput();
        console.log("user grid");

        $('.grid').mouseover(function() {
            $(this).css("background-color", "#6772e5");
        });

    });

    $(".random").click(function() {
        clearGrid();
        buildGrid(16);
        console.log("random grid");

        $(".grid").mouseover(function() {
            $(this).css('background-color', 'rgb(' +
                (Math.floor(Math.random() * 256)) + ', ' +
                (Math.floor(Math.random() * 256)) + ', ' + (Math.floor(Math.random() * 256)) + ')');
        });

    });

});
