/* 
MENCARI POSISI TEMPAT DUDUK DI RUANG SEMINAR

function findEmptySeat akan menerima array multidimensi yang menggambarkan sebuah ruangan seminar.

Symbol '*' menandakan bahwa kursi telah ditempati seseorang, dan spasi ' ' menandakan bahwa kursi tersebut kosong.

Pada posisi persis tengah ruangan terdapat juga jalur kosong vertikal yang merupakan sebuah jalan.

Carilah posisi kosong pada ruangan tersebut dan tandai dengan menempatkan symbol '#'.

Jika terdapat lebih dari 1 posisi kursi kosong, maka pilihlah posisi dengan baris paling belakang diantara kursi kosong tersebut.
Dan jika ada lebih dari 1 posisi kursi kosong di baris yang sama, maka akan dipilih posisi paling kanan

Kalau tidak ada kursi kosong yang tersedia maka tampilkan pesan "maaf tidak ada kursi kosong tersedia"


INPUT:
[
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]

PROCESS:
- jalur kosong ada di kolom dengan indeks 3
- posisi kursi kosong ada di indeks (4,1) dan (5,5)
- posisi kursi kosong paling belakang ada di indeks (5,5)

OUTPUT: simbol # ditempatkan pada posisi indeks (5,5)

[ ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '#', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'] ]

*/

function findEmptySeat(room) {
  let indexJalur = Math.floor((room[0].length - 1) / 2);
  let posi = -1
  let posj = -1

  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room.length; j++) {
      if (j != indexJalur) {
        if (room[i][j] === ' ') {
          posi = i
          posj = j
        }
      }
    }
  }

  if (posi === -1 && posj === -1) {
    return 'maaf tidak ada kursi kosong tersedia'
  } else {
    room[posi][posj] = '#'
    return room
  }
}


console.log(findEmptySeat([
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]))
/* 
[ ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', ' ', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '#', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'] ]
*/


console.log(findEmptySeat([
  ['*', '*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*', '*', ' ', '*', ' ', ' ', '*', '*', '*'],
  ['*', '*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' ', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' ', ' ', '*', '*', '*'],
  ['*', '*', ' ', '*', ' ', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' ', '*', '*', '*', '*']
]))
/*
[ [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', ' ', '*', ' ', ' ', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', ' ', '*', '*', '*' ],
  [ '*', '*', '#', '*', ' ', '*', '*', '*', '*' ],
  [ '*', '*', '*', '*', ' ', '*', '*', '*', '*' ] ]
*/

console.log(findEmptySeat([
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*'],
  ['*', '*', '*', ' ', '*', '*', '*']
]))
// maaf tidak ada kursi kosong tersedia