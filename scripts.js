const Fisherman = function() {
    let weight = 0;
    let money = 0;
    let energy = 100;
    let coffee = 0;
    let fish = 0;
    let result;
    let resultGram;
    let resultWeight;
    let stick = 1;
    let stickInWater = false;
    let sleep = false;
    let bag = 15000;

    this.throw = function() { // Забросить удочку
        if(sleep == true) {
            console.log('------------------');
            console.log('В данный момент вы отдыхаете...');
            return;
        }else if(energy <= 0) {
            console.log('------------------');
            console.log('Нет сил, чтобы рыбачить!');
            console.log('Чтобы восстановить, нужно поспать или выпить чашку кофе.');
            return;
        } else if(stickInWater == true) {
            console.log('------------------');
            console.log('Вы уже рыбачите в данный момент!');
            return;
        } else {
            this.throw1();
            setTimeout(this.throw2, 3200);
            setTimeout(this.throw3, 3200);
        }
    };

    this.throw1 = function() {

        stickInWater = true;
        energy -= 5;
        console.log('------------------');
        console.log('Оснастка заброшена в воду.');
        console.log('Поклёвка...');

        if(stick == 1) {
            setTimeout(this.bite, 3000);
        } else if (stick == 2) {
            setTimeout(this.bite2, 3000);
        } else if (stick == 3) {
            setTimeout(this.bite3, 3000);
        }
    };

    this.throw2 = function() {
        if(weight >= bag) {
            console.log('Пойманная рыба не влезла в инвентарь.');
            console.log('Рыба отпущена.');
            return;
        } else weight += fish;
    };

    this.throw3 = function() {
        stickInWater = false;
    };

    this.bite = function() { // Поклевка
        fish = Math.ceil(Math.random() * (1000 - 20) + 20);
        console.log('------------------');
        numGram();
        console.log('Поймана рыба на ' + fish + ' ' + resultGram + '.');
    };
    
    this.bite2 = function() { // Поклевка на 2 удочку
        fish = Math.ceil(Math.random() * (3000 - 50) + 50);
        console.log('------------------');
        numGram();
        console.log('Поймана рыба на ' + fish / 1000 + ' ' + 'кило' + resultGram + '.');
    };

    this.bite3 = function() { // Поклевка на 3 удочку
        fish = Math.ceil(Math.random() * (7000 - 100) + 100);
        console.log('------------------');
        numGram();
        console.log('Поймана рыба на ' + fish / 1000 + ' ' + 'кило' + resultGram + '.');
    };

    this.info = function() { // Информация
        console.log('------------------');
        if(weight > 999) {
            numWeight();
            console.log('Общий вес пойманной рыбы: ' + weight / 1000 + ' кило' + resultWeight + '.');
        } else {
            numWeight();
            console.log('Общий вес пойманной рыбы: ' + weight + ' ' + resultWeight + '.');
        }

        console.log('Деньги: ' + Math.round((money) * 100) / 100  + '$');
        console.log('Энергия: ' + energy + '%');
        numCoffee();
        console.log('Кофе: ' + coffee + ' ' + result);

        if(stick == 1) {
            console.log('Удочка: Бамбук СССР');
        } else if(stick == 2) {
            console.log('Удочка: TeleStick 4000');
        } else if(stick == 3) {
            console.log('Удочка: SuperCatcher Montana 3');
        } else console.log('error 404');

        if(bag == 15000) {
            console.log('Сумка: Армейский вещмешок');
        } else if(bag == 20000) {
            console.log('Сумка: Grizzli');
        } else if(bag == 30000) {
            console.log('Сумка: Shanaman');
        } else console.log('error 404');
    };

    const numCoffee = function(num = 0) { // Функция правильного падежа для кофе
        let words = ['стаканчик', 'стаканчика', 'стаканчиков'],
            count = coffee % 100;

        if (count > 4 && count < 21) {
            result = words[2];
        } else {
            count = count % 10;
            if (count == 1) {
                result = words[0];
            } else {
                if (count > 1 && count < 5) {
                    result = words[1];
                } else {
                    result = words[2];
                }
            }
        }

        return result;
    };

        const numGram = function(num = 0) { // Функция правильного падежа для граммов
        let words = ['грамм', 'грамма', 'граммов'],
            count = fish % 100;

        if (count > 4 && count < 21) {
            resultGram = words[2];
        } else {
            count = count % 10;
            if (count == 1) {
                resultGram = words[0];
            } else {
                if (count > 1 && count < 5) {
                    resultGram = words[1];
                } else {
                    resultGram = words[2];
                }
            }
        }

        return resultGram;
    };

    const numWeight = function(num = 0) { // Функция правильного падежа для граммов
        let words = ['грамм', 'грамма', 'граммов'],
            count = weight % 100;

        if (count > 4 && count < 21) {
            resultWeight = words[2];
        } else {
            count = count % 10;
            if (count == 1) {
                resultWeight = words[0];
            } else {
                if (count > 1 && count < 5) {
                    resultWeight = words[1];
                } else {
                    resultWeight = words[2];
                }
            }
        }

        return resultWeight;
    };

    this.sell = function() { // Продажа рыбы
        if(sleep == true) {
            console.log('------------------');
            console.log('В данный момент вы отдыхаете...');
            return;
        }else if(weight != 0) {

            money = Math.round((money + weight / 1000) * 100) / 100;
            console.log('Вы продали всю пойманную рыбу.');
            console.log('Выручка: ' + Math.round((weight / 1000) * 100) / 100 + '$');
            weight = 0;
        } else {
            console.log('------------------');
            console.log('В инвентаре нет рыбы!');
        }
    };

    this.energy100 = function() { // Функция пополнения энергии
        energy = 100; 
    };

    this.energy70 = function() { // Функция пополнения энергии
        energy += 70;
        if(energy > 100) {
            energy = 100;
        }
    };

    this.wake = function() {
        console.log('Вы выспались и полны энергии!');
        sleep = false;
    };

    this.sleep = function() { // Сон
        if(sleep == true) {
            console.log('------------------');
            console.log('В данный момент вы отдыхаете...');
            return;
        } else if(energy == 100) {
            console.log('------------------');
            console.log('Вы полны сил!');
            return;
        } else {
            sleep = true;
            console.log('------------------');
            console.log('Вы легли спать.');
            console.log('*Ждем, пока вы проснетесь...*');
        }

        setTimeout(this.energy100, 30000);

        setTimeout(this.wake, 30000);
    };

    this.buyCoffee = function() { // Купить кофе
        if(sleep == true) {
            console.log('------------------');
            console.log('В данный момент вы отдыхаете...');
            return;
        }else if(money < 1.99) {
            console.log('------------------');
            console.log('Недостаточно средств!');
        } else {
            console.log('------------------');
            console.log('Вы купили стаканчик кофе.');
            money -= 1.99;
            coffee += 1;
        }
    };

    this.drinkCoffee = function() { // Выпить кофе
        if(sleep == true) {
            console.log('------------------');
            console.log('В данный момент вы отдыхаете...');
            return;
        }else if(coffee <= 0) {
            console.log('------------------');
            console.log('В инвентаре нет кофе!');
            return;
        } else {
            console.log('------------------');
            console.log('Вы выпили стаканчик кофе.');
            coffee -= 1;
            this.energy70();
        }
    };

    this.buyStick2 = function() { // Покупка удочки 2
        if(sleep == true) {
            console.log('------------------');
            console.log('В данный момент вы отдыхаете...');
            return;
        }else if(stick == 2 || stick == 3) {
            console.log('------------------');
            console.log('У вас уже есть эта удочка!');
            return;
        } else if (money < 100) {
            console.log('------------------');
            console.log('Недостаточно средств!');
        } else {
            console.log('------------------');
            console.log('Вы приобрели TeleStick 4000!');
            money -= 100;
            stick = 2;
        }
    };

    this.buyStick3 = function() { // Покупка удочки 3 
        if(sleep == true) {
            console.log('------------------');
            console.log('В данный момент вы отдыхаете...');
            return;
        }else if(stick == 3) {
            console.log('------------------');
            console.log('У вас уже есть эта удочка!');
            return;
        } else if (money < 500) {
            console.log('------------------');
            console.log('Недостаточно средств!');
        } else {
            console.log('------------------');
            console.log('Вы приобрели SuperCatcher Montana!');
            money -= 500;
            stick = 3;
        }
    };

    this.buyBag2 = function() { // Покупка сумки 2
        if(bag == 20000 || bag == 30000) {
            console.log('------------------');
            console.log('У вас уже есть этот рюкзак!');
            return;
        } else {
            if(money < 100) {
                console.log('------------------');
                console.log('Недостаточно средств!');
                return;
            } else {
                console.log('------------------');
                console.log('Вы купили сумку Grizzli.');
                money -= 100;
                bag = 20000;
            }
        }
    };

    this.buyBag3 = function() { // Покупка сумки 3
        if(bag == 30000) {
            console.log('------------------');
            console.log('У вас уже есть этот рюкзак!');
            return;
        } else {
            if(money < 300) {
                console.log('------------------');
                console.log('Недостаточно средств!');
                return;
            } else {
                console.log('------------------');
                console.log('Вы купили сумку Shanaman.');
                money -= 300;
                bag = 30000;
            }
        }
    };

    
};

