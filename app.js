// const document
const buttonDraw = document.getElementById("button");
const cardDrawn = document.getElementById("card__drawn");
const winText = document.getElementById("winning");
//consts img of the array
const aceSpades = `<img src="img/1.png" alt="Ace of Spades">`;
const twoSpades = `<img src="img/2.png" alt="Two of Spades">-`;
const threeSpades = `<img src="img/3.png" alt="Three of Spades"></img>`;
const fourSpades = `<img src="img/4.png" alt="Four of Spades"></img>`;
const fiveSpades = `<img src="img/5.png" alt="Five of Spades"></img>`;
const sixSpades = `<img src="img/6.png" alt="Six of Spades"></img>`;
const sevenSpades = `<img src="img/7.png" alt="Seven of Spades"></img>`;
const eightSpades = `<img src="img/8.png" alt="Eight of Spades"></img>`;
const nineSpades = `<img src="img/9.png" alt="Nine of Spades"></img>`;
const tenSpades = `<img src="img/10.png" alt="Ten of Spades"></img>`;
const jSpades = `<img src="img/11.png" alt="J of Spades"></img>`;
const qSpades = `<img src="img/12.png" alt="Queen of Spades"></img>`;
const kSpades = `<img src="img/13.png" alt="King of Spades"></img>`;
// card deck array
const cardDeck = [
  aceSpades,
  twoSpades,
  threeSpades,
  fourSpades,
  fiveSpades,
  sixSpades,
  sevenSpades,
  eightSpades,
  nineSpades,
  tenSpades,
  jSpades,
  qSpades,
  kSpades,
];
// function expressions
buttonDisplay = () => {
  buttonDraw.style.display = "none";
};
drawCard = () => {
  if (cardDeck.length === 0) {
    winText.textContent = `No more cards in deck`;
  } else {
    winText.textContent = "Keep playing";
    let randomIndex = Math.floor(Math.random() * cardDeck.length);
    cardDrawn.innerHTML = `${cardDeck[randomIndex]}`;
    cardDeck.splice(randomIndex, 1);
    console.log(cardDeck.length);
  }
};
// callback
start = (one, two) => {
  one();
  two();
}
