//todo CHANGE from innerHTML to create element
//todo new type files for img, from PNG to WebP
//#region ------     ||const document||      ------

const buttonDraw = document.getElementById("button");
const cardDrawn = document.getElementById("card__drawn");
const winText = document.getElementById("winning");
const promptGameText = document.getElementById("promptGameText");
//#endregion
//#region -- FASTER  --
// const newImgTag = document.createElement('img');
//#endregion -- FASTER  --

//#region ------     ||const img of the array||     ------

// -- SLOW --
const aceSpades = `<img src="img/1.webp" alt="Ace of Spades">`;
const twoSpades = `<img src="img/2.webp" alt="Two of Spades">`;
const threeSpades = `<img src="img/3.webp" alt="Three of Spades">`;
const fourSpades = `<img src="img/4.webp" alt="Four of Spades">`;
const fiveSpades = `<img src="img/5.webp" alt="Five of Spades">`;
const sixSpades = `<img src="img/6.webp" alt="Six of Spades">`;
const sevenSpades = `<img src="img/7.webp" alt="Seven of Spades">`;
const eightSpades = `<img src="img/8.webp" alt="Eight of Spades">`;
const nineSpades = `<img src="img/9.webp" alt="Nine of Spades">`;
const tenSpades = `<img src="img/10.webp" alt="Ten of Spades">`;
const jSpades = `<img src="img/11.webp" alt="J of Spades">`;
const qSpades = `<img src="img/12.webp" alt="Queen of Spades">`;
const kSpades = `<img src="img/13.webp" alt="King of Spades">`;
const aceTrebol = `<img src="img/14.webp" alt="Ace of Trebol">`;
const twoTrebol = `<img src="img/15.webp" alt="Two of Trebol">`;
const threeTrebol = `<img src="img/16.webp" alt="Three of Trebol">`;
const fourTrebol = `<img src="img/17.webp" alt="Four of Trebol">`;
const fiveTrebol = `<img src="img/18.webp" alt="Five of Trebol">`;
const sixTrebol = `<img src="img/19.webp" alt="Six of Trebol">`;
const sevenTrebol = `<img src="img/20.webp" alt="Seven of Trebol">`;
const eightTrebol = `<img src="img/21.webp" alt="Eight of Trebol">`;
const nineTrebol = `<img src="img/22.webp" alt="Nine of Trebol">`;
const tenTrebol = `<img src="img/23.webp" alt="Ten of Trebol">`;
const jTrebol = `<img src="img/24.webp" alt="J of Trebol">`;
const qTrebol = `<img src="img/25.webp" alt="Queen of Trebol">`;
const kTrebol = `<img src="img/26.webp" alt="King of Trebol">`;
const aceHeart = `<img src="img/27.webp" alt="Ace of Heart">`;
const twoHeart = `<img src="img/28.webp" alt="Two of Heart">`;
const threeHeart = `<img src="img/29.webp" alt="Three of Heart">`;
const fourHeart = `<img src="img/30.webp" alt="Four of Heart">`;
const fiveHeart = `<img src="img/31.webp" alt="Five of Heart">`;
const sixHeart = `<img src="img/32.webp" alt="Six of Heart">`;
const sevenHeart = `<img src="img/33.webp" alt="Seven of Heart">`;
const eightHeart = `<img src="img/34.webp" alt="Eight of Heart">`;
const nineHeart = `<img src="img/35.webp" alt="Nine of Heart">`;
const tenHeart = `<img src="img/36.webp" alt="Ten of Heart">`;
const jHeart = `<img src="img/37.webp" alt="J of Heart">`;
const qHeart = `<img src="img/38.webp" alt="Queen of Heart">`;
const kHeart = `<img src="img/39.webp" alt="King of Heart">`;
const aceDiamonds = `<img src="img/40.webp" alt="Ace of Diamonds">`;
const twoDiamonds = `<img src="img/41.webp" alt="Two of Diamonds">`;
const threeDiamonds = `<img src="img/42.webp" alt="Three of Diamonds">`;
const fourDiamonds = `<img src="img/43.webp" alt="Four of Diamonds">`;
const fiveDiamonds = `<img src="img/44.webp" alt="Five of Diamonds">`;
const sixDiamonds = `<img src="img/45.webp" alt="Six of Diamonds">`;
const sevenDiamonds = `<img src="img/46.webp" alt="Seven of Diamonds">`;
const eightDiamonds = `<img src="img/47.webp" alt="Eight of Diamonds">`;
const nineDiamonds = `<img src="img/48.webp" alt="Nine of Diamonds">`;
const tenDiamonds = `<img src="img/49.webp" alt="Ten of Diamonds">`;
const jDiamonds = `<img src="img/50.webp" alt="J of Diamonds">`;
const qDiamonds = `<img src="img/51.webp" alt="Queen of Diamonds">`;
const kDiamonds = `<img src="img/52.webp" alt="King of Diamonds">`;
// -- SLOW --


