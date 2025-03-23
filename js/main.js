// global puzzle settings
var GRID_SIZE_W = 3;    // also, the number of colors
var GRID_SIZE_H = 3;    // also, the number of shapes
const DIFFICULTY = 2;     // 0 for jr, 1 for sr, 2 for master

// global interface settings
var globalIsAutosolvePuzzle = true;

// these are for the buttons
var globalSelectedColor = '0';
var globalSelectedShape = '0';
var globalSelectedDelete = false;
var globalSelectedDeleteClue = false;

// the grid
var globalPlayerGrid;   // this is the grid that is drawn. when the solver determines that a tile has only one possible solution it is pushed to this array
var globalSolutionGrid;
var globalClues = [];


// main init function. runs on startup and is responsible for loading the settings and generating the first puzzle.
window.onload = function()
{
    // setup the default grid and button sizes
    setupGrid();
    setupButtons();
    initSolver();
    
    if(globalIsAutosolvePuzzle)
    {
        document.getElementById("autosolve-option").checked = true;
    }

    // now that we've loaded the settings, let's generate a puzzle
    // but first, let's see if we can load a puzzle!
    // first we try to load a puzzle from the url
    if(!loadPuzzleFromURL())
    {
        // if that fails, we generate a new puzzle
        clearPlayerGrid();
    }
};
