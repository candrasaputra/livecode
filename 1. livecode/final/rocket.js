/*
  /////
  order
  /////
  Function order ini hanya berfungsi mengurutkan number dari kecil ke besar dalam bentuk string
  dan outputnya disatukan dengan satu spasi. Apabila ada angka yang sama selalu urutkan dari paling
  kiri.

  [RULES]
  1. Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

function order(words) {
  let split = mySplit(words);
  let isOrdered = true;
  if (split.length === 0) return '';

  while (isOrdered) {
    isOrdered = false;

    let angkaSaatIni = '';
    let angkaBerikut = '';
    for (let i = 0; i < split.length - 1; i++) {
      for (let j = 0; j < split[i].length; j++) {
        if (!isNaN(split[i][j])) {
          angkaSaatIni += split[i][j];
        }

        if (split[i][j] === '-') {
          angkaSaatIni += split[i][j];
        }
      }

      for (let j = 0; j < split[i + 1].length; j++) {
        if (!isNaN(split[i + 1][j])) {
          angkaBerikut += split[i + 1][j];
        }

        if (split[i + 1][j] === '-') {
          angkaBerikut += split[i + 1][j];
        }
      }

      if (Number(angkaSaatIni) > Number(angkaBerikut)) {
        let sementara = split[i];
        split[i] = split[i + 1]
        split[i + 1] = sementara

        isOrdered = true;
      }
      angkaSaatIni = '',
        angkaBerikut = '';
    }
  }

  return myJoin(split)
}

function mySplit(str) {
  let result = [];

  let tmp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] != ' ') {
      tmp += str[i];
    }

    if (str[i] === ' ' && !(tmp == ' ' || tmp == '')) {
      result.push(tmp);
      tmp = '';
    }

    if (i === str.length - 1 && !(tmp == ' ' || tmp == '')) {
      result.push(tmp);
      tmp = '';
    }
  }
  return result;
}

function myJoin(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length) {
      string += ' ' + arr[i];
    } else {
      string += arr[i];
    }
  }

  return string
}

console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est
console.log(order("4of Fo-10r       pe6000ople   g3ood    th5e  the2")) // "Fo-10r the2 g3ood 4of th5e pe6000ople"
console.log(order("i1s Thi0s m2e real1")) // "Thi0s i1s real1 2me"
console.log(order("")) // ""