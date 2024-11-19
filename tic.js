//var x=prompt("Enter Player X Name");
//var y=prompt("Enter Player O Name");
var x=null;    //default pass
var y=null;
console.log(x,y);
playerx=document.querySelector(".player1")
playery=document.querySelector(".player2")
if(x===null||y===null||x.length==0 || y.length==0||x==""||y=="")
{
document.querySelector(".topbar").style.gap="13vw"
playerx.innerHTML="X";
playery.innerHTML="Y";
x="X";
y="Y";
}
else if(x.length<=10 && y.length<=10)
 {
         
    playerx.innerHTML=x;
     playery.innerHTML=y;
 }
             
else if(x.length>10 && y.length<=10)
{
     playerx.innerHTML=x.slice(0,10);
     playery.innerHTML=y;
 }
 else if(y.length>10 && x.length<=10)
 {
   playery.innerHTML=y.slice(0,10);
     playerx.innerHTML=x;
}
else if(x.length>10 && y.length>10)
{
  playerx.innerHTML=x.slice(0,10);
  playery.innerHTML=y.slice(0,10);
 }
else{
    document.querySelector(".topbar").style.gap="13vw"
    playerx.innerHTML="X";
    playery.innerHTML="Y";
    x="X";
    y="Y";
} 
     

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
var turn="X",gameover=1;
 turns.innerHTML=x+"'s turn"
var topleft1=1,topmiddle1=1,topright1=1;
var middleleft1=1,middlemiddle1=1,middleright1=1;
var bottomleft1=1,bottommiddle1=1,bottomright1=1;
function press(p){
    
    if(p=="topleft" && topleft1!=0){
      topleft.innerHTML=turn
      if(turn=="X")
      {
          topleft.style.color="red"
          topleft.style.webkitTextStroke="1px blue"
      }
      topleft1=0;
      check(turn);
    }
    else if(p=="topmiddle" && topmiddle1!=0){
        topmiddle.innerHTML=turn
        topmiddle1=0;
        if(turn=="X")
         {
          topmiddle.style.color="red"
          topmiddle.style.webkitTextStroke="1px blue"
         }
         check(turn);
    }
    else if(p=="topright" && topright1!=0){
        topright.innerHTML=turn
        topright1=0;
        if(turn=="X")
        {
          topright.style.color="red"
          topright.style.webkitTextStroke="1px blue"
        }
        check(turn);
    }
    else if(p=="middleleft" && middleleft1!=0){
        middleleft.innerHTML=turn
        middleleft1=0;
        if(turn=="X")
        {
          middleleft.style.color="red"
          middleleft.style.webkitTextStroke="1px blue"
        }
        check(turn);
      }
      else if(p=="middlemiddle" && middlemiddle1!=0){
          middlemiddle.innerHTML=turn
          middlemiddle1=0;
         
          if(turn=="X")
         {
          middlemiddle.style.color="red"
          middlemiddle.style.webkitTextStroke="1px blue"
         }
         check(turn);
      }
      else if(p=="middleright" && middleright1!=0){
          middleright.innerHTML=turn
          middleright1=0;
          
          if(turn=="X")
         {
          middleright.style.color="red"
          middleright.style.webkitTextStroke="1px blue"
         }
         check(turn);
      }
     else if(p=="bottomleft" && bottomleft1!=0){
        bottomleft.innerHTML=turn
        bottomleft1=0;
        
        if(turn=="X")
        {
          bottomleft.style.color="red"
          bottomleft.style.webkitTextStroke="1px blue"
        }
           check(turn);
      }
      else if(p=="bottommiddle" && bottommiddle1!=0){
          bottommiddle.innerHTML=turn
          bottommiddle1=0;
           
          if(turn=="X")
        {
           bottommiddle.style.color="red"
           bottommiddle.style.webkitTextStroke="1px blue"
        }   
      check(turn);                                    //each location symbol(turn(X or O)) send for check of win
      }
      else if(p=="bottomright" && bottomright1!=0){
          bottomright.innerHTML=turn
          bottomright1=0;
          if(turn=="X")
           {
          bottomright.style.color="red"
          bottomright.style.webkitTextStroke="1px blue"
           }
           check(turn);
      }
      else if(topleft1==0 && topmiddle1==0 && topright1==0 &&              //Game over msg if all boxes occupied by O or X
        middleleft1==0 && middlemiddle1==0 && middleright1==0 &&
        bottomleft1==0 && bottommiddle1==0 && bottomright1==0){
           
           gameover=0;
         //  location.reload()
      }
   else{
      alert("Wrong Selection!!")
   }  
   if(gameover!=0)
    turn=turncheck(turn);
                                             /*if gameover var==0 it denotes all boxes occupied 
                                                and game over then instead of showing player turn 
                                                show GAME OVER*/
    else{                                      
        turns.innerHTML="GAME OVER" 
        alert("GAME OVER")
    }
}
function turncheck(turn)
{                        
   if(turn=="X"){
     turn="O";
     turns.innerHTML=y+"' turn"                        //one by one X and O Change 
     turns.style.color="green"
   }
   else if(turn=="O"){
    turn="X";
    turns.innerHTML=x+"'s turn"
    turns.style.color="red"
   }
   return turn;
}
// alert(turn)
function check(turn){ 
    //alert(topleft.innerHTML);
 if(turn==topleft.innerHTML && turn==topmiddle.innerHTML && turn==topright.innerHTML) {
    winlost.style.display="block"
    winlost.innerHTML="Player "+turn+" win";
 }
 else if(turn==topleft.innerHTML && turn==middleleft.innerHTML && turn==bottomleft.innerHTML){
    winlost.style.display="block"
    winlost.innerHTML="Player "+turn+" win";
 }
 else if(turn==topleft.innerHTML && turn==middlemiddle.innerHTML && turn==bottomright.innerHTML){
    winlost.style.display="block"
    winlost.innerHTML="Player "+turn+" win"
}
else if(turn==topmiddle.innerHTML && turn==middlemiddle.innerHTML && turn==bottommiddle.innerHTML){
    winlost.style.display="block"
    winlost.innerHTML="Player "+turn+" win"
}
else if(turn==middleleft.innerHTML && turn==middlemiddle.innerHTML && turn==middleright.innerHTML){
    winlost.style.display="block" 
    winlost.innerHTML="Player "+turn+" win"
}
else if(turn==bottomleft.innerHTML && turn==bottommiddle.innerHTML && turn==bottomright.innerHTML){
    winlost.style.display="block"
    winlost.innerHTML="Player "+turn+" win"
}
else if(turn==topright.innerHTML && turn==middleright.innerHTML && turn==bottomright.innerHTML){
    winlost.style.display="block"
    winlost.innerHTML="Player "+turn+" win"
}
else if(turn==topright.innerHTML && turn==middlemiddle.innerHTML && turn==bottomleft.innerHTML){
    winlost.style.display="block"
    winlost.innerHTML="Player "+turn+" win"
}
else{
   // winlost.style.display="block"     //start showing loose also
   // winlost.innerHTML="Player "+turn+" Loose"  //always on each move check for win 
                                                 //if win condition not satisfied the it always execute
}
}





//match tie condition + player score + celebration background + gamecount of 5games + score after 5 games
