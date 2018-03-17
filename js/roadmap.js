function roadmap() {

(function () {
   'use strict';

	$(document).ready(function () {

	    let swiper = new Swiper('.swiper-container', {
	      direction: 'vertical',
	      slidesPerView: 'auto',
	      freeMode: true,
	      mousewheel: true,
	    });


	    $('.timeline-row').on('click', function (){
	      if(!$(this).data('focused')){
	        $(this).data('focused', true);
	        $(this).data('float', $(this).css('float'));
	        $(this).css('float', 'none');
	        $(this).parent().css('clear', 'both');

	        $(this).parent().addClass('timeline-active');


	      }else{//focused
	        $(this).css('float', $(this).data('float'));
	        $(this).parent().css('clear', 'none');
	        $(this).data('focused', false);

	        $(this).parent().removeClass('timeline-active');
	      }
	      
	    });
    
	});


}());

}

roadmap();