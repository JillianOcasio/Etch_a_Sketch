let rows=16
let columns = 16
document.body.onload = createDiv();

function addElement(){
    var newDiv = document.createElement("div"); 
    newDiv.className="grid";
    newDiv.id = "grid_square"
    document.getElementById("main").appendChild(newDiv);
}
function createDiv(){
    for (let i = 0; i < (rows*columns); i++){
        addElement();
    }
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

