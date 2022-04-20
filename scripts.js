const Fisherman = function() {
    let weight = 0;
    let money = 0;
    let energy = 100;
    let coffee = 0;
    let fish = 0;
    let result;
    let stick = 1;

    this.throw = function() { // Забросить удочку
        this.throw1();
        setTimeout(this.throw2, 3200);
    };

    this.throw1 = function() {
        console.log('------------------');
        if(energy <= 0) {
            console.log('Нет сил, чтобы рыбачить!');
            console.log('Чтобы восстановить, нужно поспать или выпить чашку кофе.');
            return;
        }
        energy -= 10;
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
        weight += fish;
    };

    this.bite = function() { // Поклевка
        fish = Math.ceil(Math.random() * (1000 - 20) + 20);
        console.log('Поймана рыба на ' + fish + ' грамм.');
    };
    
    this.bite2 = function() { // Поклевка на 2 удочку
        fish = Math.ceil(Math.random() * (3000 - 50) + 50);
        console.log('Поймана рыба на ' + fish / 1000 + ' килограмм.');
    };

    this.bite3 = function() { // Поклевка на 3 удочку
        fish = Math.ceil(Math.random() * (7000 - 100) + 100);
        console.log('Поймана рыба на ' + fish / 1000 + ' килограмм.');
    };

    this.info = function() { // Статус
        console.log('------------------');
        if(weight > 999) {
            console.log('Общий вес пойманной рыбы: ' + weight / 1000 + ' килограмм.');
        } else {
            console.log('Общий вес пойманной рыбы: ' + weight + ' грамм.');
        }

        console.log('Деньги: ' + Math.round((money) * 100) / 100  + '$');
        console.log('Энергия: ' + energy + '%');
        numCoffee();
        console.log('Кофе: ' + coffee + ' ' + result);
    };

    const numCoffee = function(num = 0) { // Функуция правильного падежа
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

    this.sell = function() { // Продажа рыбы
        console.log('------------------');

        if(weight != 0) {

            money = Math.round((money + weight / 2000) * 100) / 100;
            console.log('Вы продали всю пойманную рыбу.');
            console.log('Выручка: ' + Math.round((weight / 2000) * 100) / 100 + '$');
            weight = 0;
        } else {
            console.log('В инвентаре нет рыбы!');
        }
    };

    this.energy100 = function() { // Функция пополнения энергии
        energy = 100; 
    };

    this.energy30 = function() { // Функция пополнения энергии
        energy += 30;
        if(energy > 100) {
            energy = 100;
        }
    };

    this.wake = function() {
        console.log('Вы выспались и полны энергии!');
    };

    this.sleep = function() { // Сон
        if(energy == 100) {
            console.log('------------------');
            console.log('Вы полны сил!');
            return;
        } else {
            console.log('------------------');
            console.log('Вы легли спать.');
            console.log('*Ждем, пока вы проснетесь...*');
        }

        setTimeout(this.energy100, 30000);

        setTimeout(this.wake, 30000);
    };

    this.buyCoffee = function() { // Купить кофе
        if(money < 0.99) {
            console.log('------------------');
            console.log('Недостаточно средств!');
        } else {
            console.log('------------------');
            console.log('Вы купили стаканчик кофе.');
            money -= 0.99;
            coffee += 1;
        }
    };

    this.drinkCoffee = function() { // Выпить кофе
        if(coffee <= 0) {
            console.log('------------------');
            console.log('В инвентаре нет кофе!');
            return;
        } else {
            console.log('------------------');
            console.log('Вы выпили стаканчик кофе.');
            coffee -= 1;
            this.energy30();
        }
    };

    this.buyStick2 = function() { // Покупка удочки 2
        if(stick == 2 || stick == 3) {
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
        if(stick == 3) {
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

    
};

let fisherman = new Fisherman();

document.write('<h1>Белорусская Рыбалка :) (0.00001 ver.)</h1>');
document.write('fisherman.info() - основная информация;' + '<br>');
document.write('fisherman.throw() - забросить оснастку в воду;' + '<br>');
document.write('fisherman.sell() - продать всю пойманную рыбу' + '<br>');
document.write('fisherman.sleep() - лечь спать' + '<br>');
document.write('fisherman.buyCoffee() - купить стакан кофе (цена: 0.99$)' + '<br>');
document.write('fisherman.drinkCoffee() - выпить стакан кофе' + '<br>');
document.write('fisherman.buyStick2() - купить удочку TeleStick 4000 за 100$ (2 уровень)' + '<br>');
document.write('fisherman.buyStick3() - купить удочку SuperCatcher Montana 3 за 500$ (3 уровень)' + '<br>');