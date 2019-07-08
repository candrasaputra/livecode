/*
  /////////////
  pyramidNumber
  /////////////

  pyramidNumber adalah suatu program untuk menampilkan piramida.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var max = 5

  [OUTPUT]
    1
    22
    333
    4444
    55555

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var max = 1
  [OUTPUT]
    1

  [RULES]
    1. Dilarang menggunakan built in function apapun.
    2. Asumsi nilai minimum max adalah 1.
*/

var max = 5; // silahkan beri nilai bebas
var tmp= '';
// code here

if (max <= 0) {
  console.log('max harus berisi angka bilangan positif lebih besar dari 0');
  process.exit(-1); // Stop program di nodejs
}

for (let i = 1; i <= max; i++) {
  for (let j = 0; j < i; j++) {
    tmp += i;
  }

  console.log(tmp);
  tmp = '';
}