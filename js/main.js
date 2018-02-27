function sectionAnimate(index, nextIndex, direction){
  
 
  /* this code is part of the onLeave callback */   
  if( nextIndex == 4 ) {
    var $isAnimatedSecond = $('#ourteam .is-animated');
    for(var i = 0; i < 16 ; i++){
      if(i/4 < 1){
        $isAnimatedSecond.eq(i).addClass('animated fadeInDownBig'); 
      }else if(i/4 < 2){
        $isAnimatedSecond.eq(i).addClass('animated fadeInUpBig');
      }
    } 
    $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
    $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
    $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
    $isAnimatedSecond.eq(3).css('animation-delay', '.12s');
    $isAnimatedSecond.eq(7).css('animation-delay', '.3s');
    $isAnimatedSecond.eq(6).css('animation-delay', '.6s');
    $isAnimatedSecond.eq(5).css('animation-delay', '.9s');
    $isAnimatedSecond.eq(4).css('animation-delay', '.12s');
  }
}

function slideAnimate(anchorLink, index, slideIndex, direction, nextSlideIndex){
  
 
  if( anchorLink == 'team' && slideIndex == 0 && nextSlideIndex == 1){
    console.log('!!!');
    var $isAnimatedSecond = $('#ouradvisor .is-animated');
    for(var i = 0; i < 16 ; i++){
      if(i/4 < 1){
        $isAnimatedSecond.eq(i).addClass('animated fadeInDownBig'); 
      }else if(i/4 < 2){
        $isAnimatedSecond.eq(i).addClass('animated fadeInUpBig');
      }
    } 
    $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
    $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
    $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
    $isAnimatedSecond.eq(3).css('animation-delay', '.12s');
    $isAnimatedSecond.eq(7).css('animation-delay', '.3s');
    $isAnimatedSecond.eq(6).css('animation-delay', '.6s');
    $isAnimatedSecond.eq(5).css('animation-delay', '.9s');
    $isAnimatedSecond.eq(4).css('animation-delay', '.12s');
  }
  
}


function main() {

(function () {
   'use strict';




	$(document).ready(function () {
		$('#menu-bar').on('click', function () {
			$('#left-sidebar').toggleClass('active');
      $('#main-content').toggleClass('active');
      $('#menu-bar').toggleClass('active');
		});

    $('#main-content').fullpage({
      loopHorizontal: false,
      slidesNavigation: true,
      scrollOverflow: true,
      bigSectionsDestination: top,
      // normalScrollElements:'#tf-roadmap',
      anchors:['home', 'mission', 'work', 'team', 'fund'],
      onLeave: function(index, nextIndex, direction){
        sectionAnimate(index, nextIndex, direction);
        console.log('i:'+index+' n:'+nextIndex);
      },
      onSlideLeave (anchorLink, index, slideIndex, direction, nextSlideIndex){
        slideAnimate(anchorLink, index, slideIndex, direction, nextSlideIndex);
        console.log('a:'+ anchorLink+'i:'+slideIndex+' n:'+nextSlideIndex);
      }
    });
    
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