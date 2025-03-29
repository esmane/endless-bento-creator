function drawClue(clueId)
{
    var clue = globalClues[clueId];
    var scale = Math.min(50 * (3 / Math.max(GRID_SIZE_W, GRID_SIZE_H)), 50);
    var toAppend = "<div class='clue-grid'>";
    for(let i = 0; i < clue.length; i++)
    {
        toAppend += "<div class='clue-row'";
        toAppend += " style='height: ";
        toAppend += scale;
        toAppend += "px;'>";
        for(let j = 0; j < clue[i].length; j++)
        {
            toAppend += "<div class='clue-item'><img id='";
            toAppend += clueId;
            toAppend += "-";
            toAppend += i;
            toAppend += "-";
            toAppend += j;
            toAppend += "' class='tile-50' src='./tiles/";
            toAppend += clue[i][j];
            toAppend += ".png' alt='";
            toAppend += clue[i][j];
            toAppend += "' onclick='setTile(";
            toAppend += clueId;
            toAppend += ", ";
            toAppend += i;
            toAppend += ", ";
            toAppend += j;
            toAppend += ")' oncontextmenu='clearTile(";
            toAppend += clueId;
            toAppend += ", ";
            toAppend += i;
            toAppend += ", ";
            toAppend += j;
            toAppend += ")' style='width: ";
            toAppend += scale;
            toAppend += "px; height: ";
            toAppend += scale;
            toAppend += "px;'></div>";
        }
        toAppend += "</div>";
    }
    toAppend += "</div>";
    document.getElementById("clues").innerHTML += toAppend;
}


function redrawClues()
{
    for(let c = 0; c < globalClues.length; c++)
    {
        drawClue(c);
    }
}


function clearClues()
{
    document.getElementById("clues").innerHTML = "";
}


// sets a single tile (generally for clicking in the grid)
// we set three things: the internal array used for checking if the puzzle has been solved
// the image displayed in the grid
// the alt-text so that the game can be played without images
function setTile(clue, x, y)
{
    // if we are in delete clue mode, we want to delete the clicked clue
    if(globalSelectedDeleteClue)
    {
        globalClues.splice(clue, 1);
        clearClues();
        redrawClues();
        
        if(globalClues.length === 0)
        {
            buttonSetDeleteClue();
            document.getElementById("clues").innerHTML = "<p>no clues yet!</p>";
        }
        return;
    }
    // this depends on what is set up
    var toSetColor = 'x';
    var toSetShape = 'x';
    
    // if not set delete
    if(!globalSelectedDelete)
    {
        if(globalSelectedColor !== 'x' && globalSelectedShape !== 'x')
        {
            // set both
            toSetColor = globalSelectedColor;
            toSetShape = globalSelectedShape;
        }
        else if(globalSelectedShape !== 'x')
        {
            // set only shape
            toSetShape = globalSelectedShape;
            
            if(globalClues[clue][x][y].charAt(2) === globalSelectedShape)
            {
                toSetColor = 'x';
            }
            else
            {
                toSetColor = globalClues[clue][x][y].charAt(0);
            }
        }
        else if(globalSelectedColor !== 'x')
        {
            // set only shape
            toSetColor = globalSelectedColor;
            
            if(globalClues[clue][x][y].charAt(0) === globalSelectedColor)
            {
                toSetShape = 'x';
            }
            else
            {
                toSetShape = globalClues[clue][x][y].charAt(2);
            }
        }   
    }
                
    // set it         
    globalClues[clue][x][y] = toSetColor + '-' + toSetShape;
    document.getElementById(clue + '-' + x + '-' + y).src = "./tiles/" + globalClues[clue][x][y] + ".png";
    document.getElementById(clue + '-' + x + '-' + y).alt = globalClues[clue][x][y];
    
    if(globalIsAutosolvePuzzle)
    {
        doSolve();
    }
}


// clears a tile
function clearTile(clue, x, y)
{
    globalClues[clue][x][y] = "x-x";
    document.getElementById(clue + '-' + x + '-' + y).src = "./tiles/" + globalClues[clue][x][y] + ".png";
    document.getElementById(clue + '-' + x + '-' + y).alt = globalClues[clue][x][y];
    
    if(globalIsAutosolvePuzzle)
    {
        doSolve();
    }
}
