/*
  ///////////////////
  FUNCTION UBAH MODUS
  ///////////////////

  Fungsi Ubah Modus adalah sebuah fungsi yang mengubah modus dengan nama yang baru

  [PROCESS]

  INPUT:
  arrayModus = ['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela']
  modusBaru = 'Dilla'
  OUTPUT:
  ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']

  [RULES]

  - Asumsi selalu ada modus dan newModus
*/

function ubahModus(arrayModus, newModus) {
  let modus = cariModus(arrayModus.slice());
  for (let i = 0; i < arrayModus.length; i++) {
    if (arrayModus[i] === modus) {
      arrayModus[i] = newModus;
    }
  }

  return arrayModus;
}

function cariModus(arr) {
  let highCounter = 0;
  let highName = 0;
  let length = arr.length;
  let tmpArr = 0;

  for (let i = 0; i < length; i++) {
    let tmpCounter = 0;
    let tmpNumber = arr[i];

    for (let j = 0; j < length; j++) {
      if (arr[i] === arr[j]) {
        tmpCounter++;
      }
    }

    tmpArr += tmpCounter;

    if (tmpCounter > highCounter) {
      highCounter = tmpCounter;
      highName = tmpNumber;
    }
  }

  if ((tmpArr % length) === 0) {
    return -1;
  } else {
    return highName;
  }
}
// TEST CASES
console.log(ubahModus(['Rina', 'Bella', 'Angela', 'Christina', 'Sophia', 'Alice', 'Angela'], 'Dilla'))
// ['Rina', 'Bella', 'Dilla', 'Christina', 'Sophia', 'Alice', 'Dilla']
console.log(ubahModus(['Anita', 'Reina', 'Anita'], 'Sora'))
// ['Sora', 'Reina', 'Sora']