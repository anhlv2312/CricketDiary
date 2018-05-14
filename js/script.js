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

});