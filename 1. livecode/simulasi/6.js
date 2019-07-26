/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  equationString = String(equation);

  let index = -1;
  let flagIndex = true;
  let banyakPlus = 0;
  for (let i = 0; i < equationString.length; i++) {

    if (flagIndex && equationString[i] != '0') {
      index = i
      flagIndex = false
    }

    if (equationString[i] == '0') {
      flagIndex = true;
    }

    if (equationString[i] == '+') {
      index = -1;
      flagIndex = true;
      banyakPlus++;
    }
  }

  let banyak = (equationString.length - 1) - index;

  // Base Case
  if (equationString[equationString.length - 1] == '0' || index === equationString.length - 1) {
    return equationString;
  } else {
    let kiri = equationString.slice(0, index);
    let kanan = equationString.slice(index, equationString.length - 1);
    return parseNumber(kiri + equationString[index] + makeZero(banyak) + kanan);
  }
}

function makeZero(num) {
  let string = '';
  num = Number(num);

  for (let i = 0; i < num; i++) {
    string += '0';
  }

  return string;
}

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3