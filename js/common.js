$(document).ready(function() {


	$('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 10 ? 10 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });





	if ($(".product-slider").length > 0) {
		var swiper = new Swiper('.product-slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 4.2,
			spaceBetween: 0,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
	      	navigation: {
		        nextEl: '.product-slider-next-arrow',
		        prevEl: '.product-slider-prev-arrow',
	      	},
		    breakpoints: {
		        1400: {
		          slidesPerView: 4,
		        },
		        1024: {
		          slidesPerView: 3,
		        },
		        992: {
		          slidesPerView: 2,
		        },
		        650: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}


	// Помощь анимации

	// data-wow-delay="0.3s" // задержка анимации
	// data-wow-offset="10" // — расстояние в пикселях от нижнего края браузера до верхней границы элемента необходимое для начала анимации;
	new WOW().init();




	//Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        'close'
    	],
    	touch: false,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});

	// Маска для формы телефона https://github.com/RobinHerbots/Inputmask

    $("input[type='tel']").inputmask({
	  mask: '+7 (999) 999 99-99',
	  showMaskOnHover: false,
	  autoUnmask: true,
	});


	//Плавный скролл до блока .div по клику на .scroll
	$('a[data-target="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});


   // Боковое меню
    $('.menuToggle').on('click', function() {
    	$(this).toggleClass('active');
        $('body').toggleClass('none-scroll');
        $('.menu-nav').toggleClass('active');
        $('.overlay-page').toggleClass('active');
	});

    $('.overlay-page').on('click', function() {
        $('body').removeClass('none-scroll');
        $('.menu-nav').removeClass('active');
        $('.menuToggle').removeClass('active');
        $(this).removeClass('active');
    });


     $('.main-nav ul li a[data-target="anchor"]').on('click', function(e) {
    	$('.menu-nav').removeClass('active');
    	$('.menuToggle').removeClass('active');
    	$('body').removeClass('none-scroll');
    	$('.overlay-page').removeClass('active');
    });




});




