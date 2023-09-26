import Calculate from "./Calculate";

export default class PreCalculate {
  calculateDealerCards(dealerCards) {
    return Calculate.calculate(dealerCards);
  }

  calculatePlayerCards(playerCards) {
    return Calculate.calculate(playerCards);
  }
}
