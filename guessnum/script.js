let randNum=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userIp =document.querySelector('#guessField')
const guesslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
const p=document.createElement('p')
let prevGuess=[]
let numGuess=1
let playGame=true;
if(playGame){
   submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userIp.value)
    validateGuess(guess)
   }) 
}
function validateGuess(guess){
if(isNaN(guess)){
    alert("Enter valid number")
}
else if(guess<1){
    alert("Enter a positive number")
}
else if(guess>100){
    alert("Enter number less than 100")
}
else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMsg(`Game Over ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}
function checkGuess(guess){
if(guess===randNum){
    displayMsg("Guessed right")
    endGame()
}
else if(guess<randNum){
    displayMsg("Num is too low")
}
else if(guess>randNum){
    displayGuess("Num is too large")
}
}
function displayGuess(guess){
userIp.value=''
guesslot.innerHTML+=`${guess}  `
numGuess++;
remaining.innerHTML=`${11-numGuess}`
}
function displayMsg(message){
lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function newGame(){
const newGamebutton=document.querySelector('#newGame')
newGamebutton.addEventListener('click',function(e){
    randNum=parseInt(Math.random()*100+1);
    prevGuess=[]
    numGuess=1
    guesslot.innerHTML=''
remaining.innerHTML=`${11-numGuess}`
userIp.removeAttribute('disabled')
startOver.removeChild(p)
playGame=true
})
}
function endGame(){
userIp.value=''
userIp.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newgame>Start new game</h2>`
startOver.appendChild(p)
playGame=false;
newGame()
}