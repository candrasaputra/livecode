/*
  ///////////////////////////
  FUNCTION PSEUDOCODE MASTERY
  ///////////////////////////

  Fungsi Pseudocode Mastery adalah fungsi yang mengharuskan penggunanya membuat mampu pseudocode

  [PROCESS]

  INPUT:
  [1, 2, 3, 4, 5]
  PROCESS:
  bila index ganjil dikali 2
  bila index genap dikali 3
  [1 * 2, 2 * 3, 3 * 2, 4 * 3, 5 * 2]
  OUTPUT:
  [2, 6, 6, 12, 10]

  [RULES]
  - WAJIB menggunakan PSEUDOCODE atau nilai 0
*/

/* 
PSEUDOCODE
STORE `array` WITH `array` of number
STORE `i` with 0
LOOP `array`  THEN 
  IF `i`MOD 2 equal 0
    SET `array` INDEX `i` with `array` INDEX `i` time 2
  ELSE
    SET `array` INDEX `i` with `array` INDEX `i` time 3
  END IF
  
  SET `i` with `i` plus 1
END LOOP
*/

function pseudocodeMastery(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      array[i] = array[i] * 2;
    } else {
      array[i] = array[i] * 3;
    }
  }

  return array;
}

// TEST CASES
console.log(pseudocodeMastery([1, 2, 3, 4, 5]))
// [2, 6, 6, 12, 10]