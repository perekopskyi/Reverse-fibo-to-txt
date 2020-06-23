const fs = require("fs");

const file = "./source.txt";
const dataFromFile = fs.readFileSync(file);

const textArray = dataFromFile
  .toString()
  .split("\n")
  .map((row) => {
    return row.trim();
  });

const fiboNumbers = fibo(textArray.length - 1);

const fiboStrings = fiboNumbers.map((fibo) => textArray[fibo - 1]);

const reverseFiboStrings = fiboStrings.map((item) => reverseString(item));

const resultData = reverseFiboStrings.join("\n");

// write to output.txt
fs.writeFile("./output.txt", resultData, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  // file successfully recorded
});

// function that receives the array's length and returns the fibonacci numbers
function fibo(length) {
  const array = [];

  if (length > 0) {
    array.push(1);
  }

  if (length > 1) {
    array.push(1);
  }

  let count = 2;
  let fib = array[count - 1] + array[count - 2];
  while (fib < length) {
    array.push(fib);
    count++;
    fib = array[count - 1] + array[count - 2];
  }

  // remove excess item
  if (array.length > 1) {
    array.splice(0, 1);
  }

  return array;
}

function reverseString(string) {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i);
  }

  return newString;
}
