/*
  ////////
  LionWars
  ////////

  Function LionWars adalah suatu function yang akan menerima sebuah parameter string
  dan mengembalikkan bentukkan berdasarkan beberapa release.

  [EXAMPLE]
  INPUT: 'Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'

  RELEASE 0 (20 point)
  OUTPUT: [{ name: Raza }, { name: Sylvana }, { name: Anduin }]
  RELEASE 1 (20 point)
  OUTPUT: [{ name: Raza, power: 1000 }, { name: Sylvana, power: 800 }, { name: Anduin, power: 2000 }]
  RELEASE 2 (20 point)
  OUTPUT: [{ name: Raza, power: 1000, healthPoint: 2000 }, { name: Sylvana, power: 800, healthPoint: 500 }, { name: Anduin, power: 2000, healthPoint: 4000 }]
  RELEASE 3 (20 point)
  OUTPUT: [
    { name: Raza, power: 1000, healthPoint: 2000, ability: Bash },
    { name: Sylvana, power: 800, healthPoint: 500, ability: Heal },
    { name: Anduin, power: 2000, healthPoint: 4000, ability: Paladin }]
  RELEASE 4 (20 point)
  The strongest power is Anduin and the lowest healthPoint is Sylvana

  [RULES]
  1. Hanya boleh menggunakan built in function .push(), .unshift()
*/

function LionWarsRelease0(info) {
  let lionWar = [];

  let flag = true;
  let tmp = '';
  for (let i = 0; i < info.length; i++) {
    if (info[i] === ':') {
      lionWar.push({
        name: tmp
      });
      tmp = '';
      flag = false;
    }

    if (flag) {
      tmp += info[i];
    }

    if (info[i] === ',') {
      flag = true;
    }
  }

  return lionWar;
}

// console.log(LionWarsRelease0('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease1(info) {
  let lionWar = LionWarsRelease0(info);
  let splitKoma = mySplit(info, ',');

  for (let i = 0; i < splitKoma.length; i++) {
    let splitStrip = mySplit(splitKoma[i], '-');

    lionWar[i].power = Number(splitStrip[1]);
  }
  return lionWar
}

console.log(LionWarsRelease1('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease2(info) {
  let lionWar = LionWarsRelease1(info);
  let splitKoma = mySplit(info, ',');

  for (let i = 0; i < splitKoma.length; i++) {
    let splitStrip = mySplit(splitKoma[i], '-');

    lionWar[i].healthPoint = Number(splitStrip[2]);
  }
  return lionWar
}

console.log(LionWarsRelease2('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease3(info) {
  let lionWar = LionWarsRelease2(info);
  let splitKoma = mySplit(info, ',');

  for (let i = 0; i < splitKoma.length; i++) {
    let splitStrip = mySplit(splitKoma[i], '-');

    lionWar[i].ability = splitStrip[3];
  }
  return lionWar
}

console.log(LionWarsRelease3('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

function LionWarsRelease4(info) {
  let lionWar = LionWarsRelease3(info);

  let strongestName = lionWar[0].name;
  let strongest = lionWar[0].power;
  let lowestName = lionWar[0].name;
  let lowest = lionWar[0].healthPoint;

  for (let i = 1; i < lionWar.length; i++) {
    if (lionWar[i].power > strongest) {
      strongest = lionWar[i].power;
      strongestName = lionWar[i].name;
    }

    if (lionWar[i].healthPoint < lowest) {
      lowest = lionWar[i].healthPoint;
      lowestName = lionWar[i].name;
    }
  }

  return `The strongest power is ${strongestName} and the lowest healthPoint is ${lowestName}`;
}

console.log(LionWarsRelease4('Raza:Knight-1000-2000-Bash,Sylvana:Cleric-800-500-Heal,Anduin:Paladin-2000-4000-Taunt'));

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