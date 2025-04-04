# Function to find the HCF of two numbers iteratively
def find_hcf(a, b):
    # Ensure both numbers are positive
    a = abs(a)
    b = abs(b)

    # Loop until both numbers become equal
    while a != b:
        if a > b:
            a -= b  # Subtract smaller number from larger number
        else:
            b -= a  # Subtract smaller number from larger number

    # Return the HCF
    return a


# Example usage
num1 = 60
num2 = 96
print(f"The HCF of {num1} and {num2} is {find_hcf(num1, num2)}.")
