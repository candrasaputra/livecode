/*
  //////////////////////
  FUNCTION COUNT PROFIT
  //////////////////////

  Fungsi Count Profit akan mencari keuntungan tetapi 

  [PROCESS]
  Sama seperti tugas tetapi nama shoppersnya wajib dibuat dinamis dan diubah menjadi string.

  [RULES]
  - Stock tidak boleh negatif
  - Dilarang menggunakan built in function apapun
*/

function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  
  let result = [];
  for (let i = 0; i < listBarang.length; i++) {
    let myObj = new Object();

    myObj.product = listBarang[i][0];
    myObj.shoppers = [];
    myObj.leftOver = listBarang[i][2];
    myObj.totalProfit = 0;

    for (let j = 0; j < shoppers.length; j++) {
      if (listBarang[i][0] === shoppers[j].product) {
        if (myObj.leftOver >= shoppers[j].amount) {
          myObj.shoppers.push(shoppers[j].name);
          myObj.leftOver -= shoppers[j].amount;
          myObj.totalProfit += shoppers[j].amount * listBarang[i][1];
        }
      }
    }

    result.push(myObj);
  }

  for (let i = 0; i < result.length; i++) {
    result[i].shoppers = arrToString(result[i].shoppers);
  }

  return result;
};

function arrToString(arr) {
  let newString = '';

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      newString += arr[i];
    } else if (i === arr.length - 1){
      newString += ' dan '+arr[i];
    } else {
      newString += ', '+arr[i];
    }
  }

  return newString;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: 'Windi dan Vanessa',
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: '',
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: '',
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: 'Windi',
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: 'Devi dan Lisa',
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: 'Rani',
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 1}, {name: 'Devi', product: 'Sepatu Stacattu', amount: 1}, {name: 'Dini', product: 'Sepatu Stacattu', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: 'Windi, Devi, dan Dini',
//     leftOver: 7,
//     totalProfit: 4500000 },
//   { product: 'Baju Zoro',
//     shoppers: '',
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: '',
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]