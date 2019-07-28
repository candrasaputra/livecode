/**
=======================
British National Crisis
=======================
Tiga narapidana kabur dari penjara London. Tiga narapidana ini memiliki nomor sel 1, 5, dan 9.
Tiga narapidana ini bergabung dan menyatukan kekuatan dan pikiran untuk mengacau di Inggris
dengan melakukan pengeboman di tempat-tempat yang berbeda.

Setiap kali mereka mau melakukan pengeboman, mereka mengirimkan sebuah kode aneh
ke Scotland Yard, markas kepolisian Inggris.
Seorang detektif pemula tengah mencoba menyelesaikan krisis tersebut.
Ternyata, kode tersebut merupakan sebuah pola. Kode tersebut merupakan
angka 2,3,4,6,7, atau 8
 yang ditulis dengan kata dalam bahasa Inggris, dan diacak.
Seluruh karakter di kode tersebut apabila disusun dengan baik, akan menghasilkan
beberapa kata berupa angka dalam bahasa Inggris.

District yang akan diserang selanjutnya adalah total dari angka yang ditemukan di kode tersebut!
Karena tiga narapidana ini benci dengan sel mereka,
 mereka tidak memasukkan angka 1, 5, dan 9.  Berikut ini adalah bahasa Inggris untuk angka yang digunakan:
  TWO -> 2
  THREE -> 3
  FOUR -> 4
  SIX -> 6
  SEVEN -> 7
  EIGHT -> 8

Contoh Kode 1:
WTWTHROETEO.
Apabila diacak mendapatkan kombinasi:
TWO TWO THREE => 2, 2, dan 3. 2 + 2 + 3 = 7, maka targetnya District 7!

Contoh Kode 2:
HSEVTEEING.
Apabila diacak mendapatkan kombinasi:
 SEVEN EIGHT => 7 dan 8. 7 + 8 = 15, maka targetnya District 15!

Contoh Kode 3:
FNEXSIVUSEOR. Apabila diacak mendapatkan kombinasi:
 FOUR SIX SEVEN => 4, 6, dan 7. 4 + 6 + 7 = 17, maka targetnya District 17!

Contoh Kode 4:
WTO. Apabila diacak mendapatkan kombinasi:
 TWO => 2. Maka targetnya District 2!


HINT:
Urutan angka mana yang keluar lebih dulu tidak penting!

Yang penting adalah kita mendapatkan district berapa yang menjadi target!
*/

function nextTargetArea(code) {
  let alfa = ['TWO', 'THREE', 'FOUR', 'SIX', 'SEVEN', 'EIGHT'];
  let num = [2, 3, 4, 6, 7, 8];

  let codeArr = stringToArr(code);

  let removeIndex = [];
  let bookingIndex = [];
  let bookingString = '';

  for (let i = 0; i < codeArr.length; i++) {

  }


  return stringToArr(code);
}

function removeIndex(array1, array2) {

}

function stringToArr(code) {
  let result = [];

  for (let i = 0; i < code.length; i++) {
    result.push(code[i]);
  }

  return result;
}

console.log(nextTargetArea('WTO')); // "District 2 is the next target!"
// console.log(nextTargetArea('WTWTHROETEO')); // "District 7 is the next target!"
// console.log(nextTargetArea('HSEVTEEING')); // "District 15 is the next target!"
// console.log(nextTargetArea('FNEXSIVUSEOR')); // "District 17 is the next target!"
// console.log(nextTargetArea('EFNEXRSIVHUSEORTE')); // "District 20 is the next target!"