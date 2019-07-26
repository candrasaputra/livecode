/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/

function Heroes(hero) {
  let result = [];
  let tmp = '';
  let flag = true;
  let lastChar = '';
  for (let i = 0; i < hero.length; i++) {
    if (hero[i] === '&') {
      flag = false;
    }

    if (flag) {
      tmp += hero[i];
    }

    if (i === hero.length - 1) {
      result.push(tmp);
    }

    if (hero[i] === '&' && lastChar === '&') {
      flag = true;
      result.push(tmp);
      tmp = '';
    }
    lastChar = hero[i];
  }

  return (result.length === 0) ? 'There\'s no heroes' : result;
}

// TEST CASE
console.log(Heroes("saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"))
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(Heroes("doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar"))
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(""))
// There's no heroes