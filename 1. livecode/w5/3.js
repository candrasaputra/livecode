/*
===========
lotusRealms
===========
[INSTRUCTIONS]
lotusRealms adalah sebuah fungsi yang menerima parameter berupa array
of objects dan akan mengembalikkan info siapa saja yang akan bertahan dari perang.

[EXAMPLE]
INPUT: [
  { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
  { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
  { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]
PROCESS: 
  1. Serpent menyerang Samurai sebesar 300 => health Samurai menjadi 200
  2. Samurai menyerang Wolf sebasar 400 => health Wolf menjadi 200
  3. Wolf menyerang Serpent sebesar 300 => health Serpent menjadi 700
  4. Lotus menyerang Wolf sebsar 2000 => health Wolf menjadi -1800 dan Wolf gugur dalam realms
OUTPUT: [
  { clan: 'Serpent', totalHealth: 700 },
  { clan: 'Samurai', totalHealth: 200 },
  { clan: 'Lotus', totalHealth: 3000 }
]

[RULES]
  1. Diasumsikan pemenang akan selalu ada, dan clans tidak pernah kosong.
  2. Dilarang menggunakan built in function .filter(), .map(), .forEach(), dan .reduce()
*/

function lotusRealms(clans) {
  let newClan = new Object();
  let final = [];

  for (let i = 0; i < clans.length; i++) {
    if (newClan[clans.clan] === undefined) {
      newClan[clans[i].clan] = {};
      newClan[clans[i].clan].name = clans[i].clan;
      newClan[clans[i].clan].health = clans[i].totalHealth;
    }
  }

  for (let i = 0; i < clans.length; i++) {
    newClan[clans[i].attack].health -= clans[i].totalAttack;
  }

  for (let i in newClan) {
    if (newClan[i].health > 0) {
      final.push({clan: i, totalHealth:newClan[i].health});
    }
  }

  return final;
}

console.log(lotusRealms([
  { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
  { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
  { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]))
/*
  [
    { clan: 'Serpent', totalHealth: 700 },
    { clan: 'Samurai', totalHealth: 200 },
    { clan: 'Lotus', totalHealth: 3000 }
  ]
*/

console.log(lotusRealms([
  { clan: 'Wolf', attack: 'Wolf', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]))
/*
  [ { clan: 'Lotus', totalHealth: 3000 } ]  
*/