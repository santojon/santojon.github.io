// js functions
function hideIndexelements() {
	$('#index-link').fadeOut();

	setTimeout(function() {
		$('#index-content').fadeOut();

		setTimeout(function() {
			$('#navbar-bottom').fadeIn();

			setTimeout(function() {
				$('#login-content').fadeIn();
			}, 300);
		}, 500);
	}, 300);
}

function showHome(element) {
	$(element).fadeOut();

	setTimeout(function() {
		$('.login-bg').fadeOut();

		setTimeout(function() {
			$(element).removeClass('navbar-fixed-bottom');
			$(element).fadeIn();

			setTimeout(function() {
				$('#home-content').fadeIn();
			}, 500);
		}, 500);
	}, 500);
}

function rolada(element) {
	$('html, body').animate({
		scrollTop: $(element).offset().top
	}, 2000);
}