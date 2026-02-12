def check(word):
    vowelnum = 0
    vowel = ['a', 'e', 'i', 'o', 'u']
    for i in range(len(word)):
        for a in range(len(vowel)):
            if word[i] == vowel[a]:
                vowelnum += 1

print(check("tree"))