// js-string-methods-demo.js

console.log("🟢 BASIC METHODS");
let str = "hello";
console.log("Length:", str.length); // 5
console.log("Char at index 1:", str.charAt(1)); // e
console.log("Includes 'ell':", str.includes("ell")); // true
console.log("Index of 'l':", str.indexOf("l")); // 2
console.log("Last index of 'l':", str.lastIndexOf("l")); // 3

console.log("\n🟢 TRANSFORM & MODIFY");
let messyStr = "  Hello World  ";
console.log("Uppercase:", messyStr.toUpperCase()); // '  HELLO WORLD  '
console.log("Lowercase:", messyStr.toLowerCase()); // '  hello world  '
console.log("Trimmed:", messyStr.trim()); // 'Hello World'
console.log("Trim Start:", messyStr.trimStart()); // 'Hello World  '
console.log("Trim End:", messyStr.trimEnd()); // '  Hello World'

console.log("\n🟢 EXTRACTING PARTS");
let name = "javascript";
console.log("Slice(1,4):", name.slice(1, 4)); // 'ava'
console.log("Substring(1,4):", name.substring(1, 4)); // 'ava'
console.log("Substr(1,3):", name.substr(1, 3)); // 'ava' (deprecated)

console.log("\n🟢 REPLACE & SPLIT");
let greet = "hello";
console.log("Replace 'l' with 'x':", greet.replace("l", "x")); // 'hexlo'
console.log("ReplaceAll 'l' with 'x':", greet.replaceAll("l", "x")); // 'hexxo'

let data = "a,b,c,d";
console.log("Split by comma:", data.split(",")); // ['a', 'b', 'c', 'd']

let ha = "ha";
console.log("Repeat 3 times:", ha.repeat(3)); // 'hahaha'

console.log("\n🟢 STARTS & ENDS");
let filename = "main.js";
console.log("Starts with 'main':", filename.startsWith("main")); // true
console.log("Ends with '.js':", filename.endsWith(".js")); // true

console.log("\n🟢 PADDING");
let num = "5";
console.log("PadStart to length 3:", num.padStart(3, "0")); // '005'
console.log("PadEnd to length 3:", num.padEnd(3, "0")); // '500'

console.log("\n🟢 REAL WORLD EXAMPLES");
let username = "  Digbijaya Sen  ";
let sanitized = username.toLowerCase().trim().replaceAll(" ", "_");
console.log("Sanitized username:", sanitized); // 'digbijaya_sen'

let title = "My First Blog Post!";
let slug = title
  .toLowerCase()
  .replace(/ /g, "-")
  .replace(/[^a-z0-9\-]/g, "");
console.log("Slug from title:", slug); // 'my-first-blog-post'

let email = "test@example.com";
console.log("Valid email check:", email.includes("@")); // true

let url = "https://example.com";
console.log("Is secure URL?", url.startsWith("https")); // true

let text = "This is a very long paragraph that might need to be truncated...";
let shortText = text.length > 30 ? text.slice(0, 30) + "..." : text;
console.log("Truncated text:", shortText); // first 30 chars + '...'
