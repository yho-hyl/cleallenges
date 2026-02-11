for (let word = "hello"; word.length > 0; word.shift) {
    for (const vowel = ["a", "e", "i", "o", "u"]; word.length > 0; word.shift) {
        if (word[0] == vowel[0]) {
            vowelnum++;
        }
    }
}