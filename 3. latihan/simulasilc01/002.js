/*
-------------------
The Number Cruncher
-------------------
PROBLEM
========
Disediakan sebuah function numberCruncher yang bertugas untuk menerima dua parameter
berupa array of number, dan mengembalikan array baru yang merupakan hasil perkalian angka di kedua array tersebut. 
Apabila pada array pertama tidak memiliki pasangan indeks yang sama pada array kedua (atau sebaliknya) maka akan dikalikan dengan angka 0.
Kemudian, dari setiap nilai di dalam array tersebut, ambil yang nilainya ganjil, kemudian kalikan semua nilai ganjil tersebut dan return hasil perkalian ganjilnya.


Pola
----
input: [x, y, z, a, b] dan [d, e, f, g]
proses:
[
  (x * d)
  (y * e)
  (z * f)
  (a * g)
  (b * 0) --> karena b tidak memiliki pasangan di array kedua
]

Contoh
-------
Input: [ 3, 5, 2 ] dan [ 7, 5, 4 ]
Proses:
=> [ (3 * 7) , (5 * 5), (2 * 4) ]
=> [ 21, 25, 8 ]
=> nilai ganjil: 21 dan 25
=> 21* 25
Output: 525


Input: [ 1, 2, 3, 2 ] dan [ 3, 5 ]
Proses:
=> [ (1 * 3), (2 * 5), (3 * 0), (2 * 0) ]
=> [ 3, 10, 0, 0 ]
=> nilai ganjil: 3
Output: 3

Input: [4, 5, 8, 2] dan [9, 1, 2, 4, 9, 2]
Proses:
=> [ 63, 5, 16, 15, 0, 0 ]
=> nilai ganjil: 63, 5, 15
=> 63 * 5 * 15
Output: 4725

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
- tidak boleh menggunakan .eval
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE!


*/

function multiplyTheOdds(arrOperand1, arrOperand2) {
  // Ketika arrOperand1 return 0
  if (arrOperand1.length === 0) return 0;

  // Ambil panjang terbesar dari kedua array sebagai base untuk perulangan
  let length = (arrOperand1.length > arrOperand2.length) ? arrOperand1.length : arrOperand2.length;
  // inisialisasi variabel untuk hasil akhir
  let multiply;

  // Loop sebanyak array terpanjang
  for (let i = 0; i < length; i++) {
    // Cek jika indek ke i dari masing - masing array kosong maka isi dengan 0
    arrOperand1[i] = (arrOperand1[i] === undefined) ? 0 : arrOperand1[i];
    arrOperand2[i] = (arrOperand2[i] === undefined) ? 0 : arrOperand2[i];
    
    // lakukaan perkalian jika tidak nol atau nilai ganjil
    if ((arrOperand1[i] * arrOperand2[i]) != 0 && (arrOperand1[i] * arrOperand2[i]) % 2 != 0) {
      // Cek jika multiply belum ada nilai masukan perkalian pertama sebagai nilai mula-mula
      if (multiply === undefined) {
        multiply = arrOperand1[i] * arrOperand2[i];
      } else {
        multiply *= (arrOperand1[i] * arrOperand2[i]);
      }
    }
  }
  
  // Tampilkan hasil perkalian
  return multiply;
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0
