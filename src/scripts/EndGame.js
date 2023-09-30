import Calculate from "./Calculate";
import ScoreTable from "./ScoreTable";

export default class EndGame {
  constructor() {
    this.dealerDeck = document.getElementById("dealer-cards");
    this.playerDeck = document.getElementById("player-cards");
    this.message = document.querySelector(".message");
  }

  compare() {
    const playerScore = Calculate.calculate(this.playerDeck);
    const dealerScore = Calculate.calculate(this.dealerDeck);
    const bothPassed = playerScore <= 21 && dealerScore <= 21;

    console.log(dealerScore, playerScore);

    if (playerScore > dealerScore && bothPassed) {
      this.message.textContent = "You Win";
      new ScoreTable("player");
    } else if (playerScore < dealerScore && bothPassed) {
      this.message.textContent = "You Lost";
      new ScoreTable();
    } else {
      this.message.textContent = "Draw";
    }
  }

  directLose(arg = false) {
    const playerScore = Calculate.calculate(this.playerDeck);
    const dealerScore = Calculate.calculate(this.dealerDeck);
    console.log(dealerScore, playerScore);
    if (arg) {
      this.message.textContent = "You Lost (busted)";
      new ScoreTable();
    } else {
      this.message.textContent = "You Won (dealer busted)";
      new ScoreTable("player");
    }
  }

  directWin() {
    const playerScore = Calculate.calculate(this.playerDeck);
    const dealerScore = Calculate.calculate(this.dealerDeck);
    console.log(dealerScore, playerScore);
    this.message.textContent = "You Won (blackJack)";
    new ScoreTable("player");
  }
}
