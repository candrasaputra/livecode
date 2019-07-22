/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikkan nilai string yang merupakan jumlah terbanyak dan terdikit.

[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah andre

[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"

[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/

/*
STORE `stringData` with string data
IF `stringData` LENGTH equal to 0 DISPLAY 'tidak ada catatan eMoney' STOP

STORE `arrKoma` with `stringData` and SPLIT BY ','
STORE `arrPerOrang` with empty array

LOOP `arrKoma`
  PUSH each `arrKoma` and SPLIT by ':'
END LOOP

STORE `besarName` with `arrPerOrang` INDEX 00
STORE `besarScore` with `arrPerOrang` INDEX 01

STORE `kecilName` with `arrPerOrang` INDEX 00
STORE `kecilScore` with `arrPerOrang` INDEX 01

STORE `i` with 0
LOOP `arrPerOrang`
  CONVERT `arrPerOrang` INDEX i1 to NUMBER 
  CONVERT `besarScore` to NUMBER
  CONVERT `kecilScore` to NUMBER

  IF `arrPerOrang[i][1]` heiger to `besarScore`
    `besarName` = arrPerOrang INDEX i0;
    `besarScore` = arrPerOrang INDEX i1;
  END IF

  IF `arrPerOrang[i][1]` lowers to `kecilScore`
    `kecilName` = arrPerOrang INDEX i0;
    `kecilScore` = arrPerOrang INDEX i1;
  END IF

  SET `i` = `i` plus 1
END LOOP 

DISPLAY `terbanyak adalah [besarName] dan terdikit adalah [kecilName]`;
*/

function eMoneySplit(stringData) {
  if (stringData.length === 0) return 'tidak ada catatan eMoney';

  let arrKoma = stringData.split(',');
  let arrPerOrang = [];
  
  for (let i = 0; i < arrKoma.length; i++) {
    arrPerOrang.push(arrKoma[i].split(':'));
  }

  let besarName = arrPerOrang[0][0];
  let besarScore = arrPerOrang[0][1];

  let kecilName = arrPerOrang[0][0];
  let kecilScore = arrPerOrang[0][1];

  for (let i = 1; i < arrPerOrang.length; i++) {
    if (Number(arrPerOrang[i][1]) > Number(besarScore)) {
      besarName = arrPerOrang[i][0];
      besarScore = arrPerOrang[i][1];
    }

    if (Number(arrPerOrang[i][1]) < Number(kecilScore)) {
      kecilName = arrPerOrang[i][0];
      kecilScore = arrPerOrang[i][1];
    }
  }

  return `terbanyak adalah ${besarName} dan terdikit adalah ${kecilName}`;
}

console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah andre
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney