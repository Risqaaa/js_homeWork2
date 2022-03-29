// 1 задание

let name = prompt('Ваше имя'),
    age = prompt('Ваш возраст'),
    city = prompt('Город проживания'),
    phone = prompt('Ваш телефон'),
    email = prompt('Ваш email'),
    company = prompt('Ваша компания');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 задание 

/*document.write('Меня зовут ' + name + '. Мне ' + age + '  лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '');
let birthYear = (2022 - age);
document.write('<br>' + name + ' родился в ' + birthYear + ' году.');*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 задание

/*let str = prompt('Введите 6-значную строку (только цифры)');
let arr = str.split('');
let sum = 0;
let sum2 = 0;

for (let  i = 0; i < arr.length; i++);
sum = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
sum2 = Number(arr[3]) + Number(arr[4]) + Number(arr[5]);

// console.log(sum);
// console.log(sum2);

if (sum == sum2) {
    console.log('Да!');
} else {
    console.log('Нет!');
}*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 4 задание

/*let a = 1;
if (a > 0) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 5 задание

/*let a = 10,
    b = 2,
    add = (a + b),
    sub = (a - b),
    multi = (a * b),
    div = (a / b);

console.log(add, sub, multi, div);

if (add > 1) {
    console.log(add ** 2);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 6 задание

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 7 задание

/*let n = prompt('Введите количество минут (0 - 59)'); // через if else if else

if (n >= 0 && n < 15) {
    console.log('Это первая четверть часа!');
} else if (n >= 15 && n < 30) {
    console.log('Это вторая четверть часа!');
} else if (n >=30 && n < 45) {
    console.log('Это третья четверть часа!');
} else if (n >= 45 && n < 60) {
    console.log('Это четвертая четверть часа!');
} else {
    console.log ('Неверное значение!');
}*/

// ----------------------------------------------------------

/*let n = 15; // через switch

switch(n) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
case 7:
case 8:
case 9:
case 10:
case 11:
case 12:
case 13:
case 14:
    console.log('Это первая четверть часа!');
break;

case 15:
case 16:
case 17:
case 18:
case 19:
case 20:
case 21:
case 22:
case 23:
case 24:
case 25:
case 26:
case 27:
case 28:
case 29:
    console.log('Это вторая четверть часа!');
break;

case 30:
case 31:
case 32:
case 33:
case 34:
case 35:
case 36:
case 37:
case 38:
case 39:
case 40:
case 41:
case 42:
case 43:
case 44:
    console.log('Это третья четверть часа!');
break;

case 45:
case 46:
case 47:
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
case 58:
case 59:
    console.log('Это четвертая четверть часа!');
break;
default: 
    console.log('Некорректное значение!');
}*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 8 задание

//let day = prompt('Введите день (1 - 31)');

/*if (day >= 1 && day < 11) {
    console.log ('Это первая декада месяца!');
} else if (day >= 11 && day < 20) {
    console.log('Это вторая декада месяца!');
} else if (day >= 20 && day <= 31) {
    console.log('Это третья декада месяца!');
} else {
    console.log('Нет такого дня!')
}*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 9 задание

/*let days = prompt('Введите количество дней'),
    years = (days / 365),
    mounth = (days / 31),
    weeks = (days / 7),
    hours = (days * 24),
    min = (days * 24 * 60),
    sec = (days * 24 * 60 * 60);

    if (years < 1) {
        console.log('' + days + ' дней - это меньше года');
    } else {
        console.log('' + days + ' дней - это ' + years + ' лет');
    }

    if (mounth < 1) {
        console.log('меньше месяца');
    } else {
        console.log('' + mounth + ' месяцев');
    }

    if (weeks < 1) {
        console.log('меньше недели');
    } else {
        console.log('' + weeks + ' недель');
    }

    console.log('' + hours + 'часов');
    console.log('' + min + 'минут');
    console.log('' + sec + 'секунд');*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 10 задание

/*if (day >= 1 && day <= 31) {
    console.log('1 месяц года - январь');
} else if (day >= 32 && day <= 59) {
    console.log('2 месяц года - февраль');
} else if (day >= 60 && day <= 90) {
    console.log('3 месяц года - март');
} else if (day >= 91 && day <= 120) {
    console.log('4 месяц года - апрель');
} else if (day >= 121 && day <= 151) {
    console.log('5 месяц года - май');
} else if (day >= 152 && day <= 181) {
    console.log('6 месяц года - июнь');
} else if (day >= 182 && day <= 212) {
    console.log('7 месяц года - июль');
} else if (day >= 213 && day <= 243) {
    console.log('8 месяц года - август');
} else if (day >= 244 && day <= 273) {
    console.log('9 месяц года - сентябрь');
} else if (day >= 274 && day <= 304) {
    console.log('10 месяц года - октябрь');
} else if (day >= 305 && day <= 334) {
    console.log('11 месяц года - ноябрь');
} else if (day >= 335 && day <= 365) {
    console.log('12 месяц года - декабрь');
} else {
    console.log('Неверное значение!');
}

let time = 0;

if (day >= 1 && day <= 59) {
    time += 1;
} else if (day >= 60 && day <= 151) {
    time += 2;
} else if (day >= 152 && day <= 243) {
    time += 3;
} else if (day >=243 && day <= 334) {
    time += 4;
} else if (day >= 335 && day <= 365) {
    time += 1;
} else {
    console.log('Неверное значение!')
}

switch (time) {
    case 1:
        console.log('Это зима.');
    break;
    case 2:
        console.log('Это весна.');
    break;
    case 3:
        console.log('Это лето.');
    break;
    case 4:
        console.log('Это осень.');
    break;
    default: 
        console.log('Неверное значение!');
}*/