// -- FASTER  --
// const aceSpades = "img/1.webp";
// const twoSpades = "img/2.webp";
// const threeSpades = "img/3.webp";
// const fourSpades = "img/4.webp";
// const fiveSpades = "img/5.webp";
// const sixSpades = "img/6.webp";
// const sevenSpades = "img/7.webp";
// const eightSpades = "img/8.webp";
// const nineSpades = "img/9.webp";
// const tenSpades = "img/10.webp";
// const jSpades = "img/11.webp";
// const qSpades = "img/12.webp";
// const kSpades = "img/13.webp";
// const aceTrebol = "img/14.webp";
// const twoTrebol = "img/15.webp";
// const threeTrebol = "img/16.webp";
// const fourTrebol = "img/17.webp";
// const fiveTrebol = "img/18.webp";
// const sixTrebol = "img/19.webp";
// const sevenTrebol = "img/20.webp";
// const eightTrebol = "img/21.webp";
// const nineTrebol = "img/22.webp";
// const tenTrebol = "img/23.webp";
// const jTrebol = "img/24.webp";
// const qTrebol = "img/25.webp";
// const kTrebol = "img/26.webp";
// const aceHeart = "img/27.webp";
// const twoHeart = "img/28.webp";
// const threeHeart = "img/29.webp";
// const fourHeart = "img/30.webp";
// const fiveHeart = "img/31.webp";
// const sixHeart = "img/32.webp";
// const sevenHeart = "img/33.webp";
// const eightHeart = "img/34.webp";
// const nineHeart = "img/35.webp";
// const tenHeart = "img/36.webp";
// const jHeart = "img/37.webp";
// const qHeart = "img/38.webp";
// const kHeart = "img/39.webp";
// const aceDiamonds = "img/40.webp";
// const twoDiamonds = "img/41.webp";
// const threeDiamonds = "img/42.webp";
// const fourDiamonds = "img/43.webp";
// const fiveDiamonds = "img/44.webp";
// const sixDiamonds = "img/45.webp";
// const sevenDiamonds = "img/46.webp";
// const eightDiamonds = "img/47.webp";
// const nineDiamonds = "img/48.webp";
// const tenDiamonds = "img/49.webp";
// const jDiamonds = "img/50.webp";
// const qDiamonds = "img/51.webp";
// const kDiamonds = "img/52.webp";
// -- FASTER  --

//#endregion ------     ||const img of the array||     ------
//#region ------     ||Card Deck arrays||           ------
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
//#endregion
//#region ------     ||function expressions||     ------

buttonDisplayNone = () => {
  buttonDraw.style.display = "none";
};
drawCard = () => {

  // --#region FASTER  --
  // cardDrawn.removeChild(document.getElementById("card"));
  // --#endregion FASTER  --

  console.log("Removed:");
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
    newImgTag.id = "card";
    newImgTag.src = "";
    cardDrawn.appendChild(newImgTag);
  } else {
    let randomIndex = Math.floor(Math.random() * cardDeck.length);

    //#region -- FASTER  --
    // faster html creation
    // newImgTag.src = cardDeck[randomIndex];
    // newImgTag.id = 'card';
    // cardDrawn.appendChild(newImgTag);
    //#endregion -- FASTER  --

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

// ------     ||callbacks||     ------
startGame = (one, two, three) => {
  one();
  two();
  three();
};
keepPlaying = (one, two) => {
  one();
  two();
};

//#endregion