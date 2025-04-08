import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// List of programming languages
const wordList: string[] = [
    "typescript", "javascript", "python", "java", "kotlin",
    "go", "rust", "swift", "ruby", "php", "dart", "scala"
];

type GameState = {
    word: string;
    guessedLetters: Set<string>;
    maxTries: number;
    wrongGuesses: Set<string>;
};

// Pick a random word
function getRandomWord(): string {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// Display word with _ for unguessed letters
function getMaskedWord(word: string, guessedLetters: Set<string>): string {
    return word
        .split('')
        .map(char => (guessedLetters.has(char) ? char : '_'))
        .join(' ');
}

function askForGuess(game: GameState) {
    const masked = getMaskedWord(game.word, game.guessedLetters);
    console.log(`\nWord: ${masked}`);
    console.log(`Wrong guesses: ${Array.from(game.wrongGuesses).join(', ')}`);
    console.log(`Tries left: ${game.maxTries - game.wrongGuesses.size}`);

    if (masked.indexOf('_') === -1) {
        console.log(`🎉 Congrats! You guessed the word "${game.word}"`);
        rl.close();
        return;
    }

    if (game.wrongGuesses.size >= game.maxTries) {
        console.log(`💀 Game over! The word was "${game.word}"`);
        rl.close();
        return;
    }

    rl.question('Guess a letter: ', input => {
        const guess = input.toLowerCase();
        if (guess.length !== 1 || !/[a-z]/.test(guess)) {
            console.log('⚠️ Enter a single letter (a-z).');
        } else if (game.guessedLetters.has(guess) || game.wrongGuesses.has(guess)) {
            console.log('❗ You already guessed that letter.');
        } else if (game.word.includes(guess)) {
            game.guessedLetters.add(guess);
        } else {
            game.wrongGuesses.add(guess);
        }

        askForGuess(game); // loop again
    });
}

// Initialize game
function startGame() {
    const game: GameState = {
        word: getRandomWord(),
        guessedLetters: new Set(),
        maxTries: 6,
        wrongGuesses: new Set()
    };

    console.log("🧠 Programming Language Word Guessing Game (TypeScript)");
    askForGuess(game);
}

startGame();
