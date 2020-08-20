let rows=16;
let columns = 16;
let containerSize=500;
let boxSize; 

rows=window.prompt("How many squares per side to make the new grid", " ");
columns=rows
boxSize=containerSize/(rows)
document.body.onload = createDiv();


function addElement(){
    var newDiv = document.createElement("div"); 
    newDiv.className="grid";
    newDiv.id = "grid_square";
    document.getElementById("main").appendChild(newDiv);
}

function adjustContainer(rows, columns, boxSize){
    var changeContainer=document.getElementById("main"); 
    changeContainer.style.gridTemplateColumns=`repeat(${rows}, 1fr)`
    changeContainer.style.gridTemplateRows=`repeat(${columns}, 1fr)`
    var updateGrid= document.getElementsByClassName("grid")
}
//taken from https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
function generateRandomColor()
{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    //random color will be freshly served
}
function createDiv(){
    for (let i = 0; i < (rows*columns); i++){
        addElement();
    }
    adjustContainer(rows,columns,boxSize);
}
function mouseOver(div) {
    div.style.backgroundColor = "slateblue" ;
  } 

const gridItems = document.querySelectorAll('div')
gridItems.forEach((div) => {
    div.addEventListener('mouseover',(e) =>{
    mouseOver(div);

});
});