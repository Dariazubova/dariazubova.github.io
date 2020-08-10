window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
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
});
$(document).ready(function(){
    $('.expert_slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
        responsive: [
            {
            	breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows : false, /* выключение стрелок */
                    dots: true
                } 
            }
        ]
    });
  });

  //modal

  $('.button').on('click', function() { 
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() { 
    $('.overlay, #consultation, #thanks').fadeOut('slow');
  });

  $('input[name=phone]').mask("+7 (999) 99-99-999");

  $('form').submit(function(e) {
    e.preventDefault(); 
   $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

  $('form').trigger('reset');
    });
return false;
});

function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
         
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Ваше имя",
         
        },
        phone: {
          required: "Ваш номер телефона",
          phone: "Не веный формат"
        },
        email: {
          required: "Введите вашу почту",
          email: "Не верный формат"
        }
      }
    });
  };

  validateForms('#consultation form');
 
