window.onload = function () {
  const cardEl = document.getElementById("card");
  const suits = ["♠", "♣", "♥", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function generateCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];

    cardEl.querySelector(".card-top").textContent = suit;
    cardEl.querySelector(".card-value").textContent = value;
    cardEl.querySelector(".card-bottom").textContent = suit;

    // Red if hearts or diamonds
    const red = suit === "♥" || suit === "♦";
    cardEl.style.color = red ? "red" : "black";
  }

  // Generate first card on load
  generateCard();

  // New card on button click
  document.getElementById("new-card").addEventListener("click", generateCard);
};
