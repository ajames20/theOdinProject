// function that builds a grid in the "container"
function createGrid(i) {
    for (var rows = 0; rows < i; rows++) {
        for (var columns = 0; columns < i; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/i);
    $(".grid").height(960/i);
};


function clearGrid(){
    $(".grid").remove();
};


function gridRefresh(){
    var z = prompt("How many boies per side?");
    clearGrid();
    createGrid(z);
};

// create a 16i16 grid when the page loads
// creates a hover effect that changes the color of a square to #358adf when the mouse passes over it, leaving a (piiel) trail through the grid
// allows the click of a button to prompt the user to create a new grid
$(document).ready(function() {
    createGrid(16);

    $(".grid").mouseover(function() {
        $(this).css("background-color", "#358adf");
        });

    $(".newGrid").click(function() {
        gridRefresh();

        $(".grid").mouseover(function() {
        $(this).css("background-color", "#358adf");
        });
    });

    $(".clear").click(function() {
        clearGrid();
        createGrid(16);

        $(".grid").mouseover(function() {
          $(this).css("background-color", "#358adf");
        });
      });
});
