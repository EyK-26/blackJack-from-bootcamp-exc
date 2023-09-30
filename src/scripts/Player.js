import Dealer from "./Dealer";
import Deal from "./Deal";
import EndGame from "./EndGame";
import Calculate from "./Calculate";

export default class Player {
  constructor(cards, hiddenCard) {
    this.cards = cards;
    this.hiddenCard = hiddenCard;
    this.hit = document.getElementById("player-hit-btn");
    this.stand = document.getElementById("player-stand-btn");
    this.playerDeck = document.getElementById("player-cards");
    this.dealerDeck = document.getElementById("dealer-cards");
    this.hit.addEventListener("click", this.pickAnotherCard.bind(this));
    this.stand.addEventListener("click", this.stopPickingCard.bind(this));
  }

  pickAnotherCard() {
    Deal.deal(this.playerDeck, this.cards);
    const playerScore = Calculate.calculate(this.playerDeck);
    
    if (playerScore > 21) {
      const endGame = new EndGame();
      endGame.directLose("player");
    }
  }

  stopPickingCard() {
    const dealerAction = new Dealer(
      this.cards,
      this.playerDeck,
      this.hiddenCard
    );
    dealerAction.dealerAction();
  }
}
