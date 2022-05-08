function rockFunction(){ //players hand is rock // 0-rock,1-paper,2-scissor

    document.getElementById(4).style.visibility = "hidden";
    document.getElementById(5).style.visibility = "hidden";
    document.getElementById(3).style.visibility = "visible";

    let num1 = Math.floor(Math.random() * 2); 

    if(num1 === 0){
        console.log('draw');
        console.log('player rock');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "visible"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "hidden";
        document.getElementById(8).style.visibility = "hidden";

        alert("You picked Rock against Rock. It`s a draw");
        
    }
    else if(num1 === 1){
        console.log('lost');
        console.log('player rock');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "hidden"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "visible";
        document.getElementById(8).style.visibility = "hidden";

        alert("You picked Rock against Paper. It`s a you lost, better luck next time");
    }
    else if(num1 === 2){
        console.log('win');
        console.log('player rock');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "hidden"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "hidden";
        document.getElementById(8).style.visibility = "visible";

        alert("You picked Rock against scissor. Good job, you won");
    }    
    
}
function paperFunction(){  //players hand is paper //0-rock,1-paper,2-scissor
    
    document.getElementById(3).style.visibility = "hidden";
    document.getElementById(5).style.visibility = "hidden";
    document.getElementById(4).style.visibility = "visible";

    let num1 = Math.floor(Math.random() * 2); 

    if(num1 === 0){
        console.log('Win');
        console.log('player paper');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "visible"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "hidden";
        document.getElementById(8).style.visibility = "hidden";

        alert("You picked Paper against Rock. Good job, you won");
    }
    else if(num1 === 1){
        console.log('Draw');
        console.log('player Paper');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "hidden"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "visible";
        document.getElementById(8).style.visibility = "hidden";

        alert("You picked Paper against Paper. It`s a draw");
    }
    else if(num1 === 2){
        console.log('Lost');
        console.log('player Paper');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "hidden"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "hidden";
        document.getElementById(8).style.visibility = "visible";

        alert("You picked Paper against Scissor. It`s a you lost, better luck next time");
    }    

}
function scissorFunction(){ //players hand is scissor // 0-rock,1-paper,2-scissor

    document.getElementById(4).style.visibility = "hidden";
    document.getElementById(3).style.visibility = "hidden";
    document.getElementById(5).style.visibility = "visible";

    let num1 = Math.floor(Math.random() * 2); 

    if(num1 === 0){
        console.log('Lost');
        console.log('player scissor');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "visible"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "hidden";
        document.getElementById(8).style.visibility = "hidden";

        alert("You picked Scissor against Rock. It`s a you lost, better luck next time");
    }
    else if(num1 === 1){
        console.log('Win');
        console.log('player scissor');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "hidden"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "visible";
        document.getElementById(8).style.visibility = "hidden";

        alert("You picked Scissor against Paper. Good job, you won");
    }
    else if(num1 === 2){
        console.log('draw');
        console.log('player scissor');
        console.log('computer ' + num1);
        console.log('');

        document.getElementById(6).style.visibility = "hidden"; // 6-Rock, 7-Paper, 8-Scissor
        document.getElementById(7).style.visibility = "hidden";
        document.getElementById(8).style.visibility = "visible";

        alert("You picked Scissor against Scissor. It`s a draw");
    }    
    
}


