$(document).ready(function () {
	$('.header__burger, nav ul a').click(function (event) {
		$('.header__burger,.header__panel').toggleClass('active');
		$('body').toggleClass('lock');
	});

});
