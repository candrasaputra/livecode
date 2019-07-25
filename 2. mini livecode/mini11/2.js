/*
  ///////////
  oneLineWars
  ///////////

  Function oneLineWars adalah sebuah function yang akan menerima sebuah parameter string
  dan kemudian akan terjadi peperangan di satu line.

  [INFO]
  K ==> 3 power
  Q ==> 2 power
  P ==> 1 power

  [EXAMPLE]
  INPUT:
  KKKQQQQPPP-PPPQQQKKKKPQK
  NOTES:
  - team kiri 20 power, team kanan 27 power
  - pertarungan akan menghabiskan yang terdekat dengan - terlebih dahulu:
    * KKKQQQQ PPP - PPP QQQKKKKPQK
    * KKKQ QQQ - QQQ KKKKPQK
    * KKKQ - KKKK PQK => 1K masih selamat dengan sisa 1 power
    * - KPQK
  
  RELEASE 0: (20 poin)
  Team kanan menang
  RELEASE 1: (40 poin)
  Team kanan menang dan unggul 7 poin atas Team kiri
  RELEASE 2: (40 poin)
  TEAM kanan menang dengan sisa pasukan KPQK

  [RULES]
  1. Hanya boleh menggunakan built in function .push(), .unshift()
*/

function oneLineWarsRelease0(war) {
  let warStat = getWarStat(war);

  return (warStat.kiri > warStat.kanan) ? 'Team kiri menang' : 'Team kanan menang';
}

console.log(oneLineWarsRelease0('KKKQQQQPPP-PPPQQQKKKKPQK'))

function oneLineWarsRelease1(war) {
  let warStat = getWarStat(war);

  return `${warStat.pemenang} menang dan unggul ${warStat.selisih} poin atas ${warStat.kalah}`;
}

console.log(oneLineWarsRelease1('KKKQQQQPPP-PPPQQQKKKKPQK'))

function oneLineWarsRelease2(war) {
  let warStat = getWarStat(war);
  let totalPower;
  if (warStat.pemenang == 'Team kanan') {
    pasukan = baliKata(warStat.pasukanMenang);
  } else {
    pasukan = warStat.pasukanMenang;
  }

  let sisaPower = 0,
    i = 0;
  let sisaPasukan = '';
  while (sisaPower <= warStat.selisih) {
    sisaPasukan += pasukan[i];
    sisaPower += power(pasukan[i]);
    i++;
  }

  return (warStat.pemenang == 'Team kanan') ? baliKata(sisaPasukan) : sisaPasukan;
}

console.log(oneLineWarsRelease2('KKKQQQQPPP-PPPQQQKKKKPQK'))


// Fungsi pembantu
function power(soldier) {
  switch (soldier) {
    case 'K':
      return 3;
    case 'Q':
      return 2;
    case 'P':
      return 1;
    default:
      return 0;
  }
}

function getWarStat(war) {
  let kiri = 0;
  let kanan = 0;

  let isKiri = true;
  for (let i = 0; i < war.length; i++) {
    if (isKiri) {
      kiri += power(war[i]);
    } else {
      kanan += power(war[i]);
    }

    if (war[i] === '-') {
      isKiri = false;
    }
  }

  let pemenang, kalah, pasukanMenang;

  if (kiri > kanan) {
    pemenang = 'Team kiri';
    kalah = 'Team kanan';
    pasukanMenang = mySplit(war, '-')[0];
  } else {
    pemenang = 'Team kanan';
    kalah = 'Team kiri';
    pasukanMenang = mySplit(war, '-')[1];
  }

  selisih = Math.abs(kiri - kanan);

  return {
    kiri,
    kanan,
    selisih,
    pemenang,
    kalah,
    pasukanMenang
  }
}

function mySplit(str, sparator) {
  let result = [];

  let tmp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sparator) {
      result.push(tmp);
      tmp = '';
    } else {
      tmp += str[i];
    }

    if (i === str.length - 1) {
      result.push(tmp);
      tmp = '';
    }
  }
  return result;
}

function baliKata(kata) {
  let kataTerbalik = '';

  for (let i = kata.length - 1; i >= 0; i--) {
    kataTerbalik += kata[i];
  }

  return kataTerbalik;
}