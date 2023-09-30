import Player from "./Player";
import Deal from "./Deal";
import EndGame from "./EndGame";
import { REVERS } from "./Dealer";
import Calculate from "./Calculate";

export default class Distribute {
  constructor(shuffledCards) {
    this.shuffledCards = shuffledCards;
    this.playerDeck = document.getElementById("player-cards");
    this.dealerDeck = document.getElementById("dealer-cards");
    this.hiddenCard;
  }

  distributeToPlayer() {
    while (this.playerDeck.children.length < 2) {
      Deal.deal(this.playerDeck, this.shuffledCards);
    }
    const playerScore = Calculate.calculate(this.playerDeck);
    if (playerScore === 21) {
      const endGame = new EndGame();
      endGame.directWin("player");
    }
  }

  hideForDealer(cards) {
    const classes = cards.children[0].classList;
    const storedHiddenCard = classes[classes.length - 1];
    this.hiddenCard = storedHiddenCard;
    classes.remove(storedHiddenCard);
    classes.add(REVERS);
  }

  distributeToDealer() {
    while (this.dealerDeck.children.length < 2) {
      Deal.deal(this.dealerDeck, this.shuffledCards);
    }
    this.hideForDealer(this.dealerDeck);
  }

  distribute() {
    this.distributeToPlayer();
    this.distributeToDealer();
    new Player(this.shuffledCards, this.hiddenCard);
  }
}
