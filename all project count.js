var counterH=document.getElementById("counter");



var button1H=document.getElementById("button1");
var button2H=document.getElementById("button2");
var button3H=document.getElementById("button3");


var count=0;
function decrease(){
    count--;
  counterH.innerHTML=count;
  if(count<0){
    counterH.style.color="red";
  }
  
}
function reset(){
    count=0;
  counterH.innerHTML=count;
   if(count==0){
    counterH.style.color="gray";
  }
}
function increase(){
    count++;
  counterH.innerHTML=count;
   if(count>0){
    counterH.style.color="green";
  }
 
}