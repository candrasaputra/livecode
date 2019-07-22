/**
=======================================
Array of Objects  Mastery: Invoke Spell
=======================================

[INSTRUKSI]

Kael the Invoker memiliki 3 orb yaitu Quas (q), Wex (w), dan Exort (e). Jika orb ini
dikombinasikan maka akan menghasilkan salah satu dari 10 spell yang berbeda!

Diberikan function invokeSpell yang menerima parameter input, dan spell apa saja yang
dimiliki oleh Invoker sudah disediakan dalam bentuk array.

Function akan mengembalikan nama spell dari input yang dimasukkan oleh user, ex:
- input = 'eeq', output = 'Forge Spirit' (karena q = 1, w = 0, e = 2)
- input = 'www', output = 'EMP' (karena q = 0, w = 3, e = 0)
- input = 'wqz', output = 'Combination does not exist' (karena kombinasi tidak ditemukan)

NOTE:
Meskipun input terbalik atau tidak urut (ex: 'qwe', 'ewq', 'weq'), maka akan tetap mengeluarkan
spell yang sama!

RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!

*/

function invokeSpell (input) {
  const spells = [
      { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
      { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
      { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
      { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
      { q: 1, w: 2, e: 0, spellName: 'Tornado' },
      { q: 0, w: 3, e: 0, spellName: 'EMP' },
      { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
      { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
      { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
      { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
  ];

  // Tampung banyaknya masing-masing orb kedalam array.
  let numberOrb = getNumberOrb(input);

  // loop spells
  for (let i = 0; i < spells.length; i++) {
    // Pengecekan apakah pola dari inputan sama dengan kamus spell, jika ya return nama spell
    if (spells[i].q === numberOrb[0] && spells[i].w === numberOrb[1] && spells[i].e === numberOrb[2]) {
      return spells[i].spellName;
    }
  }

  // jika tidak ada di kamus spell
  return 'Combination does not exist';
}

// Fungsi untuk mendapatkan banyaknya masing - masing ORB dari string
function getNumberOrb(string) {
  // Index 0 merukan q, index 1 merupakan w, index 2 merupakan e
  let result = [0, 0, 0];

  // Loop sebanyak string
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'q') {
      result[0] += 1;
    }

    if (string[i] === 'w') {
      result[1] += 1;
    }

    if (string[i] === 'e') {
      result[2] += 1;
    }
  }

  return result;
}

console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist
