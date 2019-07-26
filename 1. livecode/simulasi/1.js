/*
  SELECT OPTION
  Select Option adalah sebuah fungsi untuk mengambil nilai tengah atau median dari
  array hasil kelipatan dari keynya.
  Fungsi akan menerima parameter berupa array dan key yang ingin dicari.

  EXAMPLE
  INPUT: array = [1, 2, 3, 4, 5, 6, 7], key = 2
  PROCESS: [2, 4, 6] adalah array yang merupakan kelipatan 2
  MEDIAN: 4
  OUTPUT: 4 adalah nilai median dari array di process

  INPUT: array = [1, 2, 3, 4, 5, 6], key = 1
  PROCESS: [1, 2, 3, 4, 5, 6] adalah array yang merupakan kelipatan 1
  MEDIAN: (3 + 4)/2
  OUTPUT: 3.5 adalah nilai tengah dari array di process

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), Math, dan .unshift()
  2. WAJIB menggunakan PSEUDOCODE
*/

/* 
STORE `array` with array of number
STORE `key` with number
STORE `newArr` with empty array
STORE `median` with empty

LOOP `i` equal `key` min 1 until length of `array`
  PUSH array index `i` to `newArr`
  
  SET `i` with `i` plus `key`
END LOOP

IF length `newArr` MOD 2 equal to 0 THEN
  SET median with newArray index length newArr dev 2 floor plus newArray index length newArr dev 2 min 1
ELSE IF
  SET median with newArray index length newArr dev 2 floor
END IF

IF median NOT NUMBER THEN
  DISPLAY 'There\'s not option'
ELSE
  DISPLAY `median`
END IF
*/

function selectOption(array, key) {
  let newArr = [],
    median;
  for (let i = key - 1; i < array.length;) {
    newArr.push(array[i]);

    i += key
  }

  if (newArr.length % 2 === 0) {
    median = (newArr[Math.floor((newArr.length / 2))] + newArr[Math.floor((newArr.length / 2) - 1)]) / 2;
  } else {
    median = newArr[Math.floor((newArr.length / 2))];
  }

  return (isNaN(median)) ? 'There\'s not option' : median;
}

// TEST CASE
console.log(selectOption([1, 2, 3, 4, 5, 6, 7], 2)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 1)) // 3.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 3)) // 4.5
console.log(selectOption([1, 2, 3, 4, 5, 6], 4)) // 4
console.log(selectOption([1, 2, 3, 4, 5, 6], 7)) // There's not option