/*
  //////////////////////
  FUNCTION MULTIPLE BY 3
  //////////////////////

  Fungsi Multiple By 3 akan mengalikan angka-angka dengan angka di 3 setelahnya,
  kemudian akan menjumlahkan angka tersebut ketika ganjil

  [PROCESS]

  INPUT:
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  PROCESS:
  1 * 5 = 5 (ganjil)
  2 * 6 = 12 (genap)
  3 * 7 = 21 (ganjil)
  4 * 8 = 32 (genap)
  5 * 9 = 45 (ganjil)

  5 + 21 + 45 = 71
  OUTPUT:
  71

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function multipleBy3 (array) {
  let arrMultiply = [];

  for (let i = 0; i < array.length; i++) {
    if (i + 4 !== array.length-1) {
      arrMultiply.push(array[i] * array[i+4]);
    } else {
      arrMultiply.push(array[i] * array[i+4]);
      break;
    }
  }

  let sum = 0;
  // ganjil
  for (let i = 0; i < arrMultiply.length; i++) {
    if ((i+1) % 2 !== 0) {
      sum += arrMultiply[i];
    }
  }

  return sum;
};

console.log(multipleBy3([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 71

// 1 * 5 = 5 ganjil
// 2 * 6 = 12
// 3 * 7 = 21 ganjil
// 4 * 8 = 32
// 5 * 9 = 45 ganjil