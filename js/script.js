$(document).ready(function() {

	// Add class js to body if JavaScript is enabled
	$('body').addClass('js');


	// Toogle the menu when menu icon is clicked (mobile devices only)
	$('#menu-icon').click(function(event){
		$('#main-menu').toggleClass('show');
	});

	// Script for Map Page
	$('#worldmap ul li h3').mouseenter(function(event){
		$(this).parent().addClass('active');
	});

	$('#worldmap ul li h3').mouseleave(function(event){
		$(this).parent().removeClass('active');
	});

	// Script for Gallery Page
	$('#slideshow').addClass('enabled');

	$('#slideshow a.next').click(function(event){
		$('#slideshow ul li:first-child').appendTo($('#slideshow ul'));
	});
	
	$('#slideshow a.prev').click(function(event){
		$('#slideshow ul li:last-child').prependTo($('#slideshow ul'));
	});

	// Script for Chapter Page
	$('#chapter-page #next-parts').hide();

	$('#chapter-page .next').click(function(event){
		console.log($('#next-parts article'))
		if ($('#next-parts article').length > 0) {
			$('#current-part').addClass('transparent');
			$('#current-part article').appendTo($('#prev-parts'));
			$('#next-parts article:first-child').prependTo($('#current-part'));
			$('#current-part a').show()
			$('html, body').animate({scrollTop:0}, 800)
			$('#current-part').removeClass('transparent');
		}
		if ($('#next-parts article').length === 0) {
			$(this).hide();
		}
		event.preventDefault();
	});

	$('#chapter-page .prev').click(function(event){
		if ($('#prev-parts article').length > 0) {
			$('#current-part').addClass('transparent');
			$('#current-part article').prependTo($('#next-parts'));
			$('#prev-parts article:last-child').prependTo($('#current-part'));
			$('#current-part .next').show()
			$('html, body').animate({scrollTop:0}, 800)
			$('#current-part').removeClass('transparent');
		} 
		if ($('#prev-parts article').length === 0) {
			$(this).hide();
		}
		event.preventDefault();
	});

	$('#chapter-page span').mouseover(function(event){
		var offset = $(this).offset();
		$('#definition').html($(this).attr('alt'));
		$('#definition').show();
		$('#definition').css({
			left: offset.left,
			top: offset.top + 25
		});
	});

	$('#chapter-page span').mouseout(function(event){
  		event.stopPropagation();
		$('#definition').hide();
	});

	// Script for Feeback Form 
	$('#feedback form').submit(function(event){
		var complete = true;
		var fullname = $('#form-fullname').val();
		var postcode = $('#form-postcode').val();
		var state = $('#form-state').val();
		var email = $('#form-email').val();
		var comment = $('#form-comment').val();

		if (fullname == '') {
			$('#form-fullname').addClass('error');
			$('#form-fullname').parent().find('label').addClass('error');
			complete = false;
		}

		// Check if postcode is 4 digits number
		if (postcode.length !=4 || isNaN(postcode)) {
			$('#form-postcode').addClass('error');
			$('#form-postcode').parent().find('label').addClass('error');
			complete = false;
		}

		// Check if email input is valid
		if (!validateEmail(email)) {
			$('#form-email').addClass('error');
			$('#form-email').parent().find('label').addClass('error');
			complete = false;
		}

		if (comment == '') {
			$('#form-comment').addClass('error');
			complete = false;
		}

		// If the form is completed, add the content to testimoial section
		// and hide the feedback form
		if (complete) {
			$('#testimonial').append('<article></article>');
			$('#testimonial article:last-of-type').append('<h4>' + fullname + ', ' + state + '</h4>');
			$('#testimonial article:last-of-type').append('<blockquote>' + comment + '</blockquote>');
			$('#feedback').hide();
		} 

		event.preventDefault();
	});

	// Clear error state of the input if user start typing on it
	$('#form-fullname, #form-postcode, #form-email, #form-comment').keydown(function(event){
		$(this).removeClass('error');
		$(this).parent().find('label').removeClass('error');
	});

});

// Email Validation Function
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}












