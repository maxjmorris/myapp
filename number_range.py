import sys


def number_range(number):
    if int(number) >= 50 and int(number) <= 200:
        return "Number is valid"
    else:
        return "Number is invalid"


#print(number_range(50))

print(number_range(sys.argv[1])



