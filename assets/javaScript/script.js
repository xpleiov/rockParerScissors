function rockFunction(){ //players hand is rock // 0-rock,1-paper,2-scissor

    let num1 = Math.floor(Math.random() * 2); 

    if(num1 == "0"){
        console.log('draw');
        console.log('player rock');
        console.log('computer ' + num1);
        console.log('');
    }
    else if(num1 == "1"){
        console.log('lost');
        console.log('player rock');
        console.log('computer ' + num1);
        console.log('');
    }
    else if(num1 == "2"){
        console.log('win');
        console.log('player rock');
        console.log('computer ' + num1);
        console.log('');
    }    
    

}
function paperFunction(){  //players hand is paper //0-rock,1-paper,2-scissor
 
    let num1 = Math.floor(Math.random() * 2); 

    if(num1 == "0"){
        console.log('Win');
        console.log('player paper');
        console.log('computer ' + num1);
        console.log('');
    }
    else if(num1 == "1"){
        console.log('Draw');
        console.log('player Paper');
        console.log('computer ' + num1);
        console.log('');
    }
    else if(num1 == "2"){
        console.log('Lost');
        console.log('player Paper');
        console.log('computer ' + num1);
        console.log('');
    }    
    

}
function scissorFunction(){ //players hand is scissor // 0-rock,1-paper,2-scissor

    let num1 = Math.floor(Math.random() * 2); 

    if(num1 == "0"){
        console.log('Lost');
        console.log('player scissor');
        console.log('computer ' + num1);
        console.log('');
    }
    else if(num1 == "1"){
        console.log('Win');
        console.log('player scissor');
        console.log('computer ' + num1);
        console.log('');
    }
    else if(num1 == "2"){
        console.log('draw');
        console.log('player scissor');
        console.log('computer ' + num1);
        console.log('');
    }    
    

}

