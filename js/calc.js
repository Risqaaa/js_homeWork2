const calc = function() {
    let a = '', 
    b = '', 
    sign = '', 
    result = false;

    const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
    operation = ['+', '-', 'x', '/'],
    screen = document.querySelector('.calc__screen p');

    const clear = function() {
        a = '';
        b = '';
        sign = '';
        result = false;
        screen.textContent = 0;
    };

    const plusMinus = function() {
        a = a * -1;
        screen.textContent = a;
    };

    const c = document.querySelector('.calc__btn_c');
    c.addEventListener('click', clear);

    document.querySelector('.calc__btns').addEventListener('click', (event) => {
        if(!event.target.classList.contains('calc__btn')) return; // защита от клика не по кнопке
        if(event.target.classList.contains('calc__btn_c')) return;
        
        screen.textContent = '';
        let key = event.target.textContent;

        if(digit.includes(key)) {
            
            if(b == '' && sign == '') {
                a += key;
                screen.textContent = a;
            } else if (a != '' && b != '' && result) {
                b = key;
                result = false;
                screen.textContent = b;
            } else {
                b += key;
                screen.textContent = b;
            }
            return;
        }

        if(operation.includes(key)) {
            if(a != '' && b != '' && !result) {                
                if(sign == '+') {
                    a = (+a) + (+b);
                } else if (sign == '-') {
                    a = (+a) - (+b);
                } else if(sign == 'x') {
                    a = (+a) * (+b);
                } else if (sign == '/') {
                    a = (+a) / (+b);
                }
                sign = key;
                screen.textContent = sign;

                result = true;
                screen.textContent = a;
            } else {
                sign = key;
                screen.textContent = sign;
                return;
            }
        }

        if(key == '=') {
            if(b == '') {
                b = a;
            }
            if(sign == '+') {
                a = (+a) + (+b);
            } else if (sign == '-') {
                a = (+a) - (+b);
            } else if(sign == 'x') {
                a = (+a) * (+b);
            } else if (sign == '/') {
                a = (+a) / (+b);
            }
            result = true;
            screen.textContent = a;
            console.log(a, sign, b);
        }

        if(key == '+/-') {
            plusMinus();
        }
    });
    
};