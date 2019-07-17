/*
    ============
    PAIR PROJECT 
    ============

    [INSTRUCTION]
    saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ). 
    dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu 
    setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang 
    BERBEDA. 
    
    pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama 
    tidak lebih dari 2 orang

    ketentuan : 
    - jika murid berjumlah ganjil output : "Jumlah murid harus genap"
    - tambahkan test case lain bila diperlukan 

    [Example]
    input : ["asep","baqi","jajang","junaedi","iqbal","toni"]
    output : ["asep and baqi","jajang and iqbal","junaedi and toni"]

    [RULE]
    - dilarang menggunakan build in function array apapun kecuali push() 
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()
    
*/

function pairProject( students ) {
    if (students.length % 2 !== 0) {
        return "Jumlah murid harus genap";
    }

    let indexBooked = [];
    let listTeam = [];

    for (let i = 0; i < students.length; i++) {
        let currentName = students[i];

        let checkI = notInList(indexBooked, i);

        if (checkI){
            for (let j = 1; j < students.length; j++) {
                let checkJ = notInList(indexBooked, j);
                if (checkJ) {
                    if (currentName[0] !== students[j][0]) {
                        indexBooked.push(i);
                        indexBooked.push(j);
                        
                        listTeam.push(currentName+' and '+students[j]);
        
                        break;
                    }
                }
            }
        }
    }

    return listTeam;
}

// Return true if not in list
// Return false if in list
function notInList(list, val) {
    let flag = true;

    for (let i = 0; i < list.length; i++) {
        if (list[i] === val) {
            return false;
        }    
    }

    return flag;
}

console.log( pairProject(["Aries","Awtian","Momotaro","Yoki","Icha","Wika","Wawan","Mimin","Ryan","Yogi"]) )
/* 
[ 'Aries and Momotaro',
  'Awtian and Yoki',
  'Icha and Wika',
  'Wawan and Mimin',
  'Ryan and Yogi' ]
*/

console.log( pairProject(["asep","baqi","jajang","junaedi","iqbal","toni"]) )
/* 
    ["asep and baqi","jajang and iqbal","junaedi and toni"]
*/