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
  let equationToString = String(equation);

  let genZero = '';

  for (let i = 0; i < Number(equationToString.length - 1); i++) {
    genZero += '0';
  }

  let first = Number(equationToString[0]) + genZero;
  let plus = '';

  if (equationToString.length !== 1) {
    plus = '+';
  }

  if (equationToString.length === 0 || Number(first) === 0) {
    return ''
  } else if (Number(equationToString.substring(1)) === 0) {
    return String(first)
  } else {
    return first + plus + parseNumber(Number(equationToString.substring(1)))
  }
}

function genZero(num) {

}

// function parseNumber(equation) {
//   equationString = String(equation);

//   let panjang = equationString.length - 1;
//   panjang = String(panjang)

//   let first = Number(equationString[0]) * Math.pow(10, Number(equationString.length - 1));
//   first = (first === 0) ? '' : String(first);
//   if (equationString.length === 0) {
//     return '';
//   } else {
//     let str = '';

//     let plus = '+'

//     return first + '+' + parseNumber(equationString.substring(1))
//   }
// }

console.log(parseNumber(3333)) // 3000+300+30+3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3
console.log(parseNumber(505)) // 500+5
console.log(parseNumber(50000000000000000000)) // 500000