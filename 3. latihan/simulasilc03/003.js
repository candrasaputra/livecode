/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed(data) {
  if (data === '') return 'No data';

  let splitKoma = mySplit(data, ',');

  let tmpArr = [];
  let tmpStr = '';

  let record = false;
  for (let i = 0; i < splitKoma.length; i++) {

    for (let j = 0; j < splitKoma[i].length; j++) {
      if (record) {
        tmpStr += splitKoma[i][j];
      }

      if (splitKoma[i][j] === ':') {
        record = true;
      }

      if (splitKoma[i][j] === ' ') {
        record = false;

        tmpArr.push(Number(tmpStr));
        tmpStr = '';
        break;
      }
    }
  }
  return highest(tmpArr);
}

function highest(arr) {
  let highest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }

  return highest;
}

function mySplit(string, operator) {
  let result = [];
  let tmpString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === operator) {
      result.push(tmpString);
      tmpString = '';
    } else {
      tmpString += string[i]
    }

    if (i === string.length - 1) {
      result.push(tmpString);
    }
  }

  return result;
}

console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data