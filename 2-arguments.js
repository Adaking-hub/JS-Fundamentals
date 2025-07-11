//Accept arguments and print their count

const argsNum = process.argv.slice(2);

//if no arguments are passed, print "No argument"
if (argsNum.length === 0) {
  console.log("No argument");
}

//if one argument is passed, print "Argument found"
else if (argsNum.length === 1) {
  console.log("Argument found");
}
//if more than one argument is passed, print "Arguments found"
else {
    console.log("Arguments found");
}