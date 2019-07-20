/*
  /////////////////////
  FUNCTION TUKAR GANJIL
  /////////////////////

  Fungsi Tukar Ganjil akan mengubah besar dan kecil huruf apabila berada di index yang ganjil.

  [PROCESS]

  INPUT:
  'Dana K'
  PROCESS:
  1 => d (karena 1 ganjil)
  2 => a
  3 => N (karena 3 ganjil)
  4 => a
  5 => ' ' (diabaikan)
  6 => K
  OUTPUT:
  daNa K

  [RULES]

  - Dilarang menggunakan built in function apapun
*/

function tukarGanjil(kalimat) {
  let kecil = 'abcdefghijklmnopqrstuvwxyz';
  let besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newString = '';

  for (let i = 0; i < kalimat.length; i++) {
    if ((i+1) % 2 === 0) {
      newString += kalimat[i];
    } else {
      let isSymbol = true;

      for (let j = 0; j < 26; j++) {
        if (kalimat[i] === kecil[j]) {
          newString += besar[j];
          isSymbol = false;
          break;
        }
        
        if (kalimat[i] === besar[j]) {
          newString += kecil[j];
          isSymbol = false;
          break;
        }
      }

      if (isSymbol) {
        newString += kalimat[i];
      }
    }
  }

  return newString;
};

// TEST CASES
console.log(tukarGanjil('Hello World')); // "heLlO woRlD"
console.log(tukarGanjil('I aM aLAY')); // "i AM alAy"
console.log(tukarGanjil('My Name is Bond!!')); // "my NAmE Is BOnD!!"
console.log(tukarGanjil('IT sHOULD bE me')); // "iT shOuLd BE mE"
console.log(tukarGanjil('001-A-3-5TrdYW')); // "001-a-3-5TRdyW"