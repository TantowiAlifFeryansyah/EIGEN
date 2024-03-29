const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];

function countOccurrences(input, query) {
    const occurrences = query.map(q => input.filter(i => i === q).length);
    const outputSentences = occurrences.map((count, index) => {
        const word = query[index];
        const plural = count !== 1 ? "kali" : "kali";
        const isFound = count !== 0 ? "terdapat" : "tidak ada";
        return `Kata '${word}' ${isFound} ${count} ${plural} pada INPUT`;
    });
    return [occurrences, outputSentences];
}

const [outputOccurrences, outputSentences] = countOccurrences(INPUT, QUERY);

console.log("Jumlah kemunculan setiap kata pada INPUT:", outputOccurrences);
console.log("Kalimat sesuai dengan output:");
outputSentences.forEach(sentence => console.log(sentence));
