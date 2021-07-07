"use strict";

window.addEventListener('DOMContentLoaded', () => {
    //Burger-menu
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })


    //Slider
    $('input.js__range').on('change mousemove touchmove', function() {
        $('.js__block-scale-fill').width($(this).val() * $('.js__block-scale').outerWidth() * 0.0834);
        //$('.scale_fill').height( $('.block').outerHeight() * 0.9);
    });
    

    //Select
    let select = function () {
        let currentTime = new Date();
        let year = currentTime.getFullYear();
        let select = document.querySelector('.select__body');

        for (let i = year; i >= 1900; i--) {
            let val = document.createElement('div');
            val.classList.add('select__item');
            val.innerHTML = i ;
            select.append(val);
        };
        
        let selectHeader = document.querySelector('.select__header');
        let selectItem = document.querySelectorAll('.select__item');
        
        selectHeader.addEventListener('click', selectToggle);
    
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose);
        });
    
        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
            selectHeader.classList.toggle('select__header-up');
        }
    
        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');
    
        }
    
    };
   
    select();
});
