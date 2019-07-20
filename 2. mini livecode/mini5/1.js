/*
  /////////////////////
  FUNCTION MEDIAN GENAP
  /////////////////////

  Fungsi Median Genap adalah mencari nilai median yang berupa genap di array.

  [PROCESS]

  INPUT:
  [1, 3, 4, 5, 6, 7]
  PROCESS:
  genap = [4, 6]
  median = 5
  OUTPUT:
  5

  [RULES]

  - Dilarang menggunakan built in function selain .push()
*/

function medianGenap(arr) {
  let indexGenap = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      indexGenap.push(i);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i >= indexGenap[0] && i <= indexGenap[indexGenap.length-1]){
      newArr.push(arr[i]);
    }
  }

  // cari median
  let median = newArr.length / 2;
  median = Math.floor(median);

  return (newArr[median] === undefined) ? 'Tidak ada median' : newArr[median];
};

// TEST CASES
console.log(medianGenap([1, 2, 3, 4, 5])); // 3
console.log(medianGenap([1, 3, 4, 10, 12, 13])); // 10
console.log(medianGenap([3, 4, 7, 6, 10])); // 6
console.log(medianGenap([1, 3, 3])); // Tidak ada median
console.log(medianGenap([7, 7, 8, 8])); // 8