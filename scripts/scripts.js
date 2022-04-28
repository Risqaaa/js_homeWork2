let input = document.querySelector('.input');
// console.log(input);

let tasks = document.querySelector('.container__tasks');
// console.log(tasks);

let data = [];

let number;
let task;
let i = 0;

let btns;
let btnCom;
let btnDel;

input.addEventListener('keydown', function(event) {
    if(this.value == '' && event.keyCode == 13) {
        this.value = 'Штош, значит никаких дел нет ^^';
    }

    if (event.keyCode == 13) {
        data.push(this.value);
        console.log(data);
        event.preventDefault();
        this.value = '';

        btns = document.createElement('div');
        btns.classList.add('task__btns');

        btnCom = document.createElement('button');
        btnCom.classList.add('task__btnCom');
        btnCom.innerHTML = '';

        btnDel = document.createElement('button');
        btnDel.classList.add('task__btnDel');
        btnDel.innerHTML = '';

        let task = document.createElement('div');
        task.classList.add('task');
        let taskContainer = document.createElement('div');
        taskContainer.classList.add('task__container');
        taskContainer.innerHTML = data[i];
        tasks.appendChild(task);
        task.appendChild(taskContainer);
        btns.appendChild(btnCom);
        btns.appendChild(btnDel);
        task.appendChild(btns);

        btnDel.addEventListener('click', function() {
            tasks.removeChild(task);
        });
    } else {
        return;
    }

    btnCom.addEventListener('click', function() {
        this.classList.toggle('task__btnCom_active');
        this.classList.toggle('task__btnCom');

        if(this.classList.contains('task__btnCom_active')) {
            this.parentElement.parentElement.classList.add('task__complited');
        } else {
            this.parentElement.parentElement.classList.remove('task__complited');
            this.parentElement.parentElement.classList.add('task');
        }
    });

    i++;
});