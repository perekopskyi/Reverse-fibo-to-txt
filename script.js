const fs = require("fs");

const SOURCE = "./source.txt";
const OUTPUT = "./output.txt";

function readStringsFromFile(path) {
  const dataFromFile = fs.readFileSync(path);
  return dataFromFile
    .toString()
    .split("\n")
    .map((row) => {
      return row.trim();
    });
}

/**
 * Function that returns the fibonacci numbers
 * that do not exceed the number of rows in the array
 * @param {number} length of array
 */
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

function writeStringsToFile(text) {
  fs.writeFile(OUTPUT, text, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    // file successfully recorded
  });
}

// Read file and returned array of strings
const textArray = readStringsFromFile(SOURCE);
// Find Fibo numbers that do not exceed the number of rows in the array
const fiboNumbers = fibo(textArray.length - 1);
// Find rows corresponding to the fibonacci numbers
const fiboStrings = fiboNumbers.map((fibo) => textArray[fibo - 1]);
// Create array of reversed Fibo Strings
const reversedFiboStringsArray = fiboStrings.map((item) => reverseString(item));
// Join array items into text
const resultText = reversedFiboStringsArray.join("\n");

writeStringsToFile(resultText);
