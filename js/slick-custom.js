

 mobileOnlySlider(".slider-outer", true, false, 479);

function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
	var slider = $($slidername);
	var settings = {
		mobileFirst: true,
    autoplay: true,
		responsive: [
			{
				breakpoint: $breakpoint,
				settings: "unslick"
			}
		]
	};

	slider.slick(settings);

	$(window).on("resize", function () {
		if ($(window).width() > $breakpoint) {
			return;
		}
		if (!slider.hasClass("slick-initialized")) {
			return slider.slick(settings);
		}
	});
} 


