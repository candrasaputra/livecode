/*
  ===========
  Fear Factor
  ===========

  [INSTRUCTIONS]
  Fear Factor adalah suatu fungsi untuk mengetahui dia bisa menjadi juara atau
  tidak.

  [EXAMPLE]
  Input:
  fearFactor = 'Single'
  weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air']
  Output:
  Dia kalah karena kelemahan yang pertama

  [RULE]
  - WAJIB menggunakan PSEUDOCODE
  - Maksimal weaknesses ada 9
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

/*
STORE `factor` with string
STORE `weakAgainsts` with list weaknest
STORE `numberString` with ['pertama', 'kedua', 'ketiga', 'keempat', 'kelima', 'keenam', 'ketujuh', 'kedelapan', 'kesembilan']

STORE `i` with 0
LOOP `weakAgainsts`
  IF `weakAgainsts` INDEX `i` equal to `factor`
    DISPLAY 'Dia kalah karena kelemahan yang '+ value numberString INDEX `i`
    STOP
  END
  SET `i` with `i` plus 1
END LOOP

DISPLAY 'Selamat dia juara'
*/

function fearFactorFunc(factor, weakAgainsts) {
  let numberString = ['pertama', 'kedua', 'ketiga', 'keempat', 'kelima', 'keenam', 'ketujuh', 'kedelapan', 'kesembilan'];

  for (let i = 0; i < weakAgainsts.length; i++) {
    if (weakAgainsts[i] === factor) {
      console.log('Dia kalah karena kelemahan yang '+numberString[i]);
      return;
    }
  }

  console.log('Selamat dia juara');
};

var fearFactor = 'Single';
var weaknesses = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor, weaknesses);
// Dia kalah karena kelemahan yang pertama

var fearFactor2 = 'Menikah';
var weaknesses2 = ['Single', 'Jomblo', 'Tikus', 'Air'];
fearFactorFunc(fearFactor2, weaknesses2);
// Selamat dia juara

var fearFactor3 = 'Menikah';
var weaknesses3 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Menikah'];
fearFactorFunc(fearFactor3, weaknesses3);
// Dia kalah karena kelemahan yang kesembilan

var fearFactor4 = 'Menikah';
var weaknesses4 = ['Single', 'Jomblo', 'Tikus', 'Air', 'Makan', 'Menari', 'Menyanyi', 'Dandan', 'Jomblo Fisabilillah'];
fearFactorFunc(fearFactor4, weaknesses4);
// Selamat dia juara