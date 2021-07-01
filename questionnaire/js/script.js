// let slider = document.getElementById("myRange");
// let output = document.getElementById("red_value");


// output.innerHTML = slider.value;

// let red_val = slider.value;

// slider.oninput = function() {
//     output.innerHTML = this.value;
//     val = this.value;
//     slider.style.backgroundColor = "#cbb1f1";
//     rgb_value.innerHTML = "#eaeef8";
// }
"use strict";

window.addEventListener('DOMContentLoaded', () => {
    
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


    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let select = document.getElementById('birthYear');

    for (let i = year; i >= 1900; i--) {
        let val = document.createElement('option');
        val.innerHTML = ('<option value="' + i + '">' + i + '</option>');
        select.append(val);
    };

    $(".js-range-slider").ionRangeSlider({
        min: 0,
        max: 10,
        from: 6,
        hide_from_to: true,
        hide_min_max: true,
    });


    $('input.range').on('change mousemove touchmove', function() {
        $('.scale_fill').width($(this).val() * $('.block').outerWidth() * 0.3333);
      });
});
