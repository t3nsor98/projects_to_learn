import random

# Updated word list with programming languages and technologies
wordList = ["javascript", "python", "java", "html", "css", "react", "angular", "nodejs", "typescript", "django"]

# Randomly select a word from the list
word = random.choice(wordList)

# Initialize the guessed word with underscores
guessedWord = ["_"] * len(word)

# Number of attempts
attempts = 10

while attempts > 0:

    # Display the current state of the guessed word
    print("\nCurrent word: " + " ".join(guessedWord))

    # Prompt the user to guess a letter
    guess = input("Guess a letter: ").lower()

    # Check if the guessed letter is in the word
    if guess in word:
        for i in range(len(word)):
            if word[i] == guess:
                guessedWord[i] = guess
        print("Great guess!")
    else:
        # Decrement attempts if the guess is wrong
        attempts -= 1
        print("Wrong guess! Attempts left: " + str(attempts))

    # Check if the word has been completely guessed
    if "_" not in guessedWord:
        print("\nCongratulations!! You guessed the word: " + word)
        break
else:
    # If attempts run out, reveal the word
    print("\nYou've run out of attempts! The word was: " + word)
