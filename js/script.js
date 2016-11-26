/*script*/
$(document).ready( function () {
	// alert(window.devicePixelRatio + ' ' + screen.width + ' ' + screen.height + ' ' + window.orientation);
});
//slider
$('.js-slider').each(function (idx, item) {
	var carouselId = "slider-" + idx;
	this.id = carouselId;

	// alert(window.devicePixelRatio < 2 && ((screen.width >= 768 && screen.height >= 1024) || (screen.width >= 1024 && screen.height >= 768)) && $(this).hasClass('js-slider-2'));

	if(window.devicePixelRatio < 2 && ((screen.width >= 768 && screen.width < 1280) && $(this).hasClass('js-slider-2'))) {
		$(this).slick({
			slide: "#" + carouselId + " .js-slider-item",
			appendArrows: "#" + carouselId + " .js-slider-nav",
			prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
			nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
			infinite: false,
			slidesToShow: 2
		});
	} else if(window.devicePixelRatio < 2 && (screen.width >= 1280) && $(this).hasClass('js-slider-2')) {
		$(this).slick({
			slide: "#" + carouselId + " .js-slider-item",
			appendArrows: "#" + carouselId + " .js-slider-nav",
			prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
			nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
			infinite: false,
			slidesToShow: 3
		});
	} else {
		$(this).slick({
			slide: "#" + carouselId + " .js-slider-item",
			appendArrows: "#" + carouselId + " .js-slider-nav",
			prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
			nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
			infinite: false
		});
	}
});

//formstyler
$('.js-select select').styler();

//scrollbar
$('.jq-selectbox__dropdown ul').enscroll({
	verticalTrackClass: 'scrollbar__track',
	verticalHandleClass: 'scrollbar__handle',
	drawScrollButtons: true,
	scrollUpButtonClass: 'scrollbar__up',
	scrollDownButtonClass: 'scrollbar__down'
});

//inputmask
$(".js-tel").mask("+7 ( 9 9 9 ) 9 9 9 - 9 9 - 9 9");
$(".js-login-code").mask("9 9 9 9");

//close
$('.js-close').on('click', function () {
	$(this).parent().addClass('hide');
});

//menu
$('.js-btn-menu').on('click', function () {
	$('.js-block').addClass('hide');
	$('.js-menu').removeClass('hide');
});

//city
$('.js-btn-city').on('click', function (e) {
	e.preventDefault();
	$('.js-block').addClass('hide');
	$('.js-city').removeClass('hide');
});

//login
$('.js-btn-login').on('click', function (e) {
	e.preventDefault();
	$('.js-block').addClass('hide');
	$('.js-login').removeClass('hide');
});

/*/script*/