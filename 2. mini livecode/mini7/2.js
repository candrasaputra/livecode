/*
  ======================
  MOBA LEGEND BEST POWER
  ======================

  mobaLegendBestPower adlaah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi nama-nama hero mobile legend
    - terdapat bonus combination yang merupakan bonus power untuk kombinasi hero

  output dari function ini adalah sebuah number total power terbesar
  
  [NOTES]
  - intinya menjumlahkan semua power ditambah juga dengan bonusCombination bila ada yang sesuai
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
*/

function mobaLegendBestPower(heroes) {
  var bonusCombination = {
    'Zi Long+Layla': 300,
    'Layla+Kagura': 400
  }

  let totalPower = getTotalPower(heroes);
  let bonusPower = getBonusCombination(heroes, bonusCombination);

  return totalPower + bonusPower;
}

function getBonusCombination(heroes, combination) {
  let powerBonus = 0;

  for (let i = 0; i < heroes.length; i++) {
    for (let j = 0; j < heroes.length; j++) {
      if (i != j) {
        let kombinasi = heroes[i].name+'+'+heroes[j].name;
        if (combination[kombinasi] != undefined) {
          powerBonus += combination[kombinasi];
        }
      }
    }
  }

  return powerBonus;
}

function getTotalPower(arr) {
  let power = 0;
  for (let i = 0; i < arr.length; i++) {
    power += arr[i].power;
  }

  return power;
}

console.log(mobaLegendBestPower([
  {
    name: 'Zi Long',
    power: 2000
  },
  {
    name: 'Layla',
    power: 1800
  },
  {
    name: 'Kagura',
    power: 2500
  }
])) // 7000

console.log(mobaLegendBestPower([
  {
    name: 'Zi Long',
    power: 2000
  },
  {
    name: 'Layla',
    power: 1800
  }
])) // 4100