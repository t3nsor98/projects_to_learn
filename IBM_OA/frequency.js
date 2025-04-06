function properCompression(s) {
  const freq = {}; // Hash map for frequency

  for (let i = 0; i < s.length; i += 2) {
    const char = s[i];
    const count = parseInt(s[i + 1]);

    if (freq[char]) {
      freq[char] += count;
    } else {
      freq[char] = count;
    }
  }

  // Get distinct characters and sort alphabetically
  const sortedKeys = Object.keys(freq).sort();
  return sortedKeys.join("");
}

// Test
const input = "a3b5c2a2";
const result = properCompression(input);
console.log(result); // Output: abc
