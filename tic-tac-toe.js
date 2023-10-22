document.addEventListener('DOMContentLoaded', (event) => {

    var gameboard = document.getElementById("board").children;
    let gameTrackX = [];
    let gameTrackO = [];
    let turn = 0;
    var display = document.getElementById("status");
    let stat = false;
    var reset = document.querySelector(".btn");

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
            if(stat == false){
                if (turn % 2 == 0){
                    element.textContent = "X";
                    element.classList.add("square", "X");
                    gameTrackX.push(i);
                    stat = winner(display, gameTrackX, "X");
                }else{
                    element.textContent = "0";
                    element.classList.add("square", "O");
                    gameTrackO.push(i);
                    stat = winner(display, gameTrackO, "O");
                }
                turn++;
            }
        });

        reset.addEventListener("click", function(){
            stat = false;
            element.textContent = "";
            turn = 0;
            gameTrackX = [];
            gameTrackO = [];
            display.textContent = "Move your mouse over a square and click to play an X or an O.";
            display.classList.remove("status", "you-won");
            display.classList.add("status");
        });
        
    }

});


function winner(dpy, gameTrack, ltr){
    let winMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winMoves.length; i++){
        let move1 = winMoves[i][0];
        let move2 = winMoves[i][1];
        let move3 = winMoves[i][2];

        if (gameTrack.includes(move1) && gameTrack.includes(move2) && gameTrack.includes(move3)){
            dpy.textContent = "Congratulations! " + ltr + " is the Winner!";
            dpy.classList.add("status", "you-won");
            return true;
        }
    }
    return false;

}