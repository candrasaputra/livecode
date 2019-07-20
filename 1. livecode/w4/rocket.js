/*
  ///////////////////
  richestGroupDynamic
  ///////////////////

  Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
  Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
  Function ini akan mengembalikkan nilai string.
  
  ----------
  EXAMPLE 1:
  ----------
  [INPUT]
    var groups = [
      ['A', 'B', 'C'],
      ['A', 'A', 'D', 'D', 'D']
    ]

  [PROCESS]
  Pada array ['A', 'B', 'C'] tidak ada yang unggul.
  Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.

  [OUTPUT]
    [ 'D' ]

  ----------
  EXAMPLE 2:
  ----------
  [INPUT]
    var groups = [
      ['Z', 'Z'],
      ['B']
    ]

  [PROCESS]
  Pada array ['Z', 'Z'] Z unggul.
  Pada array ['B'] B unggul.

  [OUTPUT]
    [ 'Z', 'B' ]

  [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/


function richestGroupDynamic(groups) {
  
  let done = [];
  let final = [];
  let subFinal = [];
  for (let i = 0; i < groups.length; i++) {
    let tmp = groups[i][0];
    let tmpArr = [];
    for (let j = 0; j < groups[i].length; j++) {
      if (tmp === groups[i][j]) {
        tmpArr.push(groups[i][j]);
      } 
      
      if (tmp !== groups[i][j]) {
        subFinal.push(tmpArr);
        tmpArr = [];
        tmpArr.push(groups[i][j]);
        tmp = groups[i][j];
      }

      if (j === groups[i].length - 1) {
        subFinal.push(tmpArr);
      }
    }
    final.push(subFinal);
    subFinal = [];
  }
  
  for (let i = 0; i < final.length; i++) {
    let hightLength = final[i][0].length;
    let hightIndex = 0;
    let count = 0;

    for (let j = 0; j < final[i].length; j++) {
      if (final[i][j].length === hightLength) {
        count++;
      }

      if (final[i][j].length > hightLength) {
        hightLength = final[i][j].length;
        hightIndex = j;
        count = 1;
      }
    }

    if (count === 1) {
      done.push(final[i][hightIndex][0]);
    }
  }

  return done;
}

console.log(richestGroupDynamic([
  ['A', 'B', 'C'],
  ['A', 'A', 'D', 'D', 'D',]
]))
// [ 'D' ]

console.log(richestGroupDynamic([
  ['A', 'A'],
  ['B']
]))
// [ 'A', 'B' ]

console.log(richestGroupDynamic([
  ['Z', 'Z'],
  ['B', 'X']
]))
// [ 'Z' ]

console.log(richestGroupDynamic([]))
// []