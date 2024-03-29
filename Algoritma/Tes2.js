function longestWord(sentence) {
    const words = sentence.split(" ");
    const longest = words.sort((a, b) => b.length - a.length)[0];

    return `${longest}: ${longest.length} characters`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longestWord(sentence));
