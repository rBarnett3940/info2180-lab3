document.addEventListener('DOMContentLoaded', (event) => {

    var gameboard = document.getElementById("board").children;
    let gameTrack = [];
    let turn = 0;

    for (let i=0; i<gameboard.length; i++){
        const element = gameboard[i];
        element.setAttribute("class", "square");


        element.addEventListener("mouseover", function(){
            element.classList.add("hover");
        })

        element.addEventListener("mouseout", function(){
            element.classList.remove("hover");
        })


        element.addEventListener("click", function(){
            if (turn % 2 == 0){
                element.textContent = "X";
                element.classList.add("square", "X");
                gameTrack.push(i);
            }else{
                element.textContent = "0";
                element.classList.add("square", "O");
                gameTrack.push(i);
            }
            turn++;
        });
        
    }

});