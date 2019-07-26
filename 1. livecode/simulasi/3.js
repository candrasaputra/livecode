/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////

  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.  

  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2 
  - o dihitung 1
  GUIDE: 
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4
  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  - Urutan pemenang [OOOO, OOo, ooOO, o]
  OUTPUT:
  Juara Ke-2 adalah tim OOo

  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama
*/

function guildWars(guilds) {
  let poinGuilds = getJumlah(guilds);

  let pemenangKiri = {},
    pemenangKanan = {};

  if (poinGuilds[0] > poinGuilds[1]) {
    pemenangKiri.index = 0;
    pemenangKiri.point = poinGuilds[0];
  } else {
    pemenangKiri.index = 1;
    pemenangKiri.point = poinGuilds[1];
  }

  if (poinGuilds[2] > poinGuilds[3]) {
    pemenangKanan.index = 2;
    pemenangKanan.point = poinGuilds[2];
  } else {
    pemenangKanan.index = 3;
    pemenangKanan.point = poinGuilds[3];
  }

  return (pemenangKiri.point > pemenangKanan.point) ? 'Juara ke-2 adalah tim ' + guilds[pemenangKanan.index] : 'Juara ke-2 adalah tim ' + guilds[pemenangKiri.index];
}

function getJumlah(guilds) {
  let result = [0, 0, 0, 0];

  for (let i = 0; i < guilds.length; i++) {

    for (let j = 0; j < guilds[i].length; j++) {
      if (guilds[i][j] === 'O') {
        result[i] += 2;
      } else {
        result[i] += 1;
      }
    }
  }

  return result;
}

console.log(guildWars(['OOOO', 'ooOO', 'o', 'OOo']))
// Juara ke-2 adalah tim OOo
console.log(guildWars(['OO', 'OOO', 'ooOOO', 'OOOo']))
// Juara ke-2 adalah tim OOO
console.log(guildWars(['ooo', 'oooo', 'oo', 'o']))
// Juara ke-2 adalah tim oo