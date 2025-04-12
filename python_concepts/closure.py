def outerFunction(text):
    text = text  # Captures 'text' from the outer scope

    def innerFunction():
        print(text)  # Accesses 'text' from the outer scope

    return innerFunction


if __name__ == "__main__":
    myFunction = outerFunction("Hey!")
    myFunction()  # Output: "Hey!"
