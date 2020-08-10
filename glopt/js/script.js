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
})

//Для мнимальной работы слайдера//
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1300,
        /* slidesToShow: 1, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></ button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></ button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows : false, /* выключение стрелок */
              dots: true

            }
          },
          {
            breakpoint: 480,
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

  $(document).ready(function(){
    $('.button').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow')
    }); 
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks').fadeOut()
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
      validateForms('#consultation__form');
    
    
    $('input[name=phone]').mask("+7 (999) 99-99-999");
    
    $('form').submit(function(e) { //когда происходит отправка формы
        e.preventDefault(); //чтобы не перезагружалась страница после отправки формы
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation').fadeOut();
            $('.overlay, #thanks').fadeIn();
            $('form').trigger('reset'); //по окончанию сброс формы
        });
        return false;
    });
});