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
		// $('#sidebarCollapse').on('click', function () {
		// 	$('#left-sidebar').toggleClass('active');
		// });

    $('#main-content').fullpage();
    
	});
   

}());

;(function(){
  /*
   * SVG Pie Chart Generator 
   *
   * Inserts a SVG pie chart inside elements with a `data-pie` attribute containing the colors and numbers. Total is generated dynamically, so the numbers do not have to be a percentage.
   * Example: `<div data-pie="#fab484 5, #fe8e3f 3, #f96b07 3, #b45919 3, #7f4319 1"></div>`
   */ 

  var template = {
    open: '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><circle id="graph" r="15.9154943092" cx="16" cy="16" transform="rotate(-90 16 16)" /><mask id="clip"><use xlink:href="#graph" fill="#FFF" /></mask></defs><g class="graph" mask="url(#clip)" stroke-width="32">',
    piece: '<use class="graph__percent graph__percent--{{num}}" xlink:href="#graph" fill="none" stroke="{{color}}" stroke-dasharray="0 {{offset}} {{percent}} 100" />',
    close: '</g></svg>'
  };
  var regex = {
    number: /([0-9]+)$/i,
    color: /(#[0-9A-Z]+)/i
  };

  function Piece(data){
    data = data.trim();
    this.number = parseInt(data.match(regex.number));
    this.color = data.match(regex.color)[1];
  }

  Piece.prototype.render = function(total,num) {
    return template.piece
      .replace('{{num}}',num)
      .replace('{{color}}',this.color)
      .replace('{{offset}}',(this.offset / total) * 100)
      .replace('{{percent}}',(this.number / total) * 100);
  }

  function Pie(elem){
    this.data = elem.getAttribute('data-pie').split(',');
    this.pieces = [];
    this.total = 0;

    var output = "", 
        len = this.data.length,
        piece, i;

    for (i = 0; i < len; i++) {
      piece = new Piece(this.data[i]);
      piece.offset = this.total;
      this.total += piece.number;
      this.pieces.push(piece); 
    }

    len = this.pieces.length;
    for (i = 0; i < len; i++) {
      output += this.pieces[i].render(this.total,i);
    }

    elem.innerHTML = template.open + output + template.close;
  }

  var pies = document.querySelectorAll('[data-pie]');

  for (i = 0; i < pies.length; i++) { new Pie(pies[i]); }

}());

}
main();