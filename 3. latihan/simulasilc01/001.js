/*
PROBLEM
=======
Bilangan prima adalah sebuah bilangan dimana hanya bisa habis dibagi oleh angka 1 dan angka itu sendiri.
Contoh:
7 adalah bilangan prima, karena hanya habis dibagi angka 1 dan 11.
22 bukan bilangan prima, karena habis dibagi 1, 2, 11, dan 22.

Deret bilangan prima
2, 3, 5, 7, 11, 13, 17, 19, 23, dst

Buatlah sebuah function getPrime dimana menerima sebuah parameter bertipe Number. 
Function tersebut mengembalikan/me-return array kumpulan deret bilangan prima sampai parameter tersebut.

Contoh 1:

input: 10
output: [ 2, 3, 5, 7 ]

//karena di-range angka 10 hanya bilangan 2, 3, 5 dan 7 saja yang merupakan bilangan prima

Contoh 2:

input: 44
output: [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]

// karena di-range angka 44 hanya bilangan di atas saja yang merupakan bilangan prima


RULES:
- wajib membuat algoritma/pseudocode untuk program getPrime

note: pastikan tidak menggunakan sintaks javascript, tapi fokus ke logika

REMINDER ABOUT PSEUDOCODE
=========================
Contoh Pseudocode yang Kurang Tepat (tidak ada hubungan dengan soal):
var num
for i = 0 , i < 8, i++
  if i = 5
    num++

Contoh Pseudocode yang Benar (tidak ada hubungan dengan soal):
STORE num with any value
WHILE i < 8
  IF i equals to 5
    ADD num by 1
*/

/*
PSEUDOCODE:
STORE FUNCTION getPrime PRAMETER num with any number
  STORE `arrPrime` with empty array

  LOOP i equal 0 until num
    IF result FUNCTION isPrime INDEX i equal to true
      PUSH i to arrPrime
    END IF
  END LOOP

  RETURN arrPrime

END FUNCTION getPrime

STORE FUNCTION getPrime PRAMETER num with any number
  STORE isPrime with true

  IF num least equal to 1 RETURN false

  LOOP i equal 2 until num
    IF num MOD 2 equal to 0
      RETURN false
      BREAK
    END IF
  END LOOP

  RETURN isPrime
END FUNCTION
*/

function getPrime(num) {
  let arrPrime = [];

  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      arrPrime.push(i);
    }
  }

  return arrPrime;
}

// Fungsi untuk mengecek apakan sebuah angka bilangan prima atau bukan
// Return true untuk prima dan false jika bukan prima
function isPrime(num) {
  let isPrime = true;
  
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []
