/*
    =======================
    Salary Range Calculator
    =======================

    Buatlah sebuah program sederhana yang menghitung 
    `salaryNett` dan `totalBPJS` yang didapatkan setiap karyawan sesuai dengan 
    Golongan `brutoSalary` nya masing - masing.
    pengertian : 
    - `brutoSalary` adalah gaji kotor
    - `salaryNett` adalah gaji bersih yang didapat karyawan dengan rumus 
    salaryNett` = `brutoSalary` - (`brutoSalary` * `Tax`) - ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) 
    - `totalBPJS` adalah total BPJS yang telah dibayarkan oleh karyawan
    pada bulan ke (`months`) tertentu. rumusnya : 
    `totalBPJS` = ( (`brutoSalary` - (`brutoSalary` * `Tax`)) * `BPJS` ) * `months`


    [INSTRUCTION]
    Diketahui jika : 
    `brutoSalary` => 9000000 keatas , maka : golongan I  
    `brutoSalary` => 6000000 - 8999999,  maka : golongan II 
    `brutoSalary` => 3000000 - 5999999, maka : golongan III 
    `brutoSalary` => 1000000 - 2999999,  maka : golongan IV

    Golongan I
    diwajibkan membayar : 
    - `Tax` 4% dari `brutoSalary`
    - `BPJS` 5% dari `brutoSalary` setelah dikurangi `Tax` 

    Golongan II
    diwajibkan membayar : 
    - `Tax` 3% dari `brutoSalary`
    - `BPJS` 4% dari `brutoSalary` setelah dikurangi `Tax`

    Golongan III
    diwajibkan membayar :
    - `Tax` 2% dari `brutoSalary` 
    - BPJS 3% dari `brutoSalary` setelah dikurangi `Tax`

    Golongan IV 
    diwajibkan membayar : 
    - tidak dikenakan `Tax`
    - BPJS 2% dari `brutoSalary`

    Jika `brutoSalary` dibawah 1000000 maka outputnya 
    "Gaji anda dibawah standard perusahaan"

    [EXAMPLE]
    diberikan input : 
    brutoSalary = 5000000
    months = 3

    maka outputnya adalah :  
    "netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000"


    **WAJIB MENGGUNAKAN PSEUDOCODE** 

    [YOUR PSEUDOCODE HERE]


*/

/* 
PSEUDOCODE

STORE FUNCTION salaryRangeCalculator prameter brutoSalary NUMBER AND prameter months NUMBER
    STORE salaryNett with 0
    STORE totalBPJS with 0
    STORE golongan WITH getGolongan(brutoSalary)

    STORE tax WITH (golongan.tax / 100)
    STORE bpjs WITH (golongan.bpjs / 100)

    SET salaryNett WITH brutoSalary - (brutoSalary * tax) - ((brutoSalary - (brutoSalary * tax)) * bpjs)

    IF (golongan.goglongan equal to 'Golongan IV') THEN
        SET totalBPJS WITH ((brutoSalary * tax) * bpjs) * months
    ELSE
        SET totalBPJS WITH ((brutoSalary - (brutoSalary * tax)) * bpjs) * months
    END IF

    DISPLAY `netSalary WITH [salaryNett],totalBPJS yang telah dibayarkan = [totalBPJS]`
}

STORE FUNCTION getGolongan with prameter brutoSalary NUMBER
    if brutoSalary hight equal to 9000000 THEN
        SET goglongan with 'golongan I'
        SET tax with 4
        SET bpjs with 5
    ELSE IF brutoSalary hight equal to 6000000 AND brutoSalary lest equal to 8999999 THEN
        SET goglongan with 'golongan II'
        SET tax with 3
        bpjs with 4
    ELSE IF brutoSalary hight equal to 3000000 AND brutoSalary lest equal to 5999999 THEN
        SET goglongan with 'golongan III'
        SET tax with 2
        bpjs with 3
    ELSE IF brutoSalary hight equal to 1000000 AND brutoSalary lest equal to 2999999 THEN
        SET goglongan with 'golongan IV'
        SET tax with 0
        bpjs with 2
    ELSE
         false
    END IF
END FUNCTION

*/

function salaryRangeCalculator(brutoSalary, months) {
    let salaryNett, totalBPJS;
    let golongan = getGolongan(brutoSalary);

    let tax = (golongan.tax / 100);
    let bpjs = (golongan.bpjs / 100);

    salaryNett = brutoSalary - (brutoSalary * tax) - ((brutoSalary - (brutoSalary * tax)) * bpjs);

    if (golongan.goglongan === 'Golongan IV') {
        totalBPJS = (((brutoSalary * tax)) * bpjs) * months;
    } else {
        totalBPJS = ((brutoSalary - (brutoSalary * tax)) * bpjs) * months;
    }

    return `netSalary = ${salaryNett}, totalBPJS yang telah dibayarkan = ${totalBPJS}`
}

function getGolongan(brutoSalary) {
    if (brutoSalary >= 9000000) {
        return {
            goglongan: 'golongan I',
            tax: 4,
            bpjs: 5
        };
    } else if (brutoSalary >= 6000000 && brutoSalary <= 8999999) {
        return {
            goglongan: 'golongan II',
            tax: 3,
            bpjs: 4
        };
    } else if (brutoSalary >= 3000000 && brutoSalary <= 5999999) {
        return {
            goglongan: 'golongan III',
            tax: 2,
            bpjs: 3
        };
    } else if (brutoSalary >= 1000000 && brutoSalary <= 2999999) {
        return {
            goglongan: 'golongan IV',
            tax: 0,
            bpjs: 2
        };
    } else {
        return false;
    }
}

console.log(salaryRangeCalculator(5000000, 3));
// netSalary = 4753000, totalBPJS yang telah dibayarkan = 441000