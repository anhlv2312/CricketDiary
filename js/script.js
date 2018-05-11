$(document).ready(function() {
	
	if ($(window).width() < 750) {
		$('#main-menu h2').show();
		$('#main-menu ul').hide();
		$('#main-menu li.active').hide();

		$('#trigger-icon').show();
		$('#trigger-icon').click(function(event){
			$('#main-menu ul').toggle();
		});	
	} else {
		$('#float-list').show();
		$('#static-list').hide();
		$('#float-list li p').hide();
	}
	
	$('#slideshow ul li').hide();
	$('#slideshow ul li:first-child').show();
	$('#slideshow a').show();

	$('#slideshow a.next').click(function(event){
		$('#slideshow ul li').hide();
		$('#slideshow ul li:first-child').appendTo($('#slideshow ul'));
		$('#slideshow ul li:first-child').show();
	});
	
	$('#slideshow a.prev').click(function(event){
		$('#slideshow ul li').hide();
		$('#slideshow ul li:last-child').prependTo($('#slideshow ul'));
		$('#slideshow ul li:last-child').show();
	});

	$('#float-list li h2').mouseenter(function(event){
		$(this).parent().children("p").show(); 
		$(this).parent().children("p").addClass('active');
	});
	$('#float-list li h2').mouseleave(function(event){
		$(this).parent().children("p").removeClass('active');
		$(this).parent().children("p").hide(); 
	});

});