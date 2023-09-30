import Calculate from "./Calculate";
import Deal from "./Deal";
import EndGame from "./EndGame";
export const REVERS = "face-revers";

export default class Dealer {
  constructor(cards, playerCards, hiddenCard) {
    this.cards = cards;
    this.playerCards = playerCards;
    this.hiddenCard = hiddenCard;
    this.dealerDeck = document.getElementById("dealer-cards");
  }

  revealHiddenCard() {
    const firstHiddenCard = this.dealerDeck.firstChild;
    firstHiddenCard.classList.remove(REVERS);
    firstHiddenCard.classList.add(this.hiddenCard);
  }

  dealerAction() {
    this.revealHiddenCard();
    const firstTwoCards = Calculate.calculate(this.dealerDeck);
    if (firstTwoCards >= 17) {
      const endGame = new EndGame();
      endGame.compare();
    } else {
      this.pickExtraCards(firstTwoCards);
    }
  }

  pickExtraCards(firstTwo) {
    let dealerScore = firstTwo;
    while (dealerScore < 17) {
      Deal.deal(this.dealerDeck, this.cards);
      dealerScore = Calculate.calculate(this.dealerDeck);
    }
    if (dealerScore > 21) {
      const endGame = new EndGame();
      endGame.directLose();
    } else {
      const endGame = new EndGame();
      endGame.compare();
    }
  }
}
