// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {

(function () {
   'use strict';

   $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			console.log(target.offset().top);
			if (target.length) {
	            $('#main-content').animate({
	              scrollTop: target.offset().top
	            }, 700);
	            return false;
			}
        }
	});

   $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#left-sidebar').toggleClass('active');
		});
	});
   

}());


}
main();