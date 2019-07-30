/*
=================
AGE VERIFICATION
=================

[INSTRUCTION]
Terdapat function ageVerification , function akan mengembalikan list 
orang yang memiliki umur diatas 19 tahun. Setiap nama juga akan diberikan imbuhan :
- jika gender male diberikan imbuhan Mr.
- jika gender female dan umur diatas 30 akan diberikan imbuhan Mrs.
- jika gender female dan umur dibawah 30 akan diberikan imbuhan Ms.

[EXAMPLE]
input : ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19']
output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']

[RULES]
- dilarang menggunakan REGEX
- dilarang menggunakan substring, substr, slice, splice
*/

function ageVerification(list) {
    let result = [];

    for (let i = 0; i < list.length; i++) {
        let split = mySplit(list[i], ',');

        if (split[2] > 19) {
            if (split[1] === 'male') {
                result.push('Mr. ' + split[0]);
            } else if (split[2] > 30) {
                result.push('Mrs. ' + split[0]);
            } else {
                result.push('Ms. ' + split[0]);
            }
        }
    }

    return result;
}

function mySplit(array, operator) {
    let result = [];

    let tmp = '';

    for (let i = 0; i < array.length; i++) {
        if (array[i] != operator) {
            tmp += array[i];
        } else {
            result.push(tmp);
            tmp = '';
        }

        if (i === array.length - 1) {
            result.push(tmp);
        }
    }

    return result;
}


var people = ['Miftah,male,21', 'Dhimas,male,25', 'Budi,male,13', 'Toni,male,22', 'Nita,female,77', 'Nana,female,21', 'Nani,female,19'];

console.log(ageVerification(people));
// ['Mr. Miftah', 'Mr. Dhimas', 'Mr.Toni', 'Mrs. Nita', 'Ms.Nana']

var people2 = ['Arya,female,22', 'Greyjoy,male,100', 'littlefinger,male,45', 'Bran,male,15']
console.log(ageVerification(people2));
// ['Ms. Arya', 'Mr. Greyjoy', 'Mr. littlefinger']