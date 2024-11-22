const docText = document.getElementById("docText");
const cardDisplayed = document.getElementById("cardDisplayed");
const gamePrompt = document.getElementById("gamePrompt");
let cardDrawnArray = [];

const cardDeck = {
  cards: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
  ]
};

function gameDraw (){
  randomIndex = Math.floor(Math.random()*cardDeck.cards.length);
  cardImageSrc = `images/${cardDeck.cards[randomIndex]}.webp`;
  cardImgTagSpawn (cardImageSrc);
  cardPlayed = cardDeck.cards.splice(randomIndex,1);
  cardDrawnArray.push(...(cardDeck.cards.splice(randomIndex,1)));
}
function cardImgTagSpawn (cardSrc){
  const newImgTag = document.createElement("img");
  newImgTag.src = cardSrc;
  newImgTag.id ="cardDisplayed";
  docText.appendChild(newImgTag);
}
