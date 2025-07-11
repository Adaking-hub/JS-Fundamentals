//Accept arguments and print them

const argsNum = process.argv.slice(2);

//if no arguments are passed, print "No argument"
if (argsNum.length === 0) {
  console.log("No argument");
}
else if (argsNum.length === 1) {
  console.log("Argument found");
}
else {
    console.log("Arguments found");
}