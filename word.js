const word = prompt("enter word: "); 
console.log("input:");
console.log(word);

const UpperCase = (word.match(/[A-Z]/) || []).length;
const LowerCase = (word.match(/[a-z]/) || []).length;

let correctedWord = word;

if (UpperCase === LowerCase) {
  correctedWord = word.toLowerCase();
} else if (UpperCase > LowerCase) {
  correctedWord = word.toUpperCase();
} else {
  correctedWord = word.toLowerCase();
}
console.log("\nOutput:")
console.log(correctedWord);
