// these functions are responsible for setting the tiles in the grid
// we store an array internally that stores what tile is in each spot
// we also display this grid on the screen using a grid of divs and images in html
// these functions keep the two in sync as well as controlling what happens when tiles are clicked

// clears the grid array and also resets the visible tiles to all blank
function clearPlayerGrid()
{
    globalPlayerGrid = initArray([GRID_SIZE_W, GRID_SIZE_H]);
    for(let i = 0; i < GRID_SIZE_W; i++)
    {
        globalPlayerGrid[i] = [];
        for(let j = 0; j < GRID_SIZE_H; j++)
        {
            globalPlayerGrid[i][j] = "x-x";
            document.getElementById(i + '-' + j).src = "./tiles/" + globalPlayerGrid[i][j] + ".png";
            document.getElementById(i + '-' + j).alt = globalPlayerGrid[i][j];
        }
    }
}


// redraws the whole grid according to the globalPlayerGrid array. this function does not change the contents of the array,
// it just changes what is shown so that it matches the array
function redrawGrid()
{
    for(let i = 0; i < GRID_SIZE_W; i++)
    {
        for(let j = 0; j < GRID_SIZE_H; j++)
        {
            document.getElementById(i + '-' + j).src = "./tiles/" + globalPlayerGrid[i][j] + ".png";
        }
    }
}


// scale grid when window is resized
// there are probably better ways to do this but this is simple enough
var scaleTimeout;
window.onresize = function()
{
    clearTimeout(scaleTimeout);
    scaleTimeout = setTimeout(function() {setupGrid(true);}, 250);
};
