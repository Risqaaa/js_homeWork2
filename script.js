// 1 задание-------------------------------------------------

/*let i = 1;

while (i <= 50) {
    document.write(i + ' ');
    i++;
}

let a = 35;

while (a >= 8) {
    document.write(a + ' ');
    a--;
}*/

// 2 задание-----------------------------------------------------

/*let i = 89;

while (i >=11) {
    document.write(i+'<br />');
    i--;
}*/

// 3 задание-----------------------------------------------------

/*let a = 100,
    sum = 0;

for (let i = 0; i <= a; i++) {
    sum += i;
}

document.write (sum);*/

// 4 задание--------------------------------------------------------

/*let a = 5,
    sum = 0;

for (let i = 1; i <= a; i++) {
    sum = 0;

    for (let j = 1; j <= i; j++) {
        sum += j;
    }

    document.write ('Сумма числа ' + i + ' = ' + sum + '<br />');
}*/

// 5 задание------------------------------------------------

//let i = 8;

/*while (i <= 56) {

    if (i % 2 == 0) {
        document.write(i + ' ');
    }
    i++;
}*/

/*for (; i <= 56; i++) {

    if (i % 2 == 0) {
        document.write(i + ' ');
    }
}*/

// 6 задание----------------------------------------------------

/*for (let i = 2; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(i + '*' + j + ' = ' + i*j + '<br/>');
    }
}*/

// 7 задание--------------------------------------------------------

/*for (let n = 1000, num = 1; n >= 50; num++) {
    n /= 2;
    document.write('Число ' + n + ' - ' +  num + ' итераций' + '<br />');
}*/

// 8 задание --------------------------------(без алерта -_-)

/*let sum = 0;

for (let i = 1;; i++) {
    let a = +prompt('Введите число (0 или пустая строка - закончить)');
    
    sum += a;
    if (a == 0 || a == ' ') {
        break;
    }

    document.write(sum + ' ' + (sum / i) + '<br />');
}*/

// 9 задание--------------------------------------------------------

/*let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    arr = str.split(' ');*/

//console.log(arr);

/*let min = Math.min.apply(0, arr); //---------- 1 способ
let max = Math.max.apply(0, arr);

console.log(min);
console.log(max);*/

/*let min = arr[0], //------------------------- 2 способ (циклом)
    max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }

    if (max < arr[i]) {
        max = arr[i];
    }
}

console.log(min);
console.log(max);*/

// 10 задание -------------------------------------------------------

/*let a = +prompt('Введите число');
    count = 0;
    sum = 0;

let arr = ("" + a).split("").map(Number);

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + ' ');
    count += 1;
}

document.write(' // Цифр в числе - ' + count);

for (let j = 0; j < arr.length; j++) {
    sum += arr[j];
}

document.write(' // Сумма всех цифр числа - ' + sum);

let reversed = arr.reverse();

document.write(' // Обратный порядок цифр - ');

for (let t = 0; t < reversed.length; t++) {
    document.write(reversed[t] + ' ');
}*/
