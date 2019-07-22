/*
Minimum Distance Between Greatest Element


Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2 

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

function minDistanceBetweenGreatest(arr) {
  // jika arr tidak terdefinisi ataupun kosong return 0
  if (arr.length === 0 || arr === undefined) return 0;
  
  // Inisialisasi numBiggest dengan nilai index 0 dan indexBigger dengan 0
  let numBiggest = arr[0];
  let indexBiggest = [0];

  // Loop arr mulai dari 1
  for (let i = 1; i < arr.length; i++) {
    // Jika arr ke i sama dengan nilai terbesar maka push i ke indexBigger
    if (arr[i] === numBiggest) {
      indexBiggest.push(i);
    }
    // Jika arr ke i lebih besar dari nilai terbesar, maka ubah nilai numBigger dengan nilai saat ini dan indexBigger dengan index saat ini.
    else if (arr[i] > numBiggest) {
      numBiggest = arr[i];
      indexBiggest = [i];
    }
  }

  // Jika indexBigger cuma 1 return 0
  if (indexBiggest.length === 1) {
    return 0;
  } else {
    // inisialisasi jarak terpendek dengan index ke i di kurang index ke 1, nilai dibuat mutlak
    let shortest = Math.abs(indexBiggest[0] - indexBiggest[1]);

    // Loop indexBigger
    for (let i = 1; i < indexBiggest.length; i++) {
      // Jika terdapat jarak index yang lebih pendek makan jarak terpendek (shortest) diubah.
      if (Math.abs(indexBiggest[i] - indexBiggest[i+1]) < shortest){
        shortest = Math.abs(indexBiggest[i] - indexBiggest[i+1]);
      }
    }

    return shortest;
  }
}

console.log(minDistanceBetweenGreatest([ 3, 5, 2, 3, 5, 3, 5 ])); //2
console.log(minDistanceBetweenGreatest([ 1, 1, 1, 1, 1, 1 ])); //1
console.log(minDistanceBetweenGreatest([ 7, 8, 5, 2, 1, 1 ])); //0
