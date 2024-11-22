//TIC TAC TOE changer ++++++++++++++++
var tic=document.querySelector(".tic")
var tac=document.querySelector(".tac")
var toe=document.querySelector(".toe")
var colorarr=["red","green","blue","indigo","orange","yellow","violet"
               ,"grey","maroon","black","olive","cyan","pink","magenta",
               "tan","teal"]
 var i=16;
 var j=15;
 var k=14;          
 setInterval(colorchanger,2000);

 function colorchanger(){
 tic.style.transition=".51s ease"  
 tic.style.color=colorarr[i];
 tac.style.transition=".51s ease"  
 tac.style.color=colorarr[j];
 toe.style.transition=".51s ease"  
 toe.style.color=colorarr[k];
 i--,j--,k--;
 if(i==0)
  i=16;
 if(j==0)
 j=15;
 if(k==0)
 k=14; 
 }

//prompt input Name +++++++++++++++++

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
{   x=x.slice(0,10);
     playerx.innerHTML=x
     playery.innerHTML=y;
 }
 else if(y.length>10 && x.length<=10)
 {   y=y.slice(0,10);
     playery.innerHTML=y
     playerx.innerHTML=x;
}
else if(x.length>10 && y.length>10)
{
    x=x.slice(0,10);
    y=y.slice(0,10);
  playerx.innerHTML=x;
  playery.innerHTML=y;
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
var turn="X",gameover=1,tie=1;
turns.innerHTML=x+"'s turn"
var topleft1=1,topmiddle1=1,topright1=1;
var middleleft1=1,middlemiddle1=1,middleright1=1;
var bottomleft1=1,bottommiddle1=1,bottomright1=1;
function press(p){
    if(p=="topleft" && topleft1!=0 && gameover!=0){
      topleft.innerHTML=turn
      topleft1=0;
      if(turn=="X")
      {
          topleft.style.color="red"
          topleft.style.webkitTextStroke="1px blue"
      }
      else
      topleft.style.color="blue"

      check(turn);
      checkgameover()
      if(gameover!=0)
      turn=turncheck(turn);
    }
    else if(p=="topmiddle" && topmiddle1!=0 && gameover!=0){
        topmiddle.innerHTML=turn
        topmiddle1=0;
        if(turn=="X")
         {
          topmiddle.style.color="red"
          topmiddle.style.webkitTextStroke="1px blue"
         }
         else
           topmiddle.style.color="blue"
         check(turn);
         checkgameover()
         if(gameover!=0)
         turn=turncheck(turn);
    }
    else if(p=="topright" && topright1!=0 && gameover!=0){
        topright.innerHTML=turn
        topright1=0;
        if(turn=="X")
        {
          topright.style.color="red"
          topright.style.webkitTextStroke="1px blue"
        }
        else
           topright.style.color="blue"
        check(turn);
        checkgameover()
        if(gameover!=0)
        turn=turncheck(turn);
    }
    else if(p=="middleleft" && middleleft1!=0 && gameover!=0){
        middleleft.innerHTML=turn
        middleleft1=0;
        if(turn=="X")
        {
          middleleft.style.color="red"
          middleleft.style.webkitTextStroke="1px blue"
        }
        else
          middleleft.style.color="blue"
        check(turn);
        checkgameover()
        if(gameover!=0)
        turn=turncheck(turn);
      }
      else if(p=="middlemiddle" && middlemiddle1!=0 && gameover!=0){
          middlemiddle.innerHTML=turn
          middlemiddle1=0;
          if(turn=="X")
         {
          middlemiddle.style.color="red"
          middlemiddle.style.webkitTextStroke="1px blue"
         }
         else
           middlemiddle.style.color="blue"
         check(turn);
         checkgameover()
         if(gameover!=0)
         turn=turncheck(turn);
      }
      else if(p=="middleright" && middleright1!=0 && gameover!=0){
          middleright.innerHTML=turn
          middleright1=0;
          if(turn=="X")
         {
          middleright.style.color="red"
          middleright.style.webkitTextStroke="1px blue"
         }
         else
           middleright.style.color="blue"
         check(turn);
         checkgameover()
         if(gameover!=0)
         turn=turncheck(turn);
      }
     else if(p=="bottomleft" && bottomleft1!=0 && gameover!=0){
        bottomleft.innerHTML=turn
        bottomleft1=0;
        
        if(turn=="X")
        {
          bottomleft.style.color="red"
          bottomleft.style.webkitTextStroke="1px blue"
        }
        else
           bottomleft.style.color="blue"
           check(turn);
           checkgameover()
           if(gameover!=0)
           turn=turncheck(turn);
      }
      else if(p=="bottommiddle" && bottommiddle1!=0 && gameover!=0){
          bottommiddle.innerHTML=turn
          bottommiddle1=0;
          if(turn=="X")
        {
           bottommiddle.style.color="red"
           bottommiddle.style.webkitTextStroke="1px blue"
        }  
        else
           bottommiddle.style.color="blue"  

      check(turn);
      checkgameover()  
      if(gameover!=0)   
      turn=turncheck(turn);                               //each location symbol(turn(X or O)) send for check of win
      }
      else if(p=="bottomright" && bottomright1!=0 && gameover!=0){
          bottomright.innerHTML=turn
          bottomright1=0;
          if(turn=="X")
           {
          bottomright.style.color="red"
          bottomright.style.webkitTextStroke="1px blue"
           }
           else
           bottomright.style.color="blue"

           check(turn);
           checkgameover()
           if(gameover!=0)
           turn=turncheck(turn);
      }
    
   else{
     if(gameover!=0)
      alert("Wrong Selection!!");
      else
      alert("Game Over");
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



function checkgameover()
{
  if(topleft1==0 && topmiddle1==0 && topright1==0 &&              //Game over msg if all boxes occupied by O or X
    middleleft1==0 && middlemiddle1==0 && middleright1==0 &&
    bottomleft1==0 && bottommiddle1==0 && bottomright1==0 && gameover!=0){ //game over==0 only when any one win the game 
      gameover=0;
      document.querySelector(".turns").innerHTML="Match Tie!!";
      document.querySelector(".turns").style.color="yellow";
      document.querySelector(".newgame").style.display="block"
      //alert("GAME OVER");
      
    }
  else if(gameover==0)   //Win condition no need to show turn
  {
    document.querySelector(".turns").innerHTML="";
    //document.querySelector(".turns").style.color="yellow";
    //alert("GAME OVER");
  }  

}

var xscore=0,yscore=0;
function check(turn){ 
    //alert(topleft.innerHTML);
 if(turn==topleft.innerHTML && turn==topmiddle.innerHTML && turn==topright.innerHTML) 
 {
     if(turn=="X" && xscore==0)
     {
        xscore++;
        document.querySelector(".scorex").innerHTML="ScoreX: "+xscore;
        winlost.innerHTML= x+" Win"
     } 
     else 
    {
      if(yscore==0)
      {
        yscore++;
        document.querySelector(".scorey").innerHTML="ScoreY: "+yscore;
        winlost.innerHTML= y+" Win"
        
      }
    }
        winlost.style.visibility="visible"
        winlost.style.fontSize="4.5vw"
        document.querySelector(".innercontainerbox").style.opacity="0.2"
        document.querySelector(".container").style.backgroundImage="url('celebration2.gif')"
        document.querySelector(".newgame").style.display="block"
        document.querySelector("#topleft").style.backgroundColor="rgb(0, 255, 34)";
        document.querySelector("#topmiddle").style.backgroundColor="rgb(0, 255, 34)";
        document.querySelector("#topright").style.backgroundColor="rgb(0, 255, 34)";
        gameover=0;
 }
 else if(turn==topleft.innerHTML && turn==middleleft.innerHTML && turn==bottomleft.innerHTML)
 {
   if(turn=="X" && xscore==0)
  {
    xscore++;
    document.querySelector(".scorex").innerHTML="ScoreX: "+xscore;
    winlost.innerHTML= x+" Win"
  }
  else if(yscore==0)
  {
    yscore++;
    document.querySelector(".scorey").innerHTML="ScoreY: "+yscore;
    winlost.innerHTML= y+" Win"
  }
  winlost.style.visibility="visible"
  winlost.style.fontSize="4.5vw"
  document.querySelector(".innercontainerbox").style.opacity=".2"
  document.querySelector(".container").style.backgroundImage="url('celebration2.gif')"
  document.querySelector(".newgame").style.display="block"
  document.querySelector("#topleft").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#middleleft").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#bottomleft").style.backgroundColor="rgb(0, 255, 34)";
    gameover=0;
 }
 else if(turn==topleft.innerHTML && turn==middlemiddle.innerHTML && turn==bottomright.innerHTML)
 {
  if(turn=="X" && xscore==0)
  {
    xscore++;
    document.querySelector(".scorex").innerHTML="ScoreX: "+xscore;
    winlost.innerHTML= x+" Win"
  } 
  else if(yscore==0)
  {
    yscore++;
    document.querySelector(".scorey").innerHTML="ScoreY: "+yscore;
    winlost.innerHTML= y+" Win"
    
  }
  winlost.style.visibility="visible"
  winlost.style.fontSize="4.5vw"
  document.querySelector(".innercontainerbox").style.opacity=".2"
  document.querySelector(".container").style.backgroundImage="url('celebration2.gif')"
  document.querySelector(".newgame").style.display="block"
  document.querySelector("#topleft").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#middlemiddle").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#bottomright").style.backgroundColor="rgb(0, 255, 34)";
  gameover=0;
}
else if(turn==topmiddle.innerHTML && turn==middlemiddle.innerHTML && turn==bottommiddle.innerHTML)
{
  if(turn=="X" && xscore==0)
  {
    xscore++;
    document.querySelector(".scorex").innerHTML="ScoreX: "+xscore;
    winlost.innerHTML= x+" Win"
  } 
  else if(yscore==0)
  {
    yscore++;
    document.querySelector(".scorey").innerHTML="ScoreY: "+yscore;
    winlost.innerHTML= y+" Win"
   
  }
  winlost.style.visibility="visible"
  winlost.style.fontSize="4.5vw"
  document.querySelector(".innercontainerbox").style.opacity=".2"
  document.querySelector("#topmiddle").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#middlemiddle").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#bottommiddle").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector(".container").style.backgroundImage="url('celebration2.gif')"
  document.querySelector(".newgame").style.display="block"
   
gameover=0;
}
else if(turn==middleleft.innerHTML && turn==middlemiddle.innerHTML && turn==middleright.innerHTML)
{
  if(turn=="X" && xscore==0)
  {
    xscore++;
    document.querySelector(".scorex").innerHTML="ScoreX: "+xscore;
    winlost.innerHTML= x+" Win"
  } 
  else if(yscore==0)
  {
    yscore++;
    document.querySelector(".scorey").innerHTML="ScoreY: "+yscore;
    winlost.innerHTML= y+" Win"
  }
  winlost.style.visibility="visible"
  winlost.style.fontSize="4.5vw"
  document.querySelector(".innercontainerbox").style.opacity=".2"
  document.querySelector(".container").style.backgroundImage="url('celebration2.gif')"
  document.querySelector(".newgame").style.display="block"
  document.querySelector("#middleleft").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#middlemiddle").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#middleright").style.backgroundColor="rgb(0, 255, 34)";
  
  gameover=0;
}
else if(turn==bottomleft.innerHTML && turn==bottommiddle.innerHTML && turn==bottomright.innerHTML)
{
  if(turn=="X"  && xscore==0)
  {
    xscore++;
    document.querySelector(".scorex").innerHTML="ScoreX: "+xscore;
    winlost.innerHTML= x+" Win"
  } 
  else if(yscore==0)
  {
    yscore++;
    document.querySelector(".scorey").innerHTML="ScoreY: "+yscore;
    winlost.innerHTML= y+" Win"
  }
  winlost.style.visibility="visible"
  winlost.style.fontSize="4.5vw"
  document.querySelector(".innercontainerbox").style.opacity=".2"
  document.querySelector(".container").style.backgroundImage="url('celebration2.gif')"
  document.querySelector(".newgame").style.display="block"
  document.querySelector("#bottomleft").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#bottomright").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#bottommiddle").style.backgroundColor="rgb(0, 255, 34)";
 gameover=0;
}
else if(turn==topright.innerHTML && turn==middleright.innerHTML && turn==bottomright.innerHTML)
{
  if(turn=="X" && xscore==0)
  {
    xscore++;
    document.querySelector(".scorex").innerHTML="ScoreX: "+xscore;
    winlost.innerHTML= x+" Win"
    
  } 
  else if(yscore==0)
  {
    yscore++;
    document.querySelector(".scorey").innerHTML="ScoreY: "+yscore;
    winlost.innerHTML= y+" Win"
  }
    winlost.style.visibility="visible"
    winlost.style.fontSize="4.5vw"
    document.querySelector(".innercontainerbox").style.opacity=".2"
    document.querySelector(".container").style.backgroundImage="url('celebration2.gif')"
    document.querySelector(".newgame").style.display="block"
    document.querySelector("#topright").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#middleright").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#bottomright").style.backgroundColor="rgb(0, 255, 34)";
    gameover=0;
}
else if(turn==topright.innerHTML && turn==middlemiddle.innerHTML && turn==bottomleft.innerHTML)
{
  if(turn=="X" && xscore==0)
  {
    xscore++;
    document.querySelector(".scorex").innerHTML="ScoreX: "+xscore;
    winlost.innerHTML= x+" Win"
  } 
  else if(yscore==0)
  {
    yscore++;
    document.querySelector(".scorey").innerHTML="ScoreY: "+yscore;
    winlost.innerHTML= y+" Win"
  }
    winlost.style.visibility="visible"
    winlost.style.fontSize="4.5vw"
    document.querySelector(".innercontainerbox").style.opacity=".2"
    document.querySelector(".container").style.backgroundImage="url('celebration2.gif')"
    document.querySelector(".newgame").style.display="block"
    document.querySelector("#topright").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#middlemiddle").style.backgroundColor="rgb(0, 255, 34)";
  document.querySelector("#bottomleft").style.backgroundColor="rgb(0, 255, 34)";
    
     gameover=0;
}
 else
  {

   // winlost.style.visibility="visible"     //start showing loose also
   // winlost.innerHTML="Player "+turn+" Loose"  //always on each move check for win 
                                                 //if win condition not satisfied the it always execute
 }
}
 function newgame(){
  location.reload()
 }
