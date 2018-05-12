$(document).ready(function() {

	$('body').addClass('js');
	
	$('#trigger-icon').click(function(event){
		$('#main-menu').toggleClass('show');
	});

	$('#worldmap ul li h2').mouseenter(function(event){
		$(this).addClass('active');
		$(this).parent().children("p").addClass('active');
	});

	$('#worldmap ul li h2').mouseleave(function(event){
		$(this).removeClass('active');
		$(this).parent().children("p").removeClass('active');

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

});