/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

/*

STORE `array` with any string combine GSB
STORE `totalG` with 0
STORE `totalS` with 0
STORE `totalB` with 0
STORE `totalPoint` with 0

STORE `i` with 0
LOOP array

  IF `array` INDEX `i` equal to 'G' THEN
    SET `totalG` with `totalG` plus 1
    SET `totalPoint` with `totalPoint` plus 2
  ELSE IF `array` INDEX `i` equal to 'S' THEN
    SET `totalS` with `totalS` plus 1
    SET `totalPoint` with `totalPoint` plus 1
  ELSE IF `array` INDEX `i` equal to 'B' THEN
    SET `totalB` with `totalB` plus 1
    SET `totalPoint` with `totalPoint` plus 0.5
  END

  SET `i` with `i` plus 1
END LOOP

DISPLAY 'jumlah Gold: [totalG], jumlah Silver: [totalS], jumlah Bronze: [totalB]. Dan totalnya adalah: [totalPoint]
*/

function poinCalculator(array) {
  let totalG = 0;
  let totalS = 0;
  let totalB = 0;
  let totalPoint = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'G') {
      totalG++;
      totalPoint += 2;
    } else if (array[i] === 'S') {
      totalS++;
      totalPoint += 1;
    } else if (array[i] === 'B') {
      totalB++;
      totalPoint += 0.5;
    }
  }

  return 'jumlah Gold: '+totalG+', jumlah Silver: '+totalS+', jumlah Bronze: '+totalB+'. Dan totalnya adalah: '+totalPoint;
}

console.log(poinCalculator("GSB"));
// jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
console.log(poinCalculator("GGG"));
// jumlah Gold: 3, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 6
console.log(poinCalculator("SSB"));
// jumlah Gold: 0, jumlah Silver: 2, jumlah Bronze: 1. Dan totalnya adalah: 2.5
console.log(poinCalculator("BBGSSGB"));
// jumlah Gold: 2, jumlah Silver: 2, jumlah Bronze: 3. Dan totalnya adalah: 7.5
console.log(poinCalculator(""));
// jumlah Gold: 0, jumlah Silver: 0, jumlah Bronze: 0. Dan totalnya adalah: 0
  
