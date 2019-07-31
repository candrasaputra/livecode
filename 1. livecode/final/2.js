/*
  ///////////
  diagonAlley
  ///////////
  Function diagonAlley adalah sebuah function yang membentuk tulisan dalam bentuk diagonal dan
  membentuk bingkai kotak seperti pada test cases. function ini akan menerima parameter string, dan
  function ini berfungsi hanya untuk menampilkan.

  [EXAMPLE]
  INPUT: non
  OUTPUT: 
    n-|
    |o|
    |-n
  NOTES:
    - word membentuk diagonal
    - tepi bingkai horizontal disambung dengan -
    - tepi bingkai vertical disambung dengan |

  [RULES]
  1. Ukuran bingkai sesuai dengan panjang karakter yang diberikan.
  2. Minimal panjang karakter yang diinput adalah 3
*/

function diagonAlley(word) {
  if (word.length < 3) {
    console.log('Invalid input');
    return;
  };

  let result = '';
  let akhir = word.length - 1;
  let tanda = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (i === 0) {
        if (j === 0) {
          result += word[0]
        } else if (j === akhir) {
          result += '|'
        } else {
          result += '-'
        }
      } else if (i === akhir) {
        if (j === 0) {
          result += '|'
        } else if (j === akhir) {
          result += word[akhir]
        } else {
          result += '-'
        }
      } else {
        if (j === 0) {
          result += '|'
        } else if (j === akhir) {
          result += '|'
        } else {
          if (j === tanda) {
            result += word[tanda]
          } else {
            result += '-'
          }
        }
      }
    }

    console.log(result);
    result = '';
    tanda++;
  }
}


// TEST CASES

diagonAlley('kuroko')
/*
  k----|
  |u   |
  | r  |
  |  o |
  |   k|
  |----o
*/
console.log('')
diagonAlley('non')
/*
  n-|
  |o|
  |-n
*/
console.log('')
diagonAlley('basuke')
/*
  b----|
  |a   |
  | s  |
  |  u |
  |   k|
  |----e
*/
console.log('')
diagonAlley('no')
// Invalid input