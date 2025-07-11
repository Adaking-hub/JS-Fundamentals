//Prints the addition of two integer arguments
const argsNum = process.argv.slice(2);
const firstNumber = parseInt(argsNum[0]);
const secondNumber = parseInt(argsNum[1]);

function add(a, b) {
  return a + b;
}
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("NaN");
}
else{
    const result = add(firstNumber, secondNumber);
    console.log(result);
}