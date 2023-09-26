export default class ScoreTable {
  constructor(side) {
    this.player = document.getElementById("player-score_span");
    this.dealer = document.getElementById("dealer-score_span");
    this.augment(side);
  }

  augment(side = null) {
    if (side) {
      let score = Number(this.player.textContent);
      score += 1;
      this.player.textContent = score;
    } else {
      console.log(this.dealer.textContent);
      let score = Number(this.dealer.textContent);
      score += 1;
      this.dealer.textContent = score;
    }
  }
}
