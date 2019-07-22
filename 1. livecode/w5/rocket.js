/*
==========
rememberMe
==========
[INSTRUCTIONS]
rememberMe adalah sebuah fungsi yang akan menerima parameter dengan tipe data array 
kemudian mengembalikkan nilai string.

[EXAMPLE]
INPUT: ['re', 'em', 'b', 'erm', 'em']
PROCESS: 
  're' diambil untuk melengkapi rememberme => memberme
  'em' diambil untuk melengkapi memberme => mberme
  'b' diambil untuk melengkapi mberme => merme
  'erm' diambil untuk melengkapi merme => me
  'em' diambil untuk melengkapi me => true
OUTPUT: completed

INPUT: ['rembrm']
PROCESS:
  'rembr' diambil untuk melengkapi rememberme => ememe
OUTPUT: ememe

[RULES]
  1. hanya boleh menggunakan built in function .push(), .unshift()
  2. kata yang dicari adalah rememberme
*/


function rememberMe(lyrics) {
  let rememberme = ['r','e','m','e','m','b','e','r','m','e'];
  let lyricsToString = arrayToString(lyrics);

  for (let i = 0; i < lyricsToString.length; i++) {
    for (let j = 0; j < rememberme.length; j++) {
      if (lyricsToString[i] === rememberme[j]) {
        rememberme = removeByIndex(rememberme, j);
        break;
      }
    }
  }

  return (arrayToString(rememberme) === '') ? 'completed' : arrayToString(rememberme);
}

function removeByIndex(array, index){
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (i != index) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

function arrayToString(arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string += arr[i];
  }

  return string;
}

console.log(rememberMe(['re', 'em', 'b', 'erm', 'em'])) //completed
console.log(rememberMe(['rembr'])) //ememe
console.log(rememberMe(['zoqoqo', 'zeieie', 'azzreqwm', 'fdasb', 'ravae', 'rera', 'mmmmm'])) //completed