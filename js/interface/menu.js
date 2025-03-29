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
    doSolve();
}

function buttonClearSolution()
{
    resetSolve();
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
    document.getElementById("modal-display").style.display = "block";
    document.getElementById("import-modal").style.display = "block";
    document.getElementById("fname").value = "";
}

function buttonExportPuzzle()
{
    var url = savePuzzleToURL();
    document.getElementById("copied-message").innerHTML = " ";
    document.getElementById("export-text").value = url;
    document.getElementById("modal-display").style.display = "block";
    document.getElementById("export-modal").style.display = "block";
}
