const galleryFunc = function() { 
    
    const img1 = document.querySelector('.img1'),
    // console.log(img1);
    img2 = document.querySelector('.img2'),
    // console.log(img2);
    img3 = document.querySelector('.img3'),
    // console.log(img3);
    img4 = document.querySelector('.img4'),
    // console.log(img4);
    img1Big = "<img src = '../img/1.jpg'>",
    img2Big = "<img src = '../img/2.jpg'>",
    img3Big = "<img src = '../img/3.jpg'>",
    img4Big = "<img src = '../img/4.jpg'>";

    let gallery = document.querySelector('.gallery');
    // console.log(gallery);

    // let bottomDiv = document.querySelector('.gallery__bottom');
    // console.log(bottomDiv);

    let bottomDiv = document.createElement('div');
    bottomDiv.classList.add('gallery__bottom');
    gallery.appendChild(bottomDiv);

    let closeBtn = document.createElement('button');

    img1.addEventListener('click', function() {
        if(bottomDiv) {
            bottomDiv.remove();
        }

        bottomDiv = document.createElement('div');
        bottomDiv.classList.add('gallery__bottom');
        gallery.appendChild(bottomDiv);

        bottomDiv.innerHTML = img1Big;

        closeBtn.classList.add('gallery__close');
        closeBtn.innerHTML = '+';
        bottomDiv.appendChild(closeBtn);
    });

    img2.addEventListener('click', function() {
        if(bottomDiv) {
            bottomDiv.remove();
        }

        bottomDiv = document.createElement('div');
        bottomDiv.classList.add('gallery__bottom');
        gallery.appendChild(bottomDiv);

        bottomDiv.innerHTML = img2Big;

        closeBtn.classList.add('gallery__close');
        closeBtn.innerHTML = '+';
        bottomDiv.appendChild(closeBtn);
    });

    img3.addEventListener('click', function() {
        if(bottomDiv) {
            bottomDiv.remove();
        }

        bottomDiv = document.createElement('div');
        bottomDiv.classList.add('gallery__bottom');
        gallery.appendChild(bottomDiv);

        bottomDiv.innerHTML = img3Big;

        closeBtn.classList.add('gallery__close');
        closeBtn.innerHTML = '+';
        bottomDiv.appendChild(closeBtn);
    });

    img4.addEventListener('click', function() {
        if(bottomDiv) {
            bottomDiv.remove();
        }

        bottomDiv = document.createElement('div');
        bottomDiv.classList.add('gallery__bottom');
        gallery.appendChild(bottomDiv);

        bottomDiv.innerHTML = img4Big;

        closeBtn.classList.add('gallery__close');
        closeBtn.innerHTML = '+';
        bottomDiv.appendChild(closeBtn);
    });

    closeBtn.addEventListener('click', function() {
        closeBtn.remove();
        bottomDiv.remove();
    });

};