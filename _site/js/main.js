
$(document).ready(function() {

	// Arrow Toggle and Highlight Posts Li
	$('#posts li').hover(
		function() {
			$(this).find('.arrow').toggle(); 
			$(this).find('a, .excerpt').toggleClass('posts-link-current');
			});	


	// Highlight Current Page In Main Navigation
	var currentPage = $("body").data("current-page");
	if (currentPage) {
	    $("a[data-page-id='" + currentPage + "']").addClass("current");
	}
	// Open Twitter on a Pop-Up
	  $('.popup').click(function(event) {
	    var width  = 575,
	        height = 400,
	        left   = ($(window).width()  - width)  / 2,
	        top    = ($(window).height() - height) / 2,
	        url    = this.href,
	        opts   = 'status=1' +
	                 ',width='  + width  +
	                 ',height=' + height +
	                 ',top='    + top    +
	                 ',left='   + left;
	    
	    window.open(url, 'twitter', opts);
	 
	    return false;
	  });

});
