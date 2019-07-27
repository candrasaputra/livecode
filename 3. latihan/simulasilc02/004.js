/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
    let result = [];
    let countArray = getCountEachWord(words);
    let avg = getAvg(words);
    let wordSplit = mySplit(words, ' ');

    for (let i = 0; i < countArray.length; i++) {
        if (countArray[i] === avg) {
            result.push(wordSplit[i]);
        }
    }

    return result;
}

function getAvg(words) {
    let array = getCountEachWord(words);
    let length = array.length;
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }

    return Math.round(total / length);
}

function getCountEachWord(words) {
    let wordSplit = mySplit(words, ' ');
    let wordToNumber = [];

    for (let i = 0; i < wordSplit.length; i++) {
        wordToNumber.push(wordSplit[i].length)
    }

    return wordToNumber;
}

function mySplit(str, sparator) {
    let result = [];

    let tmp = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sparator) {
            result.push(tmp);
            tmp = '';
        } else {
            tmp += str[i];
        }

        if (i === str.length - 1) {
            result.push(tmp);
            tmp = '';
        }
    }
    return result;
}

console.log(averageLengthWord('dd dddd dddddd dddddddd'));
console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []