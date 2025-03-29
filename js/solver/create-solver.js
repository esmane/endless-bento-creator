function stepSolve()
{
    var r = solverStep(0);
    for(let gridX = 0; gridX < GRID_SIZE_W; gridX++)
    {
        for(let gridY = 0; gridY < GRID_SIZE_H; gridY++)
        {
            if(solverPossibilityGrid[gridX][gridY].length === 1)
            {
                globalPlayerGrid[gridX][gridY] = solverPossibilityGrid[gridX][gridY][0];
            }
            else
            {
                globalPlayerGrid[gridX][gridY] = "x-x";
            }
        }
    }
    return r;
}


function doSolve()
{
    initSolver();
    resetSolve();
    
    var solved = false;
    var attempts = 5;
    while(!solved && attempts > 0)
    {
        solved = stepSolve();
        attempts--;
    }
    
    if(!solved)
    {
        console.log("Failed to solve loaded puzzle!");
    }
    redrawGrid();
}


function resetSolve()
{
    globalPlayerGrid = initArray([GRID_SIZE_W, GRID_SIZE_H]);
    for(let i = 0; i < GRID_SIZE_W; i++)
    {
        for(let j = 0; j < GRID_SIZE_H; j++)
        {
            globalPlayerGrid[i][j] = "x-x";
        }
    }
    redrawGrid();
}
