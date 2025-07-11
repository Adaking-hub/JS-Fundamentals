//Convert an argument to an integer
const argsNum = process.argv.slice(2);
const number = parseInt(argsNum[0]);

if (isNaN(number)) {
  console.log("Not a number");
}
else {
  console.log("My number: " + number);
}