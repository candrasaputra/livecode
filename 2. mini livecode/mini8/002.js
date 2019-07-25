/*
    ==================
    Range Prime Number
    ==================

    [INSTRUCTION]
    jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
    yang mana prime[0] = 2; 
    maka :
    
    [EXAMPLE]
    jika 10 angka prime pertama : [2,3,5,7,11,13,17,19,23,29,31]
    jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]
    
    diberikan 2 parameter "start","finish"
    "start" yaitu index angka prime yang ditentukan.  
    "finish" yaitu batas index angka prime 

    hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array

*/

function rangePrimeNumber(start, finish) {
    let newArr = [];
    let getPrima = generetPrime(finish);
    console.log(getPrima);
    for (let i = 0; i < getPrima.length; i++) {
        if (i >= start - 1 && i < finish) {
            newArr.push(getPrima[i]);
        }
    }

    return newArr
}

function generetPrime(num) {
    let newArr = [];

    for (let i = 0; i < num * 5; i++) {
        if (isPrima(i)) {
            newArr.push(i);
        }
    }

    return newArr;
}

function isPrima(angka) {
    if (angka <= 1) {
        return false;
    }

    for (let i = 2; i < angka; i++) {
        if ((angka % i) == 0) {
            return false;
        }
    }

    return true;
}

console.log(rangePrimeNumber(5, 10))
// output 
// [11,13,17,19,23,29]

console.log(rangePrimeNumber(4, 9));
// output [7,11,13,17,19,23]