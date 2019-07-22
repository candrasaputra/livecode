/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikkan nilai string yang merupakan pemenang perlombaan.

[EXAMPLE]
INPUT: [
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]

PROCESS: 
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.

OUTPUT: pemenangnya adalah toni

[NOTES]
  1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
  2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya

[RULES]
  1. Dilarang menggunakan built in function .sort()
*/

function warOfFun(informations) {
  if (informations.length === 0) return 'mohon maaf tidak ada pemenangnya';
  let tmpScore = [];

  for (let i = 0; i < informations.length; i++) {
    tmpScore.push(0);
  }

  for (let i = 1; i < informations.length; i++) {
    for (let j = 0; j < informations[i].length; j++) {
      if (informations[i][j] === 'fun') {
        tmpScore[j] += 1;
      }
    }
  }

  let scoreTertinggi = tmpScore[0];
  let indexTertinggi = 0;
  let total = 0;
  for (let i = 1; i < tmpScore.length; i++) {
    total += tmpScore[i];
    if (scoreTertinggi < tmpScore[i]) {
      scoreTertinggi = tmpScore[i];
      indexTertinggi = i;
    }
  }

  if (total === 0){
    return 'mohon maaf tidak ada pemenangnya';
  } else {
    return `pemenangnya adalah ${informations[0][indexTertinggi]}`;
  }
}

console.log(warOfFun([
  ['andre', 'toni', 'toti'],
  ['risk', 'fun', 'go'],
  ['humble', 'psyhco', 'strong']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni', 'toti', 'tito'],
  ['fun', 'fun', 'fun'],
  ['fun', 'fun'],
  ['nonfun', 'fun', 'fun', 'fun']
]))
// pemenangnya adalah toni

console.log(warOfFun([
  ['andre', 'toni'],
  ['risk', 'go'],
  ['humble', 'strong']
]))
// mohon maaf tidak ada pemenangnya

console.log(warOfFun([]))
// mohon maaf tidak ada pemenangnya