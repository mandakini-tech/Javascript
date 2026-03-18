// const randomColor=()=>{
//     const r=Math.floor(Math.random()*256);
//     const g=Math.floor(Math.random()*256);
//     const b=Math.floor(Math.random()*256);
//     return `rgb(${r},${g},${b})`;
// }

const randomColor=function(){
const hex="0123456789ABCDEF";
let color="#";
for(let i=0;i<6;i++){
color+=hex[Math.floor(Math.random()*16)];
}
return color;
}
let intervalId;
//console.log(Math.floor(Math.random()*16));
const startChangingColor=function(){
    if(!intervalId){
  intervalId= setInterval(changeBgColor,1000);
    }
  
    function changeBgColor(){

    document.body.style.backgroundColor=randomColor();
}
}
const stopChangingColor=()=>{
    clearInterval(intervalId);
    intervalId=null;
}
document.querySelector("#start").addEventListener("click",startChangingColor);
document.querySelector("#stop").addEventListener("click",stopChangingColor);