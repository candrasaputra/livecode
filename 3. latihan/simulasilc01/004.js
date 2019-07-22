
/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output: 
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort 

*/

function initialGroupingDescending(studentsArr) {
  // Urutkan array berdasarkan descending
  studentsArr = sortAlphabet(studentsArr);
  // Inisialisasi array hasil
  let result = [];

  // Asumsikan array 00 sebagai array mula-mula
  let init = studentsArr[0][0];

  // Tampung huruf pertama array 00.
  // tmp digunakan untuk menampung array yang memiliki inisialisasi sama.
  let tmp = [studentsArr[0][0]];
  // Loop array
  for (let i = 0; i < studentsArr.length; i++) {
    // Jika init sama dengan huruf awal masing-masing array
    // push index ke tmp
    if (init === studentsArr[i][0]) {
      tmp.push(studentsArr[i]);
    }
    // Jika init tidak sama dengan huruf awal  tmp simpan kedalam result, artinya huruf yang sama dengen inisialisasi sudah tidak ada.
    // ubah init / inisialisasi dengan huruf pertama dari array saat ini.
    // ubah tmp dengan array yang berisi init dan array saat ini.
    else {
      result.push(tmp);
      init = studentsArr[i][0];
      tmp = [init, studentsArr[i]];
    }

    // Jika ini perulangan yg terakhir simpan, tmp kedalam result.
    if (studentsArr.length - 1 === i) {
      result.push(tmp);
    }
  }

  return result;
}

// Mengurutkan huruf berdasarkan descending
function sortAlphabet(arr) {
  // Saat peertama kali Asumsikan array belum ururt
  let isSorted = false;

  // Lakukan selama array belum urut
  while (!isSorted) {
    isSorted = true; // tiap kali loop asumsikan array telah urut

    // Lakukan pengecekan array saat ini dan array berikutnya
    // Jika kode ASCII huruf pertama array saat ini lebih kecil dari array berikutnya maka tukar posisi
    for (let i = 0; i < arr.length - 1; i++) {
      let tmp;
      if (arr[i].charCodeAt(0) < arr[i + 1].charCodeAt(0)){
        tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;

        isSorted = false;
      }
    }
  }
  
  return arr;
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
