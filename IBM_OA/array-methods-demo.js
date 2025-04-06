// array-methods-demo.js

console.log("🟢 BASIC METHODS");

let arr = [1, 2, 3, 4, 5];
console.log("Length:", arr.length);
arr.push(6);
console.log("After push:", arr); // [1,2,3,4,5,6]
arr.pop();
console.log("After pop:", arr); // [1,2,3,4,5]
arr.unshift(0);
console.log("After unshift:", arr); // [0,1,2,3,4,5]
arr.shift();
console.log("After shift:", arr); // [1,2,3,4,5]
console.log("Includes 3?", arr.includes(3)); // true
console.log("Index of 4:", arr.indexOf(4)); // 3
console.log("Join with - :", arr.join("-")); // '1-2-3-4-5'

let more = [6, 7];
let merged = arr.concat(more);
console.log("Concatenated:", merged); // [1,2,3,4,5,6,7]

console.log("\n🟢 ITERATION & TRANSFORMATION");

arr.forEach((x) => console.log("Item:", x));
let doubled = arr.map((x) => x * 2);
console.log("Mapped (x2):", doubled); // [2,4,6,8,10]
let filtered = arr.filter((x) => x > 2);
console.log("Filtered (>2):", filtered); // [3,4,5]
let sum = arr.reduce((acc, val) => acc + val, 0);
console.log("Reduced sum:", sum); // 15
let found = arr.find((x) => x > 3);
console.log("First > 3:", found); // 4
let foundIndex = arr.findIndex((x) => x > 3);
console.log("Index of first > 3:", foundIndex); // 3

console.log("\n🟢 SORT & REVERSE");

let numArr = [5, 2, 9, 1];
console.log("Before sort:", numArr);
numArr.sort((a, b) => a - b); // Ascending
console.log("Sorted (asc):", numArr);
numArr.reverse();
console.log("Reversed:", numArr); // Descending

console.log("\n🟢 SLICE & SPLICE");

let sliced = arr.slice(1, 4);
console.log("Sliced (1-4):", sliced); // [2,3,4]

let spliced = [...arr]; // copy
spliced.splice(2, 1); // Remove 3rd item
console.log("Spliced (remove 3rd):", spliced); // [1,2,4,5]

console.log("\n🟢 ADVANCED");

console.log(
  "Every > 0?",
  arr.every((x) => x > 0)
); // true
console.log(
  "Some > 4?",
  arr.some((x) => x > 4)
); // true

let nested = [1, [2, [3, 4]]];
console.log("Flattened:", nested.flat(2)); // [1,2,3,4]

let filled = new Array(5).fill("🔥");
console.log("Filled array:", filled); // ['🔥','🔥','🔥','🔥','🔥']

console.log("Last item using .at(-1):", arr.at(-1)); // 5

console.log("\n🟢 REAL DEV USE CASE");

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Digbijaya" },
  { id: 3, name: "Bob" },
];

let filteredUsers = users.filter((user) => user.name.includes("D"));
console.log("Filtered Users:", filteredUsers);

let usernames = users.map((user) => user.name.toUpperCase());
console.log("Mapped Usernames:", usernames); // ['ALICE', 'DIGBIJAYA', 'BOB']

let totalIds = users.reduce((acc, u) => acc + u.id, 0);
console.log("Total of IDs:", totalIds); // 6
