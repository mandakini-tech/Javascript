console.log("Hello");
a=13;
console.log(typeof(a));
console.log(a);
console.log("Hiee");
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// arr=[12,13,14,15];
// for( i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// for(const ele of arr){
//     console.log(ele);
// }
// arr1=[1,2,3,4,5];
// arr1.forEach((ele,i,arr1)=>{
//     console.log(ele,i,arr1);
// });
// s="  pooja";
// for(let ele of s){
//     console.log(ele);
// }
// s="My name is pooja i'm learning js";
// arr2=s.split(' ,');
// console.log(arr2)
// for(const ele of arr2){
//     console.log(ele)
// }
// let age=18;
// let name="Pooja";
// console.log(`My age is ${age} and name is ${name}`);
// let x={
//     name:"Pooja",
//     age:18,
//     job:"Student"
// };
// console.log(x.name);
// for(const key in x){
//     if(Object.hasOwnProperty.call(x,key)){
//         console.log(key,x[key]);
//     }
// }
// function Sum1toN(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum += i; // Add i to sum
//     }
//     console.log("Sum from 1 to", n, "is", sum);
// }
// Sum1toN(4);
// console.log(Math.pow(2,3));
// console.log(Math.max(3,1));
// console.log(Math.min(23,9));
// console.log(Math.ceil(23.2));
// console.log(Math.floor(23.6));
// console.log(Math.random());
// r=(Math.floor(Math.random()*21)-10);
// console.log(r);
for(let i=1;i<=10;i++){
    setTimeout(()=>{
        console.log(11-i);
    },i*500)
}
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);

//   console.log(s.toUpperCase());
//     console.log(s.length);
//       console.log(s.substring);
//         console.log(s.trim());
//           console.log(s.slice(2,7));
console.log("Try programiz.pro");
function add10(ele){
    return ele+10;
}
let arr=[16,-12,-13,14,15];
arr=arr.sort((a,b)=>b-a);
console.log(arr)
arr=arr.sort((a,b)=>Math.abs(a)-Math.abs(b))
console.log(arr)
// console.log(arr);
// console.log(arr.sort());
// arr=arr.sort((a,b)=>b-a);
// console.log(arr)
// console.log(arr.map(add10));
// arr=arr.map(ele=>ele*2);
// arr=arr.map((ele=>{
// return ele*ele}))
// console.log(arr)
// console.log(arr.map(ele=>ele*2));
// let brr=arr.filter((ele=>{
//   if (ele%2==0) return true;
//   else return false;
// }))
// console.log(brr)
document.getElementById('owl').onclick=function(){
    alert("Owl cliced")
}
document.getElementById('owl').addEventListener('click',function(){
    alert("owl clicked again")
})
document.getElementById('owl').addEventListener('click',function(e){
    console.log(e);
},false)
//bubbbling bottom up approach
//Capturing top-down
document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clicked");
    e.stopPropagation();
},false)
document.getElementById('google').addEventListener('click',function(e){
    e.defaultPrevented
},false)
document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    let removeIt=e.target.parentNode
    removeIt.remove()
})