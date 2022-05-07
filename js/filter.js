const filter = function() {
    const showAllBtn = document.querySelector('.btn_showAll'),
    natureBtn = document.querySelector('.btn_nature'),
    carsBtn = document.querySelector('.btn_cars'),
    peopleBtn = document.querySelector('.btn_people');

    let natureDiv = document.querySelectorAll('.nature'), 
    carsDiv = document.querySelectorAll('.cars'),
    peopleDiv = document.querySelectorAll('.people');

    const test = function() {
        for(let i = 0; i < natureDiv.length; i++) {
            natureDiv[i].classList.add('hidden');
        }
    };

    const clickNatureBtn = function() {
        showAllBtn.classList.remove('active');
        carsBtn.classList.remove('active');
        peopleBtn.classList.remove('active');
        natureBtn.classList.add('active');

            for(let i = 0; i < natureDiv.length; i++) {
                natureDiv[i].classList.remove('hidden');
            }

            for(let i = 0; i < natureDiv.length; i++) {
                carsDiv[i].classList.add('hidden');
            }

            for(let i = 0; i < natureDiv.length; i++) {
                peopleDiv[i].classList.add('hidden');
            }
    };

    const clickCarsBtn = function() {
        showAllBtn.classList.remove('active');
        natureBtn.classList.remove('active');
        peopleBtn.classList.remove('active');
        carsBtn.classList.add('active');

        for(let i = 0; i < carsDiv.length; i++) {
            carsDiv[i].classList.remove('hidden');
        }

        for(let i = 0; i < natureDiv.length; i++) {
            natureDiv[i].classList.add('hidden');
        }

        for(let i = 0; i < natureDiv.length; i++) {
            peopleDiv[i].classList.add('hidden');
        }
    };

    const clickPeopleBtn = function() {
        showAllBtn.classList.remove('active');
        natureBtn.classList.remove('active');
        carsBtn.classList.remove('active');
        peopleBtn.classList.add('active');

        for(let i = 0; i < peopleDiv.length; i++) {
            peopleDiv[i].classList.remove('hidden');
        }

        for(let i = 0; i < peopleDiv.length; i++) {
            carsDiv[i].classList.add('hidden');
        }

        for(let i = 0; i < peopleDiv.length; i++) {
            natureDiv[i].classList.add('hidden');
        }
    };

    const clickShowAllBtn = function() {
        peopleBtn.classList.remove('active');
        natureBtn.classList.remove('active');
        carsBtn.classList.remove('active');
        showAllBtn.classList.add('active');

        for(let i = 0; i < peopleDiv.length; i++) {
            peopleDiv[i].classList.remove('hidden');
        }

        for(let i = 0; i < peopleDiv.length; i++) {
            carsDiv[i].classList.remove('hidden');
        }

        for(let i = 0; i < peopleDiv.length; i++) {
            natureDiv[i].classList.remove('hidden');
        }
    };

    natureBtn.addEventListener('click', function() {
        clickNatureBtn();
    });

    carsBtn.addEventListener('click', function() {
        clickCarsBtn();
    });

    peopleBtn.addEventListener('click', function() {
        clickPeopleBtn();
    });

    showAllBtn.addEventListener('click', function() {
        clickShowAllBtn();
    });
};