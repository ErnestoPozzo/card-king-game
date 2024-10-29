const drawButton = document.getElementById("button");
const winText = document.getElementById("winning");
buttonDisplay = () =>{
    drawButton.style.display = 'none';
}
drawCard = () =>{
    document.body.style.background = "#ff0000";
    winText.textContent = "Setting done";
}

function start(one,two){
    one();
    two();
}