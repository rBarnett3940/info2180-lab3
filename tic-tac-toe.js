document.addEventListener('DOMContentLoaded', (event) => {

    var gameboard = document.getElementById("board").children;

    for (let i=0; i<gameboard.length; i++){
        const element = gameboard[i];
        element.setAttribute("class", "square");
    }

});