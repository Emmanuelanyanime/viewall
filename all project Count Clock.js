var houH=document.getElementById("hours");
var minM=document.getElementById("minutes");
var secS=document.getElementById("seconds");



function update(){
 var h=new Date().getHours();
 var m=new Date().getMinutes();
 var s=new Date().getSeconds();

if(h<10){
h="0"+h
}else{
    h=h
}
if(s<10){
s="0"+s
}else{
    s=s
}
if(m<10){
m="0"+m
}else{
    m=m
}

 houH.innerText=h;
 minM.innerText=m;
 secS.innerText=s;

setTimeout(() => {
 update()
},1000);


}

update()