/* function calcAljebraAdi(stringAlJebra) {
    let arr = stringAlJebra.split(' ');
    let total = 0;
    let aljabar = {};
    for (let i = 0; i < arr.length; i++) {
        let splitMe = arr[i].split('=');
        total += Number(splitMe[1]);

        let numberString = ''; //2
        let satuan = '';
        for (let j = 0; j < arr[i].length; j++) {
            if (isNaN(arr[i][j]) == false) {
                numberString += arr[i][j];
            } else {
                if (arr[i][j] == '+' || arr[i][j] == '='){
                    satuan = arr[i][j-1];
                    if (aljabar[satuan] === undefined) {
                        aljabar[satuan] = Number(numberString);
                    } else {
                        aljabar[satuan] += Number(numberString);
                    }

                    numberString = '';
                }
            }
            
            if (arr[i][j] == '=') {
            }
        }
    }
    return aljabar;
} */

function calcAljebraAdi(stringAlJebra) {
    let arrBagiDua = stringAlJebra.split(' ');
    let total = [];
    let arrBagian = [{}, {}];

    for (let i = 0; i < arrBagiDua.length; i++) {
        let splitMe = arrBagiDua[i].split('=');
        total[i] = Number(splitMe[1]);

        let numberString = '';
        let satuan = '';
        for (let j = 0; j < arrBagiDua[i].length; j++) {
            if (isNaN(arrBagiDua[i][j]) == false) {
                numberString += arrBagiDua[i][j];
            } else {
                if (arrBagiDua[i][j] == '+' || arrBagiDua[i][j] == '='){
                    satuan = arrBagiDua[i][j-1];
                    if (arrBagian[i][satuan] === undefined) {
                        arrBagian[i][satuan] = Number(numberString);
                        numberString = '';
                    }
                }
            }
        }
    }

    let penyebut = Object.keys(arrBagian[0]);
    
    let newArr = [[0,0],[0,0]];
    let newTotal = [0, 0];
    
    newArr[0][0] = arrBagian[1][penyebut[0]] * arrBagian[0][penyebut[0]];
    newArr[0][1] = arrBagian[1][penyebut[0]] * arrBagian[0][penyebut[1]];

    newArr[1][0] = arrBagian[0][penyebut[0]] * arrBagian[1][penyebut[0]];
    newArr[1][1] = arrBagian[0][penyebut[0]] * arrBagian[1][penyebut[1]];

    newTotal[0] = total[0] * arrBagian[1][penyebut[0]];
    newTotal[1] = total[1] * arrBagian[0][penyebut[0]];

    let kanan = newArr[0][1] - newArr[1][1];
    let kananTotal = newTotal[0] - newTotal[1];

    let kananDoang = kananTotal / kanan;
    let kiriDoang = (total[0] - (arrBagian[0][penyebut[1]] * kananDoang)) / arrBagian[0][penyebut[0]];

    return penyebut[0]+' = '+kiriDoang+' '+penyebut[1]+' '+kananDoang;
}

console.log(calcAljebraAdi('2k+3c=2300 7k+2c=7200'))//'k = 1000 c = 100'
console.log(calcAljebraAdi('3a+4b=500 7a+8b=1100'))//'a = 100 b = 50'
console.log(calcAljebraAdi('2c+4a=400 3a+3c=450'))//'c = 100 a = 50'