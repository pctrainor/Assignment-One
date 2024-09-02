const factButton = document.getElementById('factButton'); // Selects the button element
const factDisplay = document.getElementById('factDisplay'); // Selects the paragraph element

const facts = [
  "Golden Retrievers are known for their friendly and gentle nature",
  "They are often used as guide dogs and therapy dogs due to their calm and patient temperament",
  "Golden Retrievers are highly intelligent and easy to train, making them popular family pets",
  "They have a strong prey drive and love to fetch, making them excellent swimming companions",
  "Golden Retrievers have a double coat that is both waterproof and shed-resistant",
  "They are typically a medium-large breed and weigh between 55 and 70 pounds",
  "Golden Retrievers have a lifespan of 10-12 years",
  "They come in three colors: golden, light golden, and dark golden",
  "They require regular grooming, including brushing, bathing, and ear cleaning",
  "Golden Retrievers are often considered the 'perfect family dog' due to their friendly and gentle nature",
  "They are known for their love of children and other pets",
  "Golden Retrievers are often used in search and rescue operations due to their strong sense of smell and endurance",
  "They are also used as service dogs for people with disabilities",
  "Golden Retrievers are known for their expressive eyes and wagging tails",
  "They are often referred to as 'golden hearts' due to their kind and loving nature",
  "Golden Retrievers are popular in dog shows and competitions",
  "They are often used in movies and television shows",
  "They are often considered the 'happiest' breed of dog"
  // Add more facts here
];

factButton.addEventListener('click', () => { // Adds a click event listener to the button
  const randomIndex = Math.floor(Math.random() * facts.length); // Generates a random index
  factDisplay.textContent = facts[randomIndex]; // Sets the paragraph's text to the random fact
});