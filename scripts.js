// 1 задание

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
// }

// 2 задание

// let arr =  [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > -10 && arr[i] < -3) {
//         console.log(arr[i]);
//     } 
// }

// 3 задание

// let arr = [],
//     start = 23;

// while (start <= 57) {
//     arr.push(start++);
// }

// console.log(arr);

// let arr2 = [];
// for (let start2 = 23; start2 <=57; start2++) {
//     arr2.push(start2);
// }

// console.log(arr2);

// let result = 0;

// for (i = 0; i < arr.length; i++) {
//     result += arr[i];
// }

// console.log(result);

// 4 задание

// let arr =  ['10', '20', '30', '50', '235', '3000'];
    
// for (let i = 0; i < arr.length; i++) {

//     let check = arr[i].toString()[0];

//     if (check === '1' || check === '2' || check === '5') {
//         console.log(arr[i]);
//     }
// }

// 5 задание

// let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

// for (i = 0; i < week.length; i++) {
//     if (week[i] == 'СБ' || week[i] == 'ВС') {
//         document.write(week[i].bold() + ' ');
//     } else {
//         document.write(week[i] + ' ');
//     }
// }

// 6 задание

// let arr = [1, 2, 3, 4, 4, 5, 6, 7];

// arr.push(123);

// console.log(arr);

// console.log(arr[arr.length-1]);

// 7 задание

// let arr = [];

// for (i = 0; i >= 0; i++) {
//     arr.push(prompt('Введите число'));
//     if (arr[i] == '') {
//         arr.pop();
//         break;
//     }
// }

// console.log(arr);
// console.log(arr.sort());

// 8 задание

// let arr = [12, false, 'Текст', 4, 2, -5, 0],
//     revArr = arr.reverse();

// console.log(revArr);

// let i = 0;
// while (i < revArr.length) {
//     console.log(revArr[i]);
//     i++;
// }

// 9 задание

// let arr = [5, 9, 21, , , 9, 78, , , , 6],
//     num = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == null) {
//         num += 1;
//     }
// }

// console.log(arr);
// console.log(num);

// 10 задание

// let arr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
//     //arr2 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
//     result = 0, 
//     checker = false, 
//     sum = 0;

//     for (let i = 0; i < arr.length; i++) {
        
//         if (arr[i] == 0 && !checker) { 
//             checker = true; 
//             continue; 
//         }

//         if (arr[i] == 0) {
//             result = sum;
//         } else if (checker) {
//             sum += arr[i];
//         }
//     }

//     console.log(arr);
//     console.log(result);

// 11 задание

let height = prompt('Введите высоту ёлочки'),
    space = ' ';
    branch = '^',
    str = '';


for (let i = 0; i < height; i++) {

    space = ' ';

    space = space.repeat(height - i);

    str = space + branch;
    console.log(str);

    branch += '^^';
}

