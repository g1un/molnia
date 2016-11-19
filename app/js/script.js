/*script*/
//slider
$('.js-slider').each(function (idx, item) {
	var carouselId = "slider-" + idx;
	this.id = carouselId;
	$(this).slick({
		slide: "#" + carouselId + " .js-slider-item",
		appendArrows: "#" + carouselId + " .js-slider-nav",
		prevArrow: '<button type="button" class="js-slider-prev">prev</button>',
		nextArrow: '<button type="button" class="js-slider-next">next</button>'
	});
});

//formstyler
$('.js-select select').styler();
/*/script*/