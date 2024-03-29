function reverseString(str) {
    const letters = str.match(/[a-zA-Z]/g);
    const numbers = str.match(/[0-9]/g);
    let reversedLetters = letters.reverse().join('');
    if (numbers) {
        reversedLetters += numbers.join('');
    }
    return reversedLetters;
}

let originalString = "NEGIE1";
let reversedString = reverseString(originalString);
console.log(reversedString);
