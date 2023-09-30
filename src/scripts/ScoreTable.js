export default class ScoreTable {
  constructor(side = false) {
    this.player = document.getElementById("player-score_span");
    this.dealer = document.getElementById("dealer-score_span");
    this.side = side;
    this.augment();
  }

  augment() {
    if (this.side) {
      let score = Number(this.player.textContent);
      score += 1;
      this.player.textContent = score;
    } else {
      let score = Number(this.dealer.textContent);
      score += 1;
      this.dealer.textContent = score;
    }
  }
}
