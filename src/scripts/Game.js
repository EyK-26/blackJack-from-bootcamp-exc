import Distribute from "./Distribute";
import { cards } from "../cards/cards";

export default class Game {
  constructor() {
    this.dealerDeck = document.getElementById("dealer-cards");
    this.playerDeck = document.getElementById("player-cards");
    this.restartBtn = document.getElementById("new-round-btn");
    this.restartBtn.addEventListener("click", this.restartGame.bind(this));
  }

  init() {
    const shuffledCards = this.shuffle([...cards]);
    const distribute = new Distribute(shuffledCards);
    distribute.distribute();
  }

  shuffle(cardArray) {
    let currentIndex = cardArray.length;
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [cardArray[currentIndex], cardArray[randomIndex]] = [
        cardArray[randomIndex],
        cardArray[currentIndex],
      ];
    }
    console.log(cardArray);
    return cardArray;
  }

  restartGame() {
    const hit = document.getElementById("player-hit-btn");
    const stand = document.getElementById("player-stand-btn");
    const result = document.querySelector(".message");
    result.textContent = "";
    hit.replaceWith(hit.cloneNode(true));
    stand.replaceWith(stand.cloneNode(true));
    while (this.playerDeck.firstChild) {
      this.playerDeck.removeChild(this.playerDeck.firstChild);
    }
    while (this.dealerDeck.firstChild) {
      this.dealerDeck.removeChild(this.dealerDeck.firstChild);
    }
    this.init();
  }
}
