//print out multiple times
const multiTimes = process.argv.slice(2);
const x = parseInt(multiTimes[0]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
}
else if (x <= 0) {
  //do nothing
}
else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}