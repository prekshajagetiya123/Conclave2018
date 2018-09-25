jQuery(document).ready(function(){

	setInterval(function(){
		$('.scroll-link').addClass('neeche')
			setTimeout(function(){
				$('.scroll-link').removeClass('neeche')
		}, 900)
	}, 1800)

	$(window).resize(function(){
		var wid=$('.portfolio-img').width();
		$('.details').css('width', ''+wid+'');
    var htemp=$(window).innerHeight();
    $('.hero').css('height', ''+htemp+'');
	})

	$(window).load(function(){
		var wid=$('.portfolio-img').width();
		$('.details').css('width', ''+wid+'');
    var htemp=$(window).innerHeight();
    $('.hero').css('height', ''+htemp+'');
	})

	$('.scroll-link').click(function(){
		$('html, body').animate({ scrollTop: $('.about').offset().top}, 750)
	})

	$('.author').click(function(){
		window.open("https://github.com/EDCBVUCOEP")
	})

	/*When clicking on Full hide fail/success boxes */
	$('#name').focus(function() {
  		$('#success').html('');
	})

})