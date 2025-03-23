function buttonSetAutosolve()
{
    if(globalIsAutosolvePuzzle)
    {
        globalIsAutosolvePuzzle = false;
    }
    else
    {
        globalIsAutosolvePuzzle = true;
    }
}

function buttonSolveNow()
{
    initSolver();
    solverStep(0);
}

function buttonClearSolution()
{
    initSolver();
}

function buttonChangeGrid()
{
    if(globalSelectedDeleteClue)
    {
        document.getElementById("delete-clue-button").className = "ui-button";
        globalSelectedDeleteClue = false;
    }
    
    document.getElementById("modal-display").style.display = "block";
    document.getElementById("new-puzzle-modal").style.display = "block";
}

function buttonShowNewClue()
{
    if(globalSelectedDeleteClue)
    {
        document.getElementById("delete-clue-button").className = "ui-button";
        globalSelectedDeleteClue = false;
    }
    
    document.getElementById("modal-display").style.display = "block";
    document.getElementById("new-clue-modal").style.display = "block";
}

function buttonSetDeleteClue()
{
    if(globalSelectedDeleteClue)
    {
        document.getElementById("delete-clue-button").className = "ui-button";
        globalSelectedDeleteClue = false;
    }
    else
    {
        document.getElementById("delete-clue-button").className = "selected-ui-button";
        globalSelectedDeleteClue = true;        
    }
}

function buttonImportPuzzle()
{
    loadPuzzleFromURL();
}

function buttonExportPuzzle()
{
    savePuzzleToURL();
}