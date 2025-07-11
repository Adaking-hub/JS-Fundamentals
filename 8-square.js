//Print a square
const argSquare = process.argv.slice(2);
const squareSize = parseInt(argSquare[0]);

if(isNaN(squareSize)) {
  console.log("Missing size");
}
else if (squareSize <= 0) {
  // do nothing
}
else {
  for (let i = 0; i < squareSize; i++) {
    let row = '';
    for (let j = 0; j < squareSize; j++) {
      row += 'X';
    }
    console.log(row);
  }
}