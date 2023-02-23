let magnets = [];

const n = prompt("Enter number of magnets: ");

for (let i = 0; i < n; i++) {
    const magnet = prompt(`Enter word ${i+1}:`);
    magnets.push(magnet);
}


console.log("Input:");
console.log(n);
console.log(magnets.join("\n"));

let groups = 0;
let prev = '';

for (let i = 0; i < n; i++) {
    let curr = magnets[i];

    if (curr !== prev) {
        groups++;
        prev = curr;
    }
}

console.log("\nOutput")
console.log(groups);




