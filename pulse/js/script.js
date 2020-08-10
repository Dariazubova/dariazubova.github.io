$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() { /* чтобы паказывалось модальное окно */
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() { /* чтобы работал крестик */
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });

    

    function validateForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Введите ваше имя",
          },
          phone: {
            required: "Ваш номер телефона",
            phone: "Не верный формат"
          },
          email: {
            required: "Ваш почтовый адрес",
            email: "Не верный формат"
          }
        }
      });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=tel]').mask("+7 (999) 99-99-999");

    $('form').submit(function(e) { /* скрипт для отправки из формы на почту */
      	e.preventDefault(); /* когда жмем "отправить форму" страница не перезагружается */
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

    //Scroll adn pageup//

    $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#']").click(function(){ //плавный скролл//
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });

    new WOW().init();

  });