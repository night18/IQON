function main() {

(function () {
   'use strict';
   let previousHeight = 0;
   let newHeight = 0;

   $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						
			newHeight = target.offset().top + previousHeight;
			previousHeight = newHeight;

			if (target.length) {

	            $('#main-content').animate({
	              scrollTop:newHeight
	            }, 900);

	            if( $('#main-content').prop("scrollHeight") - $('#main-content').height() < previousHeight ){
	            	previousHeight = $('#main-content').prop("scrollHeight") - $('#main-content').height();
	            }

	            return false;
			}
        }
	});

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#left-sidebar').toggleClass('active');
		});
	});
   

}());


}
main();