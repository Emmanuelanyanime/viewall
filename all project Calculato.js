var displayH=document.getElementById("display");


function append(input){
    if(displayH.value==="0"){
    displayH.value=input;
}
else{
    displayH.value+=input;
}

}

function Clear(){
displayH.value="0";
 
}

function calculate(){
    displayH.value=eval(displayH.value);
}

function del(){
   displayH.value=displayH.value.slice(0,-1);
}


  