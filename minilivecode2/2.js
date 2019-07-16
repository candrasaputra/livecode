/*
  CHANGE WORDS
  Change words adalah sebuah fungsi yang menerima input
  berupa multi dimensional array yang berisi kata dan
  akan mengembalikan nilai baru berupa array multidimensional yang sudah diubah kata-katanya.

  RULES:
  1. Asumsi index row dan col selalu dimulai dari 0
  2. Pertambahan index row dan col akan menentukan bagaimana kata tersebut akan diolah:
    a. Apabila hasil pertambahan adalah bilangan prima maka hilangkan semua huruf vokal (a, e, i, u, o)
    b. Apabila hasil pertambahan adalah angka genap maka balik atau reversed kata tersebut
    c. Apabila hasil pertambahan adalah angka ganil maka ubah semua menjadi huruf besar

  EXAMPLE:
  INPUT: [
    ["cat", "fish"],
    ["dog", "cow"]
  ]
  OUTPUT: [
      ["tac", "FISH"],
      ["DOG", "wc"]
    ]

  EXPLANATION
    1. pertambahan index pada kata "cat" 0 berarti dia hanya bilangan genap sehingga kata "cat" dibalik menjadi "tac"
    2. pertambahan index pada kata "fish" dan "dog" adalah bilangan ganjila sehingga kedua kata tersebut diubah ke huruf besar
    3. Pertambahan pada kata "cow" adalah bilangan genap dan prima sehingga kata tersebut dibalik dan dihilangkan huruf vokalnya

  RULES:
    1. dilarang menggunakan built in function .split, .reversed, .join, .filter, .map dan sejenisnya
*/

function changeWords(words) {
  for (let i = 0; i < words.length; i++) {
    let idx = i;
    
    for (let j = 0; j < words[i].length; j++) {

      if (idx % 2 === 0){
        // genap
        words[i][j] = revers(words[i][j]);
      } else {
        // ganjil
        words[i][j] = toCaps(words[i][j]);
      }

      let flagPrima = true;
      for (let x = 2; x < idx; x++) {
        if (idx % x === 0) {
          flagPrima = false;
        }
      }
      
      if(flagPrima) {
        words[i][j] = removeVocal(words[i][j]);
      }

      idx++;
    }
  }

  return words;
};

function removeVocal(string) {
  let vocal = 'aiueo';
  let vocalBesar = 'AIUEO';
  let newString = '';
  let flag = true;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vocal.length; j++) {
      if (string[i] === vocal[j]) {
        flag = false;
        break;
      }

      if (string[i] === vocalBesar[j]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      newString += string[i];
    }

    flag = true;
  }

  return newString;
}

function toCaps (string) {
  let kecil = 'abcdefghijklmnopqrstuvwxyz';
  let besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < kecil.length; j++) {
      if (string[i] === kecil[j]) {
        newString += besar[j];
        break;
      }
    }
  }

  return newString;
}

function revers(string) {
  let newString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  
  return newString;
}

var words = [
  ["cat", "dog", "fish"],
  ["cat", "dog", "fish"], 
  ["cat", "dog", "fish"]
]
console.log(changeWords(words))
/*
[ 
  [ 'tac', 'DOG', 'hsf' ],
  [ 'CAT', 'gd', 'FSH' ],
  [ 'tc', 'DG', 'hsif' ] 
]

*/