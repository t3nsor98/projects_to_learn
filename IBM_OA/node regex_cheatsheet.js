// ===== Basic Patterns =====
console.log(/a/.test("apple")); // true
console.log(/abc/.test("abcde")); // true
console.log(/x/.test("apple")); // false

// ===== Character Classes =====
console.log(/\d/.test("123")); // true (digit)
console.log(/\D/.test("abc")); // true (non-digit)
console.log(/\w/.test("hello_123")); // true (alphanumeric or _)
console.log(/\W/.test("!@#")); // true (non-word character)
console.log(/\s/.test("hello world")); // true (space)
console.log(/\S/.test("hello")); // true (non-space)

// ===== Anchors =====
console.log(/^H/.test("Hello")); // true (starts with H)
console.log(/o$/.test("Hello")); // true (ends with o)
console.log(/^hello$/i.test("HELLO")); // true (matches whole string, ignore case)

// ===== Quantifiers =====
console.log(/lo*/.test("looool")); // true (0 or more o's)
console.log(/lo+/.test("lol")); // true (1 or more o's)
console.log(/lo?l/.test("ll")); // true (0 or 1 o)
console.log(/\d{3}/.test("123")); // true (exactly 3 digits)
console.log(/\d{2,4}/.test("123")); // true (2 to 4 digits)

// ===== Groups and Alternation =====
console.log(/(cat|dog)/.test("I love dogs")); // true
console.log(/gr[ae]y/.test("gray")); // true
console.log(/gr[ae]y/.test("grey")); // true
console.log(/[^0-9]/.test("abc")); // true (non-digit)

// ===== Flags =====
console.log(/hello/i.test("HELLO")); // true (ignore case)
console.log("hello hello".match(/hello/g)); // ['hello', 'hello'] (global)

// ===== Useful String Methods =====
const str = "abc123xyz";

console.log(str.match(/\d+/)); // ['123'] (match digits)
console.log(str.replace(/\d+/, "#")); // 'abc#xyz' (replace digits)
console.log(str.search(/\d/)); // 3 (index of first digit)
console.log("apple,banana,grape".split(/,/)); // ['apple', 'banana', 'grape']

// ===== Common Validations =====
// Email
console.log(/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test("test@email.com")); // true

// Phone number (simple)
console.log(/^\d{10}$/.test("9876543210")); // true

// Alphanumeric only
console.log(/^[a-z0-9]+$/i.test("Hello123")); // true
