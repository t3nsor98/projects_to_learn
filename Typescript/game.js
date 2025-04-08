"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// List of programming languages
var wordList = [
    "typescript", "javascript", "python", "java", "kotlin",
    "go", "rust", "swift", "ruby", "php", "dart", "scala"
];
// Pick a random word
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}
// Display word with _ for unguessed letters
function getMaskedWord(word, guessedLetters) {
    return word
        .split('')
        .map(function (char) { return (guessedLetters.has(char) ? char : '_'); })
        .join(' ');
}
function askForGuess(game) {
    var masked = getMaskedWord(game.word, game.guessedLetters);
    console.log("\nWord: ".concat(masked));
    console.log("Wrong guesses: ".concat(Array.from(game.wrongGuesses).join(', ')));
    console.log("Tries left: ".concat(game.maxTries - game.wrongGuesses.size));
    if (masked.indexOf('_') === -1) {
        console.log("\uD83C\uDF89 Congrats! You guessed the word \"".concat(game.word, "\""));
        rl.close();
        return;
    }
    if (game.wrongGuesses.size >= game.maxTries) {
        console.log("\uD83D\uDC80 Game over! The word was \"".concat(game.word, "\""));
        rl.close();
        return;
    }
    rl.question('Guess a letter: ', function (input) {
        var guess = input.toLowerCase();
        if (guess.length !== 1 || !/[a-z]/.test(guess)) {
            console.log('⚠️ Enter a single letter (a-z).');
        }
        else if (game.guessedLetters.has(guess) || game.wrongGuesses.has(guess)) {
            console.log('❗ You already guessed that letter.');
        }
        else if (game.word.includes(guess)) {
            game.guessedLetters.add(guess);
        }
        else {
            game.wrongGuesses.add(guess);
        }
        askForGuess(game); // loop again
    });
}
// Initialize game
function startGame() {
    var game = {
        word: getRandomWord(),
        guessedLetters: new Set(),
        maxTries: 6,
        wrongGuesses: new Set()
    };
    console.log("🧠 Programming Language Word Guessing Game (TypeScript)");
    askForGuess(game);
}
startGame();
