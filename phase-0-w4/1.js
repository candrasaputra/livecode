/*
  ////////////
  sumTheNumber
  ////////////

  Function sumTheNumber akan menentukkan jumlah dari angka-angka dalam suatu string.
  Function akan menerima 1 parameter yaitu:
    - stringAngka adalah string yang berisi kumpulan data, tipe datanya string.
    - apabila stringAngka tersebut pada index yang ganjil maka akan ditambahkan
      jumlah kelipatan 2, selain itu cukup jumlahkan langsung.
  Function ini akan mengembalikkan nilai number.
  
  --------
  EXAMPLE:
  --------
  [INPUT]
    var stringNumber = '123456'

  [PROCESS]
  string  : 1   2   3   4   5   6
  index   : 0   1   2   3   4   5
  result  : 1 (2*2) 3 (2*4) 5 (2*6) => 1 + 4 + 3 + 8 + 5 + 12

  [OUTPUT]
    33

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift(), dan di RULES lain.
    2. Diperbolehkan untuk menggunakan built in untuk mengubah tipe data String ke Number, ataupun sebaliknya.
    2. Diasumsikan string selalu ada nilainya dan nilainya positif.
    3. WAJIB menggunakan PSEUDOCODE atau nilai 0.
*/

/*
PSEUDOCODE
STORE `stringNumber` with string number
STORE `totol` with 0
STORE i with 0

LOOP `stringNumber` 
  STORE `convertNumber` with result of CONVERT `stringNumber` INDEX `i` to Number.

  IF `i` MOD 2 equal 0 then
    CALCULATE `total` plus `convertNumber`
    SET `total` with result CALCULATE
  ELSE
    CALCULATE `total` plus `convertNumber` time 2
    SET `total` with result CALCULATE
  
  SET `i` with i` plus 1

DISPLAY `total`

*/

function sumTheNumber(stringNumber) {
  let total = 0;

  for (let i = 0; i < stringNumber.length; i++) {
    let convertNumber = Number(stringNumber[i]);
    if ((i % 2) === 0) {
      // Genap
      total += convertNumber;
    } else {
      // Ganjil
      total += convertNumber * 2;
    }
  }

  return total;
}

console.log(sumTheNumber('123456')) // 33
console.log(sumTheNumber('341231')) // 21
console.log(sumTheNumber('1')) // 1
console.log(sumTheNumber('01')) // 2