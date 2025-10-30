"use strict";

const quotes = [
"hej mis mis mis mis",
"trolololololololololololololol",
"hallo flieger",


];

function getRandomQuote() {
  if (quotes.length === 0) {
    return "ikke flere citater";
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);

  return quotes[randomIndex];
}

function displayRandomQuote() {
  const randomQuote = getRandomQuote(); // Henter et citat
  document.getElementById("quotes").textContent = randomQuote; // Viser det på siden
}

document
  .getElementById("displayQuoteBtn")
  .addEventListener("click", displayRandomQuote);
