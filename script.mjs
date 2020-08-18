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

//function changeElementid(){
 //   document.getElementById("grid_square").id="blueGrid"
//}

document.getElementById('grid_square').addEventListener("mouseover", function(){
    document.getElementsByClassName("grid").style.backgroundColor = "slateblue";
})
