/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/

/*
PSEUDOCODE
STORE `input` with any string, want to encrypt
STORE `biasa` with 'abcdefghijklmnopqrstuvwxyz'
STORE `H8BI` with '!@#$%^&*()-+1234567890[]{}'
STORE `result` with empty string

STROE `i` with 0
LOOP `input` THEN
  STORE `isSymbol` with false
  STORE `j` with 0
  LOOP `biasa` THEN
    IF `input` INDEX `i` equal to `biasa` INDEX `j` THEN
      SET `result` with `result` plus `H8BI` INDEX j
      SET isSymbol with false
      BREAK
    END IF
    
    SET `j` with `j` plus 1
  END LOOP
  
  IF `isSymbol` equal to true THEN
    SET `result` with `result` plus `input` INDEX `i`
  END IF
  
  SET `i` with `i` plus 1
END LOOP

DISPLAY `result`
*/

function encrypt(input) {
  let biasa = 'abcdefghijklmnopqrstuvwxyz';
  let H8BI = '!@#$%^&*()-+1234567890[]{}';

  let result = '';

  for (let i = 0; i < input.length; i++) {
    let isSymbol = true;
    for (let j = 0; j < biasa.length; j++) {
      if (input[i] === biasa[j]) {
        result += H8BI[j];
        isSymbol = false;
        break;
      }
    }

    if (isSymbol) {
      result += input[i];
    }
  }

  return result;
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2