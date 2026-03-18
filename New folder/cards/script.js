// var main=document.getElementById("main");
// var s=" ";
// for(let i=1;i<=15;i++){
//     s+=`  <div class="card">
//             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg">
//           </div>`
// }
// main.innerHTML=s; 
// let main=document.getElementById("main");
// let arr=["C:\Users\Mandakini\Downloads\banana.jpg",
//     "C:\Users\Mandakini\Downloads\outfit.webp.crdownload",
//     "C:\Users\Mandakini\Downloads\icecream.webp",
// "C:\Users\Mandakini\Downloads\home.webp",
// "C:\Users\Mandakini\Downloads\tree.webp"
// ]
// let s="";
// for(let i=1;i<=25;i++){
//     let r=Math.floor(Math.random()*arr.length);
//     s+=`  <div class="card">
//           <img src=${arr[r]}
//           </div>`;
// }
// main.innerHTML=s; 
// ["https://in.pinterest.com/pin/365917538498175518/",
//     "https://in.pinterest.com/pin/492649953906588/",
//     "https://in.pinterest.com/pin/37576978137282390/",
//     "https://in.pinterest.com/pin/108227197289502978/",
//     "https://images.woodenstreet.de/image/data/House-of-silko/set-of-2-banarasi-brocade-cushion-covers-16-16-inch/HOS-3.jpg",
//       "https://in.pinterest.com/pin/55098795465491845/"]
// const main = document.getElementById("main");
// const arr = [
//   "outfit.webp",
//   "banana.jpg",
//   "icecream.webp",
//   "home.webp",
//   "tree.webp"
// ];

// let s = "";

// for (let i = 0; i < 50; i++) {
//   let r = Math.floor(Math.random() * arr.length);
//   s += `
//     <div class="card">
//       <div class="card-inner">
//         <div class="card-front">?</div>
//         <div class="card-back">
//           <img src="${arr[r]}" alt="card image">
//         </div>
//       </div>
//     </div>`;
//}

// main.innerHTML = s;

// Add flip behavior
// const cards = document.querySelectorAll(".card");
// cards.forEach(card => {
//   card.addEventListener("click", () => {
//     card.classList.toggle("flipped");
//   });
// });
const main = document.getElementById("main");

const arr = [
  "outfit.webp",
  "banana.jpg",
  "icecream.webp",
  "home.webp",
  "tree.webp"
];
// Prepare an array with 2 copies of each image (for matching)
let gameImages = [...arr, ...arr, ...arr, ...arr, ...arr]; // total 25 pairs
gameImages = gameImages.slice(0, 25); // Ensure only 25 items
gameImages.sort(() => Math.random() - 0.5); // Shuffle the array

let s = "";

for (let i = 0; i < 40; i++) {
  s += `
    <div class="card" data-image="${gameImages[i]}">
      <div class="card-inner">
        <div class="card-front">?</div>
        <div class="card-back">
          <img src="${gameImages[i]}" alt="card image">
        </div>
      </div>
    </div>`;
}

main.innerHTML = s;

// Game logic
let flippedCards = [];
let score = 0;
const scoreDisplay = document.createElement("div");
scoreDisplay.id = "score";
scoreDisplay.textContent = "Score: 0";
document.body.prepend(scoreDisplay); // Add score at the top

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains("flipped") || flippedCards.length === 2) return;

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const img1 = first.getAttribute("data-image");
      const img2 = second.getAttribute("data-image");

      if (img1 === img2) {
        // ✅ Match
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
        flippedCards = [];
      } else {
        // ❌ Not a match → flip back after delay
        setTimeout(() => {
          first.classList.remove("flipped");
          second.classList.remove("flipped");
          flippedCards = [];
        }, 1000);
      }
    }
  });
});

