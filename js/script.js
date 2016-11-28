/*script*/
$(document).ready( function () {
	// alert(window.devicePixelRatio + ' ' + screen.width + ' ' + screen.height + ' ' + window.orientation);
	// alert(window.devicePixelRatio + ' ' + window.innerWidth + ' ' + window.innerHeight + ' ' + window.orientation);
});

//slider
$('.js-slider').each(function (idx, item) {
	var carouselId = "slider-" + idx;
	this.id = carouselId;

	if(window.devicePixelRatio < 2 && ((window.innerWidth >= 768 && window.innerWidth < 1280) && $(this).hasClass('js-slider-2'))) {
		if($(this).hasClass('js-slider-not-infinite')) {
			$(this).slick({
				slide: "#" + carouselId + " .js-slider-item",
				appendArrows: "#" + carouselId + " .js-slider-nav",
				prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
				nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
				infinite: false,
				slidesToShow: 2
			});
		} else {
			$(this).slick({
				slide: "#" + carouselId + " .js-slider-item",
				appendArrows: "#" + carouselId + " .js-slider-nav",
				prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
				nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
				infinite: true,
				slidesToShow: 2
			});
		}
	} else if(window.devicePixelRatio < 2 && (window.innerWidth >= 1280) && $(this).hasClass('js-slider-2')) {
		if($(this).hasClass('js-slider-not-infinite')) {
			$(this).slick({
				slide: "#" + carouselId + " .js-slider-item",
				appendArrows: "#" + carouselId + " .js-slider-nav",
				prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
				nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
				infinite: false,
				slidesToShow: 3
			});
		} else {
			if($(this).hasClass('js-slider-not-infinite')) {
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
					infinite: true,
					slidesToShow: 3
				});
			}
		}
	} else {
		if($(this).hasClass('js-slider-not-infinite')) {
			$(this).slick({
				slide: "#" + carouselId + " .js-slider-item",
				appendArrows: "#" + carouselId + " .js-slider-nav",
				prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
				nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
				infinite: false
			});
		} else {
			$(this).slick({
				slide: "#" + carouselId + " .js-slider-item",
				appendArrows: "#" + carouselId + " .js-slider-nav",
				prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
				nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
				infinite: true
			});
		}
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

//cite
$('.js-logo').on('click', function (e) {
	$('.js-logo-cite').removeClass('hide');
});

//slider with repair places change
if($('.js-places-slider').length) {
	var sliderPlaces = $('.js-places-slider');
	sliderPlaces.slick({
		slide: ".js-places-slider .js-slider-item",
		appendArrows: ".js-places-slider .js-slider-nav",
		prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
		nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
		slidesToShow: 1,
		autoplay: true
	});

	var sliderPlacesArray = ["в спортзале", "дома", "в офисе"];
	var sliderPlacesText = $('.js-places-text');

	sliderPlaces.on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSlide = $('.js-places-slider .slick-current');

		if(currentSlide.hasClass('intro-slider__gym')) {
			sliderPlacesText.text(sliderPlacesArray[0]);
		} else
		if(currentSlide.hasClass('intro-slider__home')) {
			sliderPlacesText.text(sliderPlacesArray[1]);
		} else
		if(currentSlide.hasClass('intro-slider__office')) {
			sliderPlacesText.text(sliderPlacesArray[2]);
		}
	});
}

//prices slider
if($('.js-prices-slider').length) {
	var sliderPrices = $('.js-prices-slider');
	sliderPrices.slick({
		slide: ".js-prices-slider .js-slider-item",
		appendArrows: ".js-prices-slider .js-slider-nav",
		prevArrow: '<button type="button" class="slider-nav__prev js-slider-prev">prev</button>',
		nextArrow: '<button type="button" class="slider-nav__next js-slider-next">next</button>',
		asForNav: '.js-prices-nav',
		infinite: true,
		slidesToShow: 1
	});

	var pricesNavDot = $('.js-prices-nav a');
	pricesNavDot.on('click', function (e) {
		e.preventDefault();
		pricesNavDot.removeClass('active');
		$(this).addClass('active');
		sliderPrices.slick('slickGoTo', $(this).parent().index());
	});

	sliderPrices.on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSlide = $('.js-prices-slider .slick-current');
		var defectInfoWrapper = $('.js-defect-info');

		if(currentSlide.hasClass('prices__watch')) {
			defectInfoWrapper.hide();
			pricesNavDot.removeClass('active');
			$(pricesNavDot[0]).addClass('active');
			$('.prices-device__watch').show();
		} else
		if(currentSlide.hasClass('prices__iphone')) {
			defectInfoWrapper.hide();
			pricesNavDot.removeClass('active');
			$(pricesNavDot[1]).addClass('active');
			$('.prices-device__iphone').show();
		} else
		if(currentSlide.hasClass('prices__ipod')) {
			defectInfoWrapper.hide();
			pricesNavDot.removeClass('active');
			$(pricesNavDot[2]).addClass('active');
			$('.prices-device__ipod').show();
		}
	});
}

//prices info
if($('.js-defect-points').length) {
	var defectPoint = $('.js-defect-points li');
	var defectInfo = $('.js-defect-info .two-columns');

	defectPoint.hover(
		function() {
			defectInfo.hide();
			$(defectInfo[$(this).index()]).show();
			$(defectInfo[$(this).index()]).children('p').show();
		},
		function() {
			defectInfo.show();
			$(defectInfo[$(this).index()]).children('p').hide();
		}
	);
}
/*/script*/