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
  const randomQuote = getRandomQuote();
  document.getElementById("quotes").textContent = randomQuote; 
}

document
  .getElementById("displayQuoteBtn")
  .addEventListener("click", displayRandomQuote);
