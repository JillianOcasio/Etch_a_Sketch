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