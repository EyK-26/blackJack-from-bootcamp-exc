const CARD = "card";
export default class Deal {
  static deal(deck, cards) {
    const pickedCard = cards.shift();
    const newCardSlot = document.createElement("div");
    newCardSlot.classList.add(CARD);
    newCardSlot.classList.add(pickedCard);
    deck.appendChild(newCardSlot);
  }
}
