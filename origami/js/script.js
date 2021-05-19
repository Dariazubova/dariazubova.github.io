window.addEventListener('DOMContentLoaded', () => {
    //BURGER
    const menu = document.querySelector('.cards__menu'),
    menuItem = document.querySelectorAll('.cards__menu-list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('cards__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('cards__menu_active');
        });
    });


    //TIMER

    const deadline = '2021-06-20';

    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), 
              //days = Math.floor(t / (1000 * 60 * 60 * 24)), 
              hours = Math.floor((t / (1000 * 60 * 60) % 24)), 
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            //'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if(num >= 0 && num  < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector,endtime) {
        const timer = document.querySelector(selector),
              //days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#min'),
              seconds = timer.querySelector('#secs'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            //days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total <= 0) {
                //days.innerHTML = '0';
                hours.innerHTML = '0';
                minutes.innerHTML = '0';
                seconds.innerHTML = '0';
                clearInterval(timeInterval);
            }
        } 
    }

    setClock('.timer', deadline);
    
});