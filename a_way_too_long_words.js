let words = [];

const n = prompt("Enter the number of words:");

// Read each word
for (let i = 0; i < n; i++) {
  const word = prompt(`Enter word ${i+1}:`);
  words.push(word);
}

console.log("Input:");
console.log(n);
console.log(words.join("\n"));

aWayTooLongWords(words);

function aWayTooLongWords(words) {
  // Loop through each word
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // Check if the word is too long
    if (word.length > 10) {
      // Abbreviate the word
      const abbreviation = word[0] + (word.length - 2) + word[word.length - 1];

      // Replace the original word with the abbreviation
      words[i] = abbreviation;
    }
  }

  console.log("\nOutput:");
  console.log(words.join("\n"));
}
