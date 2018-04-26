$(document).ready(function(){
	$('nav ul li').hide();
	$('nav ul li.active').show();
});

$(document).on('click', 'nav ul li.active', function(){
	$('nav ul li').toggle();
	$('nav ul li.active').show();
});
