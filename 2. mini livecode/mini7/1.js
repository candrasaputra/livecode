/*
  ===================
  MOBA LEGEND ADDRESS
  ===================

  mobaLegendAddress adlaah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi info hero-hero mobile legend

  output dari function ini adalah array dengan object yang memiliki address yang berbeda

  [NOTES]
  - apabila terdapat hero yang tidak memiliki address maka dianggap tidak valid
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
  - urutan tidak masalah
*/

function mobaLegendAddress(heroes) {
  let newArr = [];

  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].address != undefined) {
      if (adaAlamat(newArr, heroes[i].address)) {
        newArr.push({name: heroes[i].name, address: heroes[i].address});
      } else {
        newArr = removeByAddress(newArr, heroes[i].address);
      }
    }
  }

  return newArr;
}

function adaAlamat(arr, par) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].address === par) {
      return false;
    }
  }
  
  return true;
}

function removeByAddress(arr, par) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].address != par) {
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}

console.log(mobaLegendAddress([
  {
    name: 'Layla',
    address: 'Cimahi'
  },
  {
    name: 'Zi Long',
    address: 'Sukabumi'
  },
  {
    name: 'Balmond',
    address: 'Cimahi'
  },
  {
    name: 'Freya'
  }
]))
// [{
//   name: 'Zi Long',
//   address: 'Sukabumi'
// }]