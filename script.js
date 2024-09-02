const factButton = document.getElementById('factButton'); // Selects the button element
const factDisplay = document.getElementById('factDisplay'); // Selects the paragraph element

const facts = [
  "Golden Retrievers are known for their friendly and gentle nature.",
  "They were originally bred to retrieve waterfowl.",
  "Golden Retrievers are highly intelligent and easy to train.",
  "They are often used as therapy dogs due to their calming presence.",
  "Golden Retrievers have a double coat that sheds seasonally.",
  // Add more facts here
];

factButton.addEventListener('click', () => { // Adds a click event listener to the button
  const randomIndex = Math.floor(Math.random() * facts.length); // Generates a random index
  factDisplay.textContent = facts[randomIndex]; // Sets the paragraph's text to the random fact
});