const RGXNUM = /\d/g;
//const RGXSTR = /(jack|queen|king)/g;
const RGXACE = /-ace-/g;

export default class Calculate {
  static calculate(cards) {
    let score = 0;
    const arrayedCards = Array.from(cards.children);
    arrayedCards.forEach((card) => {
      if (RGXNUM.test(card.className)) {
        score += Number(card.className.match(RGXNUM).join(""));
      } else if (
        card.className.includes("king") ||
        card.className.includes("queen") ||
        card.className.includes("jack")
      ) {
        score += 10;
      } else if (card.className.includes("ace-of")) {
        if (score + 11 > 21) {
          score += 1;
        } else {
          score += 11;
        }
      }
    });
    return score;
  }
}
