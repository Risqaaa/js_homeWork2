let html = document.querySelector('html');
// console.log(html);

// let script = document.querySelector('script');
// script.setAttribute('defer', '');
// console.log(script);

html.setAttribute('lang', 'en');

let title = document.createElement('title');
title.innerHTML = 'Choose your option';
let meta = document.createElement('meta');
meta.setAttribute('charset', 'UTF-8');

// console.log(title);
// console.log(meta);

document.head.appendChild(title);
document.head.appendChild(meta);

let fonts = document.createElement('link');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
fonts.setAttribute('rel', 'stylesheet');
// console.log(fonts);
document.head.appendChild(fonts);

let container = document.createElement('div'); // -------------------- контейнер
container.classList.add('container');
// console.log(container);
document.body.appendChild(container);

let h2Container = document.createElement('h2'); // ----------------- заголовок контейнера
h2Container.classList.add('container__h2');
h2Container.innerHTML = 'Choose Your Option';
// console.log(h2Container);
container.appendChild(h2Container);

let pContainer = document.createElement('p'); // ------------------- абзац контейнера
pContainer.classList.add('container__p');
pContainer.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
// console.log(pContainer);
container.appendChild(pContainer);

let containerBottom = document.createElement('div'); // -------------- диватоз
containerBottom.classList.add('container__bottom');
// console.log(containerBottom);
document.body.appendChild(containerBottom);

let containerBottomLeft = document.createElement('div');
containerBottomLeft.classList.add('container__bottom_left');
// console.log(containerBottomLeft);
containerBottom.appendChild(containerBottomLeft);

let containerBottomRight = document.createElement('div');
containerBottomRight.classList.add('container__bottom_right');
// console.log(containerBottomRight);
containerBottom.appendChild(containerBottomRight);
// ---------------------------------------------------------------- ЛЕВАЯ ЧАСТЬ
let leftSpan = document.createElement('span'); // ------------- span
leftSpan.classList.add('container__bottom_left_span');
leftSpan.innerHTML = 'FREELANCER';
containerBottomLeft.appendChild(leftSpan);

let leftH2 = document.createElement('h2'); // ---------------- заголовок
leftH2.classList.add('container__bottom_left_h2');
leftH2.innerHTML = 'Initially designed to';
containerBottomLeft.appendChild(leftH2);

let leftP = document.createElement('p'); // ------------------ абзац
leftP.classList.add('container__bottom_left_p');
leftP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
containerBottomLeft.appendChild(leftP);

let leftA = document.createElement('a'); // ------------------ ссылка
leftA.classList.add('container__bottom_left_a');
leftA.innerHTML = 'START HERE';
leftA.setAttribute('href', '#');
containerBottomLeft.appendChild(leftA);

// ---------------------------------------------------------------- ПРАВАЯ ЧАСТЬ
let rightSpan = document.createElement('span'); // ------------- span
rightSpan.classList.add('container__bottom_right_span');
rightSpan.innerHTML = 'STUDIO';
containerBottomRight.appendChild(rightSpan);

let rightH2 = document.createElement('h2'); // ---------------- заголовок
rightH2.classList.add('container__bottom_right_h2');
rightH2.innerHTML = 'Initially designed to';
containerBottomRight.appendChild(rightH2);

let rightP = document.createElement('p'); // ------------------ абзац
rightP.classList.add('container__bottom_right_p');
rightP.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
containerBottomRight.appendChild(rightP);

let rightA = document.createElement('a'); // ------------------ ссылка
rightA.classList.add('container__bottom_right_a');
rightA.innerHTML = 'START HERE';
rightA.setAttribute('href', '#');
containerBottomRight.appendChild(rightA);

// ---------------------------------------------- CSS ----------------------------------------------------------

let style = document.createElement('style');
style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
        background-color: #e5e5e5;
        color: #212121;
    }

    .container {
        text-align: center;
        margin-top: 40px;
    }

    .container__bottom {
        text-align: center;
        display: flex;
        justify-content: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 800px;
        margin-left: auto;
        margin-right: auto;
    }

    .container__h2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        line-height: 48px;
        margin-bottom: 30px;
    }

    .container__p {
        font-size: 14px;
        line-height: 26px;
        font-family: 'Open Sans', sans-serif;
        letter-spacing: 1.8px;
        margin-bottom: 50px;
    }

    .container__bottom_left,
    .container__bottom_right {
        padding: 80px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container__bottom_left {
        background-color: #E8E9ED;
        width: 50%;
    }

    .container__bottom_right {
        background-color: #8F75BE;
        width: 50%;
    }

    .container__bottom_left_span {
        font-weight: bold;
        color: #9FA3A7;
        letter-spacing: 2.4px;
    }

    .container__bottom_left_h2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        margin: 30px 0 35px 0;
        width: 300px;
    }

    .container__bottom_left_p {
        color: #9FA3A7;
        line-height: 22px;
        width: 280px;
        margin-bottom: 70px;
    }

    .container__bottom_left_a {
        font-weight: bold;
        text-decoration: none;
        color: #212121;
        letter-spacing: 2.4px;
        border: 3px solid #FFC80A;
        padding: 20px 25px;
        border-radius: 50px;   
    }

    .container__bottom_right_span {
        font-weight: bold;
        color: #FFC80A;
        letter-spacing: 2.4px;
    }

    .container__bottom_right_h2 {
        font-family: 'Arvo', serif;
        font-size: 36px;
        margin: 30px 0 35px 0;
        width: 300px;
        color: #FFFFFF;
    }

    .container__bottom_right_p {
        color: #FFFFFF;
        line-height: 22px;
        width: 280px;
        margin-bottom: 70px;
    }

    .container__bottom_right_a {
        font-weight: bold;
        text-decoration: none;
        color: #fff;
        letter-spacing: 2.4px;
        border: 3px solid #FFC80A;
        padding: 20px 25px;
        border-radius: 50px;   
    }
`;  

document.head.appendChild(style);