/*
  //////////////////
  SUPER SHOOT SOCCER
  //////////////////

  Function Super Shot Soccer akan menunjukkan juara dari kompetisi sepak bola. Fungsi ini
  akan menerima parameter berupa array of object, dan mengembalikkan nilai berupa object urutan juara.

  EXAMPLE
  INPUT: [
    {Name: 'Hideous', Power: 100, Club: 'Germany'},
    {Name: 'Sakuragi', Power: 84, Club: 'Japan'},
    {Name: 'Kira', Power: 40, Club: 'Korea'},
    {Name: 'Andre', Power: 59, Club: 'Egypt'}
  ]
  NOTES: 
    - Juara ditentukkan berdasarkan nilai powernya
    - Input array of object selalu ada value object orangnya
  PROCESS:
    - Germany => 100
    - Japan => 84
    - Korea => 40
    - Egypt => 59
  OUTPUT: {
    'Juara 1': 'Germany',
    'Juara 2': 'Japan',
    'Juara 3': 'Egypt',
    'Juara 4': 'Korea'
  }

  RULES:
    - Hanya boleh menggunakan built in function .push()
    - Asumsi setiap club tidak akan memiliki lebih dari 1 pemain
    - Asumsi jumlah power dari setiap club berbeda
*/

function superShootSoccer(players) {
  let result = {};
  let tmp = {};
  for (let i = 0; i < players.length; i++) {
    tmp[players[i].Power] = {
      Name: players[i].Name,
      Club: players[i].Club
    }
  }

  let keyTmp = mySort(Object.keys(tmp));
  let x = 1;
  for (let i = 0; i < keyTmp.length; i++) {
    result['Juara ' + x] = tmp['' + keyTmp[i]].Club

    x++;
  }
  return result;
}

function mySort(array) {
  let flag = true;
  while (flag) {
    flag = false;
    for (let i = 0; i < array.length; i++) {
      if (Number(array[i + 1]) > Number(array[i])) {
        let hold = array[i]
        array[i] = array[i + 1];
        array[i + 1] = hold;
        flag = true;
      }
    }
  }
  return array;
}

console.log(superShootSoccer([{
    Name: 'Hideous',
    Power: 100,
    Club: 'Germany'
  },
  {
    Name: 'Sakuragi',
    Power: 84,
    Club: 'Japan'
  },
  {
    Name: 'Kira',
    Power: 40,
    Club: 'Korea'
  },
  {
    Name: 'Andre',
    Power: 59,
    Club: 'Egypt'
  }
]))
// { 'Juara 1': 'Germany',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Egypt',
//   'Juara 4': 'Korea' }

console.log(superShootSoccer([{
    Name: 'Hideous',
    Power: 20,
    Club: 'Germany'
  },
  {
    Name: 'Sakuragi',
    Power: 77,
    Club: 'Japan'
  },
  {
    Name: 'Kira',
    Power: 41,
    Club: 'Korea'
  },
  {
    Name: 'Andre',
    Power: 84,
    Club: 'Egypt'
  }
]))
// { 'Juara 1': 'Egypt',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Korea',
//   'Juara 4': 'Germany' }