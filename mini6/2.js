/*
  ================
  Maze Runner
  ================

  [INSTRUCTIONS]
  Maze Runner adalah suatu function yang dibuat untuk mengetahui, siapa yang
  akan memenangkan perlombaan maze runner.

  [EXAMPLE]
  var persons = ['Andi', 'Betty', 'Ryan', 'Danang'];
  var tracks = ['AABBAABB', 'ABAB', 'BBBBBBAA', 'AAAB'];
  pemenangnya apabila jumlah A dan B atau sebaliknya berupa perbandingan 1 : 3
  Ryan => 2 A dan 6 B => 1 : 3
  Danang => 3 A dan 1 B => 3 : 1
  output yang diharapkan adalah ['Ryan', 'Danang'];

  [RULE]
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/

function mazeRunner(people, solves) {
  let winner = [];

  for (let i = 0; i < solves.length; i++) {
    let countA = 0;
    let countB = 0;

    for (let j = 0; j < solves[i].length; j++) {
      if (solves[i][j] === 'A') {
        countA += 1;
      }

      if (solves[i][j] === 'B') {
        countB += 1;
      }
    }

    if ((1/3) === (countA/countB) || (1/3) === (countB/countA)) {
      winner.push(people[i]);
    }
  }

  return winner;
};

// TEST CASES
var persons = ['Andi', 'Betty', 'Ryan', 'Danang'];
var tracks = ['AABBAABB', 'ABAB', 'BBBBBBAA', 'AAAB'];
console.log(mazeRunner(persons, tracks));
// [ 'Ryan', 'Danang' ]
var persons2 = ['Andi', 'Betty'];
var tracks2 = ['AAB', ''];
console.log(mazeRunner(persons2, tracks2));
// Tidak ada pemenangnya
var persons3 = ['Andi', 'Betty'];
var tracks3 = ['AAAB', ''];
console.log(mazeRunner(persons3, tracks3));
// [ 'Andi' ]