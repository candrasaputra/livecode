/*
=======================
INVENTARIS KERAN MASJID
=======================

[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string , 
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu

[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output : 
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'

input: 'XX?XX?XX^XX'
output: 
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'

input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'

input : 'XX?XX?XX'
output :
'Semua keran rusak'

[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr

// YOUR PSEUDOCODE/ALGORITHM HERE
STORE OBJEK `keran` KEY `jumlahBaik` with 0
STORE OBJEK `keran` KEY `jumlahRusak` with 0
STORE OBJEK `keran` KEY `baik` with empty array
STORE OBJEK `keran` KEY `rusak` with empty array
STORE `no` with 1
STORE `str` with any string

LOOP `i` equal 0 until length `str`
    IF `str` INDEX `i` equal to '^' THEN
        `keran` KEY `jumlahBaik` ADD 1
        `keran` KEY `baik` PUSH `no`
    END IF
    
    IF `str` INDEX `i` equal to '?' THEN
        `keran` KEY `jumlahRusak` ADD 1
        `keran` KEY `rusak` PUSH `no`
    END IF
    
    IF `str` INDEX `i` equal to 'X' THEN
        SET `x` with `x` plus 1
    END IF

    SET `i` with `i` plus 1
END LOOP

    IF `keran` KEY `jumlahBaik` hight 0 AND `keran` KEY `jumlahRusak`
        RETURN 'Semua keran berjalan dengan baik'
    ELSE IF `keran` KEY `jumlahRusak` > 0 && `keran` KEY `jumlahBaik` === 0 THEN
        RETURN 'Semua keran rusak'
    ELSE IF `keran` KEY `jumlahRusak` === 0 && `keran` KEY `jumlahBaik` === 0 THEN
        RETURN 'Tidak ada keran'
    ELSE 
        RETURN `terdapat [`keran` KEY `jumlahBaik`] `keran` yang berjalan nomor([`keran` KEY `baik`]) , dan [`keran` KEY `rusak`] `keran` rusak nomor([`keran` KEY `jumlahRusak`])`
    }
*/

function inventarisKeran(str) {
    let keran = {
        jumlahBaik: 0,
        jumlahRusak: 0,
        baik: [],
        rusak: []
    }

    let no = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '^') {
            keran.jumlahBaik += 1;
            keran.baik.push(no);
        }

        if (str[i] === '?') {
            keran.jumlahRusak += 1;
            keran.rusak.push(no);
        }

        if (str[i] != 'X') {
            no++;
        }
    }

    if (keran.jumlahBaik > 0 && keran.jumlahRusak === 0) {
        return 'Semua keran berjalan dengan baik'
    } else if (keran.jumlahRusak > 0 && keran.jumlahBaik === 0) {
        return 'Semua keran rusak'
    } else if (keran.jumlahRusak === 0 && keran.jumlahBaik === 0) {
        return 'Tidak ada keran'
    } else {
        return `terdapat ${keran.jumlahBaik} keran yang berjalan nomor(${keran.baik}) , dan ${keran.rusak} keran rusak nomor(${keran.jumlahRusak})`
    }
}

console.log(inventarisKeran('XX^XX^XX^XX?XX^XX'));
// terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)
console.log(inventarisKeran('XX?XX?XX^XX'))
// terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)
console.log(inventarisKeran('XX^XX^XX'));
// Semua keran berjalan dengan baik
console.log(inventarisKeran('XX?XX?XX'));
// Semua keran rusak