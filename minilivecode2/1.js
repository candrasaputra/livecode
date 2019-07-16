/*
  ================
  Format Uang (KBBI)
  ================

  [INSTRUCTIONS]

  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00

  [RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
*/

function formatUang(number) {
  let numString = number.toString();
  let newFormat = 'Rp';

  if (numString.length <= 3) {
    newFormat += numString;
  } else {
    let awal = numString.length % 3;
    let titik = 3;
    let flagTitik = true;

    if (awal === 0) {
      flagTitik = false;
    }
    for (let i = 0; i < numString.length; i++) {
      
      if (i < awal) {
        newFormat += numString[i];
      } else {
        if (titik % 3 === 0 && flagTitik) {
          newFormat += '.';
        }

        newFormat += numString[i];
        flagTitik = true;
        titik++;
      }
    }
  }

  newFormat += ',00';

  return newFormat;
}

console.log(formatUang(7500)); // Rp7.500,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(100000)); // Rp100.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(4999999)); // Rp4.999.999,00

