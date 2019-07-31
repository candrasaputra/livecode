/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
	Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
		good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
    bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

/* 
Pseudocode
STORE obj with empty object
STORE totalPlayer with 0
STORE newComposition with empty array
STORE tmp with empty string
STORE good with true
STORE badHero with empty string
STORE listHerro with array 'ranger', 'mage', 'tank', 'warrior', 'assassin'

LOOP i with 0 i UNTIL length of composition) {
  IF composition INDEX i equal to , THEN
    PUSH newComposition with tmp
    SET tmp with empty string
  ELSE
    SET tmp with tmp plus composition INDEX i
  END IF

  IF i equal to length of composition min 1) THEN
    PUSH newComposition with tmp
    SET tmp with empty string
  END IF
END LOOP

LOOP i with 0 UNTIL length of composition) {
  SET totalPlayer with totalPlayer plus 1

  IF obj KEY newComposition INDEX i equal to undefined THEN
    SET obj KEY newComposition INDEX i with 0
  END IF

  SET obj KEY newComposition INDEX i with obj KEY newComposition INDEX i plus 1
END LOOP


LOOP k IN obj
  STORE validHero with false
  LOOP i with 0 i UNTIL length of listHerro
    IF k equal listHerro index i THEN
      SET validHero with true
    END IF
  END LOOP

  IF validHero equal to false THEN
    DISPLAY 'god is not on the pick list'
    STOP
  END IF

  IF obj KEY k hight to 2 THEN
    SET good with false
    SET badHero with k
  END IF
END LOOP

IF totalPlayer not equal to 5 THEN
  DISPLAY 'not sufficient players'
  STOP
END IF

IF good equal true THEN
  DISPLAY 'good pick'
  STOP
ELSE
  DISPLAY `bad pick too many [badHero]`
  STOP
}

*/
function heroPick(composition) {
  let obj = {}
  let totalPlayer = 0
  let newComposition = [];
  let tmp = '';
  let good = true;
  let badHero = '';
  let listHerro = ['ranger', 'mage', 'tank', 'warrior', 'assassin'];

  for (let i = 0; i < composition.length; i++) {
    if (composition[i] === ',') {
      newComposition.push(tmp);
      tmp = '';
    } else {
      tmp += composition[i];
    }

    if (i === composition.length - 1) {
      newComposition.push(tmp);
      tmp = '';
    }
  }

  for (let i = 0; i < newComposition.length; i++) {
    totalPlayer++;

    if (obj[newComposition[i]] === undefined) {
      obj[newComposition[i]] = 0;
    }

    obj[newComposition[i]] += 1;
  }


  for (let k in obj) {
    for (let i = 0; i < listHerro.length; i++) {
      if (notInArray(listHerro, k) === false) {
        return k + ' is not on the pick list'
      }
    }

    if (obj[k] > 2) {
      good = false;
      badHero = k;
    }
  }

  if (totalPlayer != 5) {
    return 'not sufficient players';
  }
  if (good) {
    return 'good pick'
  } else {
    return 'bad pick too many ' + badHero;
  }
}

function notInArray(array, key) {
  let status = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      status = true;
      break;
    }
  }

  return status;
}

// Test case
console.log(heroPick('ranger,ranger,mage,tank,warrior')) // good pick
console.log(heroPick('mage,mage,tank,mage,warrior')) // bad pick too many mage
console.log(heroPick('mage,mage,tank,mage')) // not sufficient players
console.log(heroPick('mage,mage,god,mage,mage')) // god is not on the pick list