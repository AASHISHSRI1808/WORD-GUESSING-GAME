// List of programming language words
const words = [
    "java",
    "javascript",
    "python",
    "pascal",
    "ruby",
    "perl",
    "swift",
    "kotlin"
];

// Select a random word from the list
const selectedWord = words[Math.floor(Math.random() * words.length)];
console.log("Selected Word:", selectedWord); // For debugging

// To store guessed letters
let guessedLetters = [];

// Display the word with underscores
function updateDisplayWord() {
    let display = "";
    let allGuessed = true;

    for (let letter of selectedWord) {
        if (guessedLetters.includes(letter)) {
            display += letter + " ";
        } else {
            display += "_ ";
            allGuessed = false;
        }
    }

    document.getElementById("displayWord").textContent = display.trim();

    // If all letters are guessed
    if (allGuessed) {
        setTimeout(() => {
            alert("🎉 Congratulations! You guessed the word correctly!");
        }, 100);
    }
}

// Initialize the display on page load
updateDisplayWord();

// Handle letter guessing
function guessLetter() {
    const inputElement = document.getElementById("letter-input");
    const input = inputElement.value.toLowerCase();

    // Clear the input field
    inputElement.value = "";

    // Validate input
    if (!input || input.length !== 1 || !input.match(/[a-z]/i)) {
        alert("Please enter a single valid letter.");
        return;
    }

    // Check for duplicate guesses
    if (guessedLetters.includes(input)) {
        alert("You have already guessed that letter!");
        return;
    }

    // Add guessed letter and update display
    guessedLetters.push(input);
    updateDisplayWord();
}
