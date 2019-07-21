/* 
=================
StandBackTriangel
=================

Standback Triangel adalah program untuk mengegenerate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya 

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga. 

[Example]
jika width = 3 maka : 

123 <-- width 
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()


*/

/*
SOLUTION 1

function standBackTriangel(width) {
  
  let titik = width - 1;
  for (let i = 0; i < width; i++) {
    let tmp = '';
    for (let j = 0; j < width; j++) {
      if (j === titik || j === width - 1) {
        tmp += '0';
      } else {
        tmp += ' ';
      }
    }
    titik -= 1;

    console.log(tmp);
  }

  let titik2 = 1;
  for (let i = 1; i < width; i++) {
    let tmp = '';
    for (let j = 0; j < width; j++) {
      if (j === titik2 || j === width - 1) {
        tmp += '0';
      } else {
        tmp += ' ';
      }
    }
    titik2 += 1;

    console.log(tmp);
  }
     
}
*/
 // SOLUTION 2 :
function standBackTriangel(width) {

  for (var i = 0; i < (width*2)-1; i++) {
    var string = "";

    for (var j = 0; j < width; j++) {
      if ( (width-1) - i === j ) {
        string = string + "o";
      } else if ( (i-width)+1 === j ) {
        string = string + "o";
      } else if ( j === (width-1) ) {
        string = string + "o";
      } else {
        string = string + " ";
      }
    }
    console.log(string);
  }

 standBackTriangel( 3 )
 standBackTriangel( 5 )
 
 /*
 input:5
  
     o 
    oo 
   o o 
  o  o 
 o   o 
  o  o 
   o o 
    oo 
     o 
 
 input:3
 
   o 
  oo 
 o o 
  oo 
   o 
 
 
 */