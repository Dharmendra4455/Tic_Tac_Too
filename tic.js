/*var x=prompt("Enter Player X Name");
var y=prompt("Enter Player O Name");
playerx=document.querySelector(".player1")
playery=document.querySelector(".player2")
playerx.innerHTML=x;
playery.innerHTML=y;*/
var topleft=document.querySelector("#topleft")
var topmiddle=document.querySelector("#topmiddle")
var topright=document.querySelector("#topright")
 
var middleleft=document.querySelector("#middleleft")
var middlemiddle=document.querySelector("#middlemiddle")
var middleright=document.querySelector("#middleright")

var bottomleft=document.querySelector("#bottomleft")
var bottommiddle=document.querySelector("#bottommiddle")
var bottomright=document.querySelector("#bottomright")

var turns=document.querySelector(".turns");
var winlost=document.querySelector(".winlost");
var block_x=1;
var block_y=1;
var turn="X";
function press(p){
    if(p=="topleft" && topleft!=0){
      topleft.innerHTML=turn
      topleft=0;
      check(turn);
    }
    else if(p=="topmiddle" && topmiddle!=0){
        topmiddle.innerHTML=turn
        topmiddle=0;
        check(turn);
    }
    else if(p=="topright" && topright!=0){
        topright.innerHTML=turn
        topright=0;
        check(turn);
    }
    else if(p=="middleleft" && middleleft!=0){
        middleleft.innerHTML=turn
        middleleft=0;
        check(turn);
      }
      else if(p=="middlemiddle" && middlemiddle!=0){
          middlemiddle.innerHTML=turn
          middlemiddle=0;
          check(turn);
      }
      else if(p=="middleright" && middleright!=0){
          middleright.innerHTML=turn
          middleright=0;
          check(turn);
      }
     else if(p=="bottomleft" && bottomleft!=0){
        bottomleft.innerHTML=turn
        bottomleft=0;
        check(turn);
      }
      else if(p=="bottommiddle" && bottommiddle!=0){
          bottommiddle.innerHTML=turn
          bottommiddle=0;
          check(turn);
      }
      else if(p=="bottomright" && bottomright!=0){
          bottomright.innerHTML=turn
          bottomright=0;
          check(turn);
      }
   else{
      alert("Na")
   }
   if(turn=="X"){
    turn="O";
     turns.innerHTML="Player O"
     turns.style.color="green"
   }
   else if(turn=="O"){
    turn="X";
    turns.innerHTML="Player X"
    turns.style.color="red"
   }
}

function check(turn){ 
 if(turn=="topleft" && turn=="topmiddle" && turn=="turnright") {
    winlost.innerHTML="Player "+turn+" win";
 }
 else if(turn=="topleft" && turn=="middleleft" && turn=="bottomleft"){
    winlost.innerHTML="Player "+turn+" win";
 }
 else if(turn=="topleft" && turn=="middlemiddle" && turn=="bottomright"){
    
    winlost.innerHTML="Player "+turn+" win"
}
else if(turn=="topleft" && turn=="topmiddle" && turn=="topright"){
    
    winlost.innerHTML="Player "+turn+" win"
}
else if(turn=="middleleft" && turn=="middlemiddle" && turn=="middleright"){
    
    winlost.innerHTML="Player "+turn+" win"
}
else if(turn=="bottomleft" && turn=="bottommiddle" && turn=="bottomright"){
    
    winlost.innerHTML="Player "+turn+" win"
}

else{
    winlost.innerHTML="Player "+turn+" Loose"
}
}
