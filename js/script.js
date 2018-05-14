$(document).ready(function() {

	$('body').addClass('js');
	
	$('#trigger-icon').click(function(event){
		$('#main-menu').toggleClass('show');
	});

	$('#worldmap ul li').mouseover(function(event){
		$(this).addClass('active');

	});

	$('#worldmap ul li').mouseout(function(event){
		$(this).removeClass('active');
	});

	$('#slideshow').addClass('enabled');

	$('#slideshow a.next').click(function(event){
		$('#slideshow ul li:first-child').appendTo($('#slideshow ul'));
	});
	
	$('#slideshow a.prev').click(function(event){
		$('#slideshow ul li:last-child').prependTo($('#slideshow ul'));
	});

	$('button#submit').click(function(event){
		alert("Sorry, this function hasn't been implemented!");
		event.preventDefault();
	});


	$('#chapter-page #next-parts').hide();
	$('#chapter-page #part-menu').show();

	$('#chapter-page .next').click(function(event){
		if ($('#next-parts article').length > 0) {
			$('#current article').appendTo($('#prev-parts'));
			$('#next-parts article:first-child').prependTo($('#current'));
			$(document).scrollTop(0);
		} else {
			alert('This is the last page')
		}
		event.preventDefault();
	});

	$('#chapter-page .prev').click(function(event){
		if ($('#prev-parts article').length > 0) {
			$('#current article').appendTo($('#next-parts'));
			$('#prev-parts article:last-child').prependTo($('#current'));
			$(document).scrollTop(0);
		} else {
			alert('This is the first page')
		}
		event.preventDefault();
	});

});