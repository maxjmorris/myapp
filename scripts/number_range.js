
function numberRange(number)
{
  if (number >= 50 && number <= 200)
  {
    return "Number is in range";
  } else {
    return "Number not in range";
  }
}

console.log(numberRange(50));
console.log(numberRange(201));
console.log(numberRange(49));
console.log(numberRange(100));
console.log(numberRange(172));
