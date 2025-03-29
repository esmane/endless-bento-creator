// main loading function
function loadPuzzle(clues, grid)
{
    // step one: load the saved data
    globalClues = JSON.parse(clues);
    globalPlayerGrid = JSON.parse(grid);
    
    console.log(globalClues);
    console.log(globalPlayerGrid);
    
    
    // step two: draw the grid
    if(GRID_SIZE_W !== globalPlayerGrid.length || GRID_SIZE_H !== globalPlayerGrid[0].length)
    {
        GRID_SIZE_W = globalPlayerGrid.length;
        GRID_SIZE_H = globalPlayerGrid[0].length;
        
        // when loading a puzzle we do not want to clear the grid
        setupGrid();
        setupButtons();
    }
    else
    {
        redrawGrid();
    }
    
    // step four: redraw the clues
    clearClues();
    redrawClues();
    doSolve();
}


// url based save and load functions
// used for sharing puzzles or saving without cookies
function loadPuzzleFromURL(data)
{
    const U = new URL(data);
    const P = new URLSearchParams(U.search);
    var clues = P.get("c");
    var grid = P.get("g");
    
    clues = decodeURIComponent(clues);
    grid = decodeURIComponent(grid);
    
    loadPuzzle(clues, grid);
    return true;
}

function savePuzzleToURL()
{
    var clues = JSON.stringify(globalClues);
    resetSolve();
    var grid = JSON.stringify(globalPlayerGrid);
    
    clues = encodeURIComponent(clues);
    grid = encodeURIComponent(grid);
    
    var puzzleQuery = "?c=" + clues + "&g=" + grid;
    
    // thanks https://stackoverflow.com/a/5817559
    var puzzleURL = "https://esmane.github.io/endless-bento/";
    puzzleURL += puzzleQuery;
    
    return puzzleURL;
}
