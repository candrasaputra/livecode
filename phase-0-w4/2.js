/*
  /////////////////
  americanGotTalent
  /////////////////

  Function americanGotTalent akan menentukkan juara serta jumlah votingnya dari suatu array.
  Function akan menerima 1 parameter yaitu:
    - votes adalah kumpulan string nama, tipe datanya array.
  Function ini akan mengembalikkan nilai string dalam format:
    - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
    - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];

  [PROCESS]
    terdapat 2 voting Lee Min Ho yang paling banyak.

  [OUTPUT]
    Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];

  [PROCESS]
    tidak terdapat yang terbanyak.

  [OUTPUT]
    Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
  
  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function americanGotTalent(votes) {
  votes.sort();

  let groupName = [];
  let tmpEachName = [];
  let tmpName = votes[0];
  for (let i = 0; i < votes.length; i++) {
    if (tmpName === votes[i]) {
      tmpEachName.push(votes[i]);
    }

    if (tmpName !== votes[i]) {
      groupName.push(tmpEachName);
      tmpEachName = [];
      tmpEachName.push(votes[i]);
      tmpName = votes[i];
    }

    if (i === votes.length-1) {
      groupName.push(tmpEachName);
    }
  }
  
  let hightName = groupName[0][0];
  let hightLength = groupName[0].length;
  let hightCounter = 0;
  for (let i = 0; i < groupName.length; i++) {
    if (groupName[i].length === hightLength) {
      hightCounter++;
    }

    if (groupName[i].length > hightLength) {
      hightName = groupName[i][0];
      hightLength = groupName[i].length;
      hightCounter = 1;
    }
  }

  if (hightCounter === 1) {
    return 'Selamat juaranya adalah '+hightName+', dengan total votes yang diterima '+hightLength;
  } else {
    return 'Mohon maaf juara tidak bisa ditentukkan dalam minggu ini';
  }
}

console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho']));
// Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho']));
// Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(americanGotTalent(['Lee Min Ho', 'Arby', 'Arby']));
// Selamat juaranya adalah Arby, dengan total votes yang diterima 2
