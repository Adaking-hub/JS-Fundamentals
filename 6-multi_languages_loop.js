const lines = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let result = '';
let i = 0;

while (i < lines.length) {
  result += lines[i] + '\n';
  i++;
}

console.log(result.trim());