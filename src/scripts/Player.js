import Dealer from "./Dealer";
import PreCalculate from "./Pre-Calculate";
import Deal from "./Deal";
import EndGame from "./EndGame";

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
    console.log(this.cards);
    Deal.deal(this.playerDeck, this.cards);
    console.log(this.cards);
    const preCalculate = new PreCalculate();
    const playerScore = preCalculate.calculateDealerCards(this.playerDeck);
    console.log(playerScore);
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
