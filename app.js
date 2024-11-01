// const document
const buttonDraw = document.getElementById("button");
const cardDrawn = document.getElementById("card__drawn");
const winText = document.getElementById("winning");
const promptGameText = document.getElementById("promptGameText");
//consts img of the array
const aceSpades = `<img src="img/1.png" alt="Ace of Spades">`;
const twoSpades = `<img src="img/2.png" alt="Two of Spades">`;
const threeSpades = `<img src="img/3.png" alt="Three of Spades">`;
const fourSpades = `<img src="img/4.png" alt="Four of Spades">`;
const fiveSpades = `<img src="img/5.png" alt="Five of Spades">`;
const sixSpades = `<img src="img/6.png" alt="Six of Spades">`;
const sevenSpades = `<img src="img/7.png" alt="Seven of Spades">`;
const eightSpades = `<img src="img/8.png" alt="Eight of Spades">`;
const nineSpades = `<img src="img/9.png" alt="Nine of Spades">`;
const tenSpades = `<img src="img/10.png" alt="Ten of Spades">`;
const jSpades = `<img src="img/11.png" alt="J of Spades">`;
const qSpades = `<img src="img/12.png" alt="Queen of Spades">`;
const kSpades = `<img src="img/13.png" alt="King of Spades">`;
const aceTrebol = `<img src="img/14.png" alt="Ace of Trebol">`;
const twoTrebol = `<img src="img/15.png" alt="Two of Trebol">`;
const threeTrebol = `<img src="img/16.png" alt="Three of Trebol">`;
const fourTrebol = `<img src="img/17.png" alt="Four of Trebol">`;
const fiveTrebol = `<img src="img/18.png" alt="Five of Trebol">`;
const sixTrebol = `<img src="img/19.png" alt="Six of Trebol">`;
const sevenTrebol = `<img src="img/20.png" alt="Seven of Trebol">`;
const eightTrebol = `<img src="img/21.png" alt="Eight of Trebol">`;
const nineTrebol = `<img src="img/22.png" alt="Nine of Trebol">`;
const tenTrebol = `<img src="img/23.png" alt="Ten of Trebol">`;
const jTrebol = `<img src="img/24.png" alt="J of Trebol">`;
const qTrebol = `<img src="img/25.png" alt="Queen of Trebol">`;
const kTrebol = `<img src="img/26.png" alt="King of Trebol">`;
const aceHeart = `<img src="img/27.png" alt="Ace of Heart">`;
const twoHeart = `<img src="img/28.png" alt="Two of Heart">`;
const threeHeart = `<img src="img/29.png" alt="Three of Heart">`;
const fourHeart = `<img src="img/30.png" alt="Four of Heart">`;
const fiveHeart = `<img src="img/31.png" alt="Five of Heart">`;
const sixHeart = `<img src="img/32.png" alt="Six of Heart">`;
const sevenHeart = `<img src="img/33.png" alt="Seven of Heart">`;
const eightHeart = `<img src="img/34.png" alt="Eight of Heart">`;
const nineHeart = `<img src="img/35.png" alt="Nine of Heart">`;
const tenHeart = `<img src="img/36.png" alt="Ten of Heart">`;
const jHeart = `<img src="img/37.png" alt="J of Heart">`;
const qHeart = `<img src="img/38.png" alt="Queen of Heart">`;
const kHeart = `<img src="img/39.png" alt="King of Heart">`;
const aceDiamonds = `<img src="img/40.png" alt="Ace of Diamonds">`;
const twoDiamonds = `<img src="img/41.png" alt="Two of Diamonds">`;
const threeDiamonds = `<img src="img/42.png" alt="Three of Diamonds">`;
const fourDiamonds = `<img src="img/43.png" alt="Four of Diamonds">`;
const fiveDiamonds = `<img src="img/44.png" alt="Five of Diamonds">`;
const sixDiamonds = `<img src="img/45.png" alt="Six of Diamonds">`;
const sevenDiamonds = `<img src="img/46.png" alt="Seven of Diamonds">`;
const eightDiamonds = `<img src="img/47.png" alt="Eight of Diamonds">`;
const nineDiamonds = `<img src="img/48.png" alt="Nine of Diamonds">`;
const tenDiamonds = `<img src="img/49.png" alt="Ten of Diamonds">`;
const jDiamonds = `<img src="img/50.png" alt="J of Diamonds">`;
const qDiamonds = `<img src="img/51.png" alt="Queen of Diamonds">`;
const kDiamonds = `<img src="img/52.png" alt="King of Diamonds">`;
// card deck array
let cardDeckPlayed = [];
let cardPlayed = [];
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
  aceDiamonds,
  twoDiamonds,
  threeDiamonds,
  fourDiamonds,
  fiveDiamonds,
  sixDiamonds,
  sevenDiamonds,
  eightDiamonds,
  nineDiamonds,
  tenDiamonds,
  jDiamonds,
  qDiamonds,
  kDiamonds,
  aceTrebol,
  twoTrebol,
  threeTrebol,
  fourTrebol,
  fiveTrebol,
  sixTrebol,
  sevenTrebol,
  eightTrebol,
  nineTrebol,
  tenTrebol,
  jTrebol,
  qTrebol,
  kTrebol,
  aceHeart,
  twoHeart,
  threeHeart,
  fourHeart,
  fiveHeart,
  sixHeart,
  sevenHeart,
  eightHeart,
  nineHeart,
  tenHeart,
  jHeart,
  qHeart,
  kHeart,
];
// function expressions
buttonDisplayNone = () => {
  buttonDraw.style.display = "none";
};
drawCard = () => {
  console.log("Removed:")
  console.log(cardDeckPlayed);
  if (
    cardDeck.indexOf(kHeart) == -1 &&
    cardDeck.indexOf(kDiamonds) == -1 &&
    cardDeck.indexOf(kSpades) == -1 &&
    cardDeck.indexOf(kTrebol) == -1
  ) {
    buttonDraw.style.display = "inline-block";
    cardDeck.push(...cardDeckPlayed);
    cardDeckPlayed = [];
    cardDrawn.innerHTML = ``;
    promptGameText.textContent = `Nueva Baraja`;
    winText.textContent = ``;
    console.log(`Reinicio`);
  } else {
    let randomIndex = Math.floor(Math.random() * cardDeck.length);
    cardDrawn.innerHTML = `${cardDeck[randomIndex]}`;
    cardPlayed = cardDeck.splice(randomIndex, 1);
    cardDeckPlayed.push(...cardPlayed);
    console.log(cardDeck.length);
  }
};
promptGame = () => {
  if (
    cardDrawn.innerHTML === aceDiamonds ||
    cardDrawn.innerHTML === aceHeart ||
    cardDrawn.innerHTML === aceSpades ||
    cardDrawn.innerHTML === aceTrebol
  ) {
    console.log(`"A" Todos toman`);
    promptGameText.textContent = `Todos toman`;
  }
  if (
    cardDrawn.innerHTML === twoDiamonds ||
    cardDrawn.innerHTML === twoHeart ||
    cardDrawn.innerHTML === twoSpades ||
    cardDrawn.innerHTML === twoTrebol
  ) {
    console.log(`"2" Pulgar izquierdo en la mesa.`);
    promptGameText.textContent = `Pulgar izquierdo en la mesa.`;
  }
  if (
    cardDrawn.innerHTML === threeDiamonds ||
    cardDrawn.innerHTML === threeHeart ||
    cardDrawn.innerHTML === threeSpades ||
    cardDrawn.innerHTML === threeTrebol
  ) {
    console.log(`"3" Toma el de la derecha.`);
    promptGameText.textContent = `Toma el de la derecha`;
  }
  if (
    cardDrawn.innerHTML === fourDiamonds ||
    cardDrawn.innerHTML === fourHeart ||
    cardDrawn.innerHTML === fourSpades ||
    cardDrawn.innerHTML === fourTrebol
  ) {
    console.log(`"4" Toma el de la izquierda`);
    promptGameText.textContent = `Toma el de la izquierda`;
  }
  if (
    cardDrawn.innerHTML === fiveDiamonds ||
    cardDrawn.innerHTML === fiveHeart ||
    cardDrawn.innerHTML === fiveSpades ||
    cardDrawn.innerHTML === fiveTrebol
  ) {
    console.log(`"5" Tu tomas un trago`);
    promptGameText.textContent = `Tu tomas un trago`;
  }
  if (
    cardDrawn.innerHTML === sixDiamonds ||
    cardDrawn.innerHTML === sixHeart ||
    cardDrawn.innerHTML === sixSpades ||
    cardDrawn.innerHTML === sixTrebol
  ) {
    console.log(`"6" Eliges una perra`);
    promptGameText.textContent = `Eliges una perra`;
  }
  if (
    cardDrawn.innerHTML === sevenDiamonds ||
    cardDrawn.innerHTML === sevenHeart ||
    cardDrawn.innerHTML === sevenSpades ||
    cardDrawn.innerHTML === sevenTrebol
  ) {
    console.log(`"7" Cultura Chupistica`);
    promptGameText.textContent = `Cultura Chupistica`;
  }
  if (
    cardDrawn.innerHTML === eightDiamonds ||
    cardDrawn.innerHTML === eightHeart ||
    cardDrawn.innerHTML === eightSpades ||
    cardDrawn.innerHTML === eightTrebol
  ) {
    console.log(`"8" Pones una regla`);
    promptGameText.textContent = `Pones una regla`;
  }
  if (
    cardDrawn.innerHTML === nineDiamonds ||
    cardDrawn.innerHTML === nineHeart ||
    cardDrawn.innerHTML === nineSpades ||
    cardDrawn.innerHTML === nineTrebol
  ) {
    console.log(`"9" Yo nunca`);
    promptGameText.textContent = `Yo nunca`;
  }
  if (
    cardDrawn.innerHTML === tenDiamonds ||
    cardDrawn.innerHTML === tenHeart ||
    cardDrawn.innerHTML === tenSpades ||
    cardDrawn.innerHTML === tenTrebol
  ) {
    console.log(`"10" Invitas un trago a quien quieras`);
    promptGameText.textContent = `Invitas un trago a quien quieras`;
  }
  if (
    cardDrawn.innerHTML === jDiamonds ||
    cardDrawn.innerHTML === jHeart ||
    cardDrawn.innerHTML === jSpades ||
    cardDrawn.innerHTML === jTrebol
  ) {
    console.log(`"J" Hombres Toman`);
    promptGameText.textContent = `Hombres Toman`;
  }
  if (
    cardDrawn.innerHTML === qDiamonds ||
    cardDrawn.innerHTML === qHeart ||
    cardDrawn.innerHTML === qSpades ||
    cardDrawn.innerHTML === qTrebol
  ) {
    console.log(`"Q" Mujeres Toman`);
    promptGameText.textContent = `Mujeres Toman`;
  }
  if (
    cardDrawn.innerHTML === kDiamonds ||
    cardDrawn.innerHTML === kHeart ||
    cardDrawn.innerHTML === kSpades ||
    cardDrawn.innerHTML === kTrebol
  ) {
    console.log(`"K" Sigue jugando`);
    promptGameText.textContent = `Sigue jugando`;
  }
  if (
    cardDeck.indexOf(kHeart) == -1 &&
    cardDeck.indexOf(kDiamonds) == -1 &&
    cardDeck.indexOf(kSpades) == -1 &&
    cardDeck.indexOf(kTrebol) == -1
  ) {
    promptGameText.textContent = `Felicidades`;
    winText.textContent = `Ganaste!!!!`;
  }
};
// callbacks
startGame = (one, two, three) => {
  one();
  two();
  three();
};
keepPlaying = (one, two) => {
  one();
  two();
};
