let word = "hello";
const vowel = ["a", "e", "i", "o", "u"];
let vowelnum = 0;

for (let value1 = 0; value1 < word.length; value1++) {
  for (let value2 = 0; value2 < vowel.length; value2++) {
    if (word[value1] == vowel[value2]) {
        vowelnum++;
        }
    }
}
console.log(vowelnum);
