// 1 задание

// function fun(a, b, c) {
//     console.log((a - b) / c);
// }

// fun(1, 2, 3);

// 2 задание

// function fun(a) {
//     console.log(Math.pow(a, 2));
//     console.log(Math.pow(a, 3));
// }

// fun(2);

// 3 задание

// function min(a, b) {
//     if (a < b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }

// function max(a, b) {
//     if (a > b) {
//         console.log(a);
//     } else {
//         console.log(b);
//     }
// }

// min(1, 2);
// max(1, 2);

// 4 задание

// let arr = [];

// function ins() {
//     for (let i = 0; i >= 0; i++) {
//         let a = prompt('Введите число');
//         if (a == '' || a == null) {
//             break;
//         }
//         arr.push(a);
//     }
// }

// function show() {
//     console.log(arr);
// }

// ins();
// show();

// 5 задание

// function isEven(a) {
//     if (a % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isEven(6));

// 6 задание

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArroy = [];

// function newArrFunc() {     
//     for (let i = 0; i < arr.length; i++) {
//         let val = isEven(arr[i]);
//         if (val == true) {
//             newArroy.push(arr[i]);
//         } else {
//             continue;
//         }        
//     }
// }

// newArrFunc();

// console.log(newArroy);

// 7 задание

// function pir(a) {
//     for(let i = 1; i <= a; i++) {

//         for(let j = 0; j < i; j++) {
//             let sym = '';
//             if(arguments[1] == undefined || arguments[1] == null || arguments[1] == ' ') {
//                 document.write(i);
//             } else { 
//                 sym = arguments[1];
//                 document.write(sym);
//             }
//         }

//         document.write('<br/>');
//     }
// }

// pir(9, '*');

// 8 задание

// let star = '*';
// let space = ' ';
// let str = '';
// let i = 0;

// function tree(height) {
//     space = ' ';
//     space = space.repeat(height - i);
//     str = space + star;
//     console.log(str);
//     i++;
//     star += '**';
//     if(i < height) {
//         tree(height);
//     }
// }

// tree(10);

// 9 задание

// function fib(a) {
//     let arr = [0, 1];
//     for(i = 2;;i++) {
//         let j = arr[i-1] + arr[i-2];
//         if(j > a) {
//             break;
//         } else {
//             arr.push(j);
//         }
//     }

//     return arr;
// }

// let result = fib(1000);

// console.log(result);

// 10 задание

// function nine(a) {
//     let arr = a.toString().split('');
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += +arr[i];
//     }

//     if(sum > 9) {
//         nine(sum);
//     } else {
//         console.log(sum);
//     }
// }

// nine('888');

// 11 задание

// function printArray(array) {
//     console.log(array[i]);
//     i++;
//     if(i < array.length) {
//         printArray(array);
//     }
// }

// let i = 0;

// printArray([1, 2, 3, 4, 5, 6]);