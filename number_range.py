import sys


def number_range(number):
        if int(number) < 50:
            return "The number you put in " + str(number) + " is too low"
        elif int(number) > 200:
            return "The number you put in " + str(number) + " is too high"
        else:                        
            return "The number you put in was " + str(number) + " is just right"


print(number_range(sys.argv[1]))






