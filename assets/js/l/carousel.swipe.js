$(document).ready(function() {  
	$("#current-projects-carousel").swiperight(function() {  
		$(this).carousel('prev');  
	});  
	$("#current-projects-carousel").swipeleft(function() {  
		$(this).carousel('next');  
	});  
}); 