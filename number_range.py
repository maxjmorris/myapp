import sys


def number_range(number):
    if isinstance(number, int):
        if number < 50:
            return "The number you put in " + str(number) + " is too low"
        elif number > 200:
            return "The number you put in " + str(number) + " is too high"
        else:                        
            return "The number you put in was " + str(number) + " is just right"
    else:
        return "Please enter a number what you entered " + str(number) + " is not a number"


print(number_range(sys.argv[1]))






