/**

Implementasikan function formatDuration() yang akan menerima satu parameter yaitu jumlah detik
dan akan mengembalikan string berupa detik yang sudah di-format supaya bisa dibaca oleh manusia

Function ini hanya menerima angka yang tidak negatif (0..MAX INTEGER). Jika angka adalah 0, maka
function akan mengembalikan string "Sekarang". Jika tidak, maka akan mengembalikan durasi yang
sudah di-format (kombinasi tahun, hari, jam, menit dan detik).

Contoh:
  formatDuration(62)    // "1 tahun dan 2 detik"
  formatDuration(3662)  //  "1 jam, 1 menit dan 2 detik"
Spasi harus persis seperti output yang diharapkan

Aturan:
- Tiap satuan waktu harus dipisah dengan 1 koma dan 1 spasi (", "). Kecuali satuan terakhir, yang
akan dipisah dengan " dan ", seperti ditulis dalam Bahasa Indonesia.

- Satuan waktu yang lebih besar harus dikeluarkan sebelum yang lebih kecil.
Maka, "1 detik dan 1 tahun" adalah SALAH, tapi "1 tahun dan 1 detik" adalah BENAR.

// return num === 1 ? 1 : num + numberSum(num - 1);

// let output = 0;
// for(let i = 1; i <= num; i++){
//   output += i;    
// }
// return output;
- Satuan waktu harus digunakan sebanyak mungkin. Contohnya adalah function tidak boleh
mengembalikan nilai "61 detik", tapi "1 menit dan 1 detik" sebagai gantinya.

- DILARANG ada satuan waktu yang duplikat seperti "5 detik dan 1 detik"

- DILARANG menampilkan satuan waktu yang isinya adalah 0 seperti "2 jam, 1 menit dan 0 detik"

Untuk soal ini, asumsikan bahwa 1 tahun = 365 hari, dan 1 hari = 24 jam

Urutan satuan waktu dari terbesar ke terkecil:
 - Tahun Hari Jam Menit Detik

*/

function formatDuration (seconds) {
  let timeSeconds = 0;
  let timeMinuts = 0;
  let timeHours = 0;
  let month = 0;
  let day = 0;
  let year = 0;

  if (seconds === 0) return 'sekarang';

  timeHours = (seconds >= 3600) ? Math.floor(seconds / 3600) : 0;
  
  seconds = seconds - (timeHours * 3600);

  timeMinuts = (seconds >= 60) ? Math.floor(seconds / 60) : 0;
  
  seconds = seconds - (timeMinuts * 60);

  timeSeconds = (seconds > 0) ? seconds % 60 : 0;

  year= (timeHours >= 8760) ? Math.floor(timeHours / 8760) : 0;

  timeHours = timeHours - (year * 8760);

  month= (timeHours >= 744) ? Math.floor(timeHours / 744) : 0;

  timeHours = timeHours - (month * 744);

  day = (timeHours >= 24) ? Math.floor(timeHours / 24) : 0;

  timeHours = timeHours - (day * 24);

  return separator([year, month, day, timeHours, timeMinuts, timeSeconds]);
}

function separator(arr) {
  for (let i = 0; i < arr.length; i++) {
      arr[i] = unit(i, arr[i]);
  }

  let newArr = arr.filter(arr => arr !== '');
  let newString = newArr.join(', ');

  if (newArr.length > 1) {
      var n = newString.lastIndexOf(',');

      newString = newString.slice(0, n) + newString.slice(n).replace(',', ' dan');

      return newString;
  } else {
      return newString;
  }
}

function unit(unitIndex, num) {
  let unit;

  if(num === 0) return '';

  switch (unitIndex) {
      case 0: unit = 'tahun'; break;
      case 1: unit = 'bulan'; break;
      case 2: unit = 'hari'; break;
      case 3: unit = 'jam'; break;
      case 4: unit = 'menit'; break;
      case 5: unit = 'detik'; break;
  }

  return num+' '+unit;
}

console.log(formatDuration(10000)); // 2 jam, 46 menit dan 40 detik
console.log(formatDuration(3662)); // 1 jam, 1 menit dan 2 detik
console.log(formatDuration(62)); // 1 menit dan 2 detik
console.log(formatDuration(500000)); // 5 hari, 18 jam, 53 menit dan 20 detik
console.log(formatDuration(2000000)); // 23 hari, 3 jam, 33 menit dan 20 detik
console.log(formatDuration(94608000)); // 3 tahun
console.log(formatDuration(126144060)); // 4 tahun dan 1 menit
console.log(formatDuration(0)); // Sekarang
