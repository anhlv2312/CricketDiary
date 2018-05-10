$(document).ready(function() {
	if ($(window).width() < 750) {
		$("#trigger-icon").show();
		$("#main-menu ul").hide();
		$("#main-menu h2").show();
		$("#main-menu li.active").hide();
		$("#trigger-icon").click(function(event){
			$("#main-menu ul").toggle();
		});
	}
});