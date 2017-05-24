function headerFn() {
	var scrollTop = $(window).scrollTop(),
		  offsetTop = 350;

	if(scrollTop >= offsetTop) {
		$('.header').addClass('js-isCollapsed');
	} else {
		$('.header').removeClass('js-isCollapsed');
	}
} // headerFn()


function smoothScrollFn() {
	$('a[href^="#"]').on('click',function (e) {
		var $this = $(this);
        e.preventDefault();

        var headerOffset = 110,
            target = this.hash,
            $target = $(target).offset().top - headerOffset;


        $('html, body').stop().animate({
            'scrollTop': $target
        }, 600, 'swing');
	});
} // smoothScrollFn()


function parallax() {
	var wScroll = $(this).scrollTop();

	if ($(window).width() > 1199) {
		$('.hero').css({
			'backgroundPosition'   : 'center '+ wScroll/2 +'px'
		});
	} else {
		$('.hero').css({
			'backgroundPosition'   : 'center bottom'
		});
	}
} // parallax()












$(document).ready(function() {
	
    parallax();
    
    smoothScrollFn();
    
    
    $('select').select2({
        minimumResultsForSearch: -1
    });

}); //jqr




$(window).scroll(function() {
	"use strict";
    
    headerFn();

	parallax();
});



$(window).resize(function() {
	"use strict";
    
    headerFn();

	parallax();
});

