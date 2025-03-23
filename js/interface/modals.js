function modalCancel()
{
    document.getElementById("modal-display").style.display = "none";
    document.getElementById("new-clue-modal").style.display = "none";
    document.getElementById("new-puzzle-modal").style.display = "none";
}

function modalCreateClue()
{
    
}

function modalCreateGrid(force)
{
    let old_w = GRID_SIZE_W;
    let old_h = GRID_SIZE_H;
    
    // first, let's see what the grid width and height are
    // not a typo, width and height are reversed for some reason
    let new_h = Math.round(document.getElementById("grid-size-w").value);
    let new_w = Math.round(document.getElementById("grid-size-h").value);
    
    // delete clues if we are shrinking the grid
    if(old_w > new_w || old_h > new_h)
    {
        if(force === undefined)
        {
            document.getElementById("new-puzzle-modal").style.display = "none";
            document.getElementById("warn-modal").style.display = "block";
            return;
        }
        else
        {
            clearClues();
            globalClues = [];
            document.getElementById("clues").innerHTML = "<p>no clues yet!</p>";
        }
    }
    
    GRID_SIZE_W = new_w;
    GRID_SIZE_H = new_h;

    if(GRID_SIZE_H < 2)
    {
        GRID_SIZE_H = 2;
        document.getElementById("grid-size-w").value = 2;
    }
    else if(GRID_SIZE_H > 5)
    {
        GRID_SIZE_H = 5;
        document.getElementById("grid-size-w").value = 5;
    }

    if(GRID_SIZE_W < 2)
    {
        GRID_SIZE_W = 2;
        document.getElementById("grid-size-h").value = 2;
    }
    else if(GRID_SIZE_H > 5)
    {
        GRID_SIZE_H = 5;
        document.getElementById("grid-size-h").value = 5;
    }
    
    // first step, make sure the grid size hasn't been changed before generating the puzzle
    if(GRID_SIZE_W !== globalPlayerGrid.length || GRID_SIZE_H !== globalPlayerGrid[0].length)
    {
        setupGrid();
        setupButtons();
    }

    modalCancel();
}

function modalCreateClue()
{
    if(globalClues.length === 0)
    {
        clearClues();
    }
    // first, let's see what the grid width and height are
    // not a typo, width and height are reversed for some reason
    let clue_size_h = Math.round(document.getElementById("clue-size-w").value);
    let clue_size_w = Math.round(document.getElementById("clue-size-h").value);

    if(clue_size_h < 1)
    {
        clue_size_h = 1;
        document.getElementById("clue-size-w").value = 1;
    }
    else if(clue_size_h > GRID_SIZE_H)
    {
        clue_size_h = GRID_SIZE_H;
        document.getElementById("clue-size-w").value = GRID_SIZE_H;
    }

    if(clue_size_w < 1)
    {
        clue_size_w = 1;
        document.getElementById("clue-size-h").value = 1;
    }
    else if(clue_size_w > GRID_SIZE_W)
    {
        clue_size_w = GRID_SIZE_W;
        document.getElementById("clue-size-h").value = GRID_SIZE_W;
    }
    
    let newClue = initArray([clue_size_w, clue_size_h]);
    for(let clueX = 0; clueX < clue_size_w; clueX++)
    {
        for(let clueY = 0; clueY < clue_size_h; clueY++)
        {
            newClue[clueX][clueY] = "x-x";
        }
    }
    globalClues.push(newClue);
    drawClue(globalClues.length - 1);
    
    modalCancel();
}

function modalProceedShrink()
{
    modalCreateGrid(true);
    document.getElementById("warn-modal").style.display = "none";    
}

function modalCancelShrink()
{
    document.getElementById("new-puzzle-modal").style.display = "block";
    document.getElementById("warn-modal").style.display = "none";    
}