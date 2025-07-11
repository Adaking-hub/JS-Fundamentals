//Accept Argumemt and print them
const argsNum = process.argv.slice(2);

if (argsNum[0] === undefined) {
  console.log("No argument");
}
else{
    console.log(argsNum.join(" "));
}