let fisherman = new Fisherman();

document.write('<h1>Белорусская Рыбалка :) (0.00001 ver.)</h1>');
document.write('------------------ Основное' + ' ----------------------------' + '<br>');
document.write('fisherman.info() - основная информация' + '<br>');
document.write('fisherman.throw() - забросить оснастку в воду' + '<br>');
document.write('fisherman.sell() - продать всю пойманную рыбу' + '<br>');
document.write('------------------ Восполнение энергии' + ' -------------' + '<br>');
document.write('fisherman.sleep() - лечь спать' + '<br>');
document.write('fisherman.drinkCoffee() - выпить стакан кофе' + '<br>');
document.write('------------------ Магазин' + ' ------------------------------' + '<br>');
document.write('fisherman.buyCoffee() - купить стакан кофе (цена: 1.99$)' + '<br>');
document.write('fisherman.buyBag2() - купить рюкзак Grizzli (ёмкость: 20 кг --- цена: 100$)' + '<br>');
document.write('fisherman.buyBag3() - купить рюкзак Shanaman (ёмкость: 30 кг --- цена: 300$)' + '<br>');
document.write('fisherman.buyStick2() - купить удочку TeleStick 4000 (цена: 100$)' + '<br>');
document.write('fisherman.buyStick3() - купить удочку SuperCatcher Montana 3 (цена: 500$)' + '<br>');