$(document).ready(function(){
	$('.mainSlider').flexslider({
		controlNav: true,
		directionNav: true,
		slideshow: true,
		slideshowSpeed: 3000
	});
});

$(window).load(function() {

	$('.md-trigger').click(function(){
		var modalID = '#'+$(this).data('modal');
		var landing = $(modalID).has('.landing');
		var slider = $(modalID).find('.flexslider');

		slider.flexslider({
			controlNav: true,
			directionNav: false,
			animation: "slide",
			start: function(slider) {
				$('.slides li img').click(function(event) {
					event.preventDefault();
					slider.flexAnimate(slider.getTarget("next"));
				});
				$('.md-trigger').click(function(event) {
					slider.flexAnimate(0);
					slider.play();
				});
				$('.md-overlay, .md-close').click(function(event) {
					slider.flexAnimate(0);
					slider.stop();
				});
			}
		});

		if (landing.hasClass('md-modal')) {
			var scroll = landing.find('.modal_content__landing');
			var img = landing.find('.modal_content__landing img');

			var timeoutID = setTimeout(function() {
				$(scroll).animate({ scrollTop: $(img).height() }, 8000);
				setTimeout(function() {$(scroll).animate({scrollTop:0}, 8000);},2000);
			},5000);

			var intervalID = setInterval(function(){
			     // 4000 - it will take 4 secound in total from the top of the page to the bottom
				$(scroll).animate({ scrollTop: $(img).height() }, 8000);

				setTimeout(function() {
				   $(scroll).animate({scrollTop:0}, 8000); 
				},2000);
			    
			},23000);

			$(".modal_content__landing").bind('mousewheel', function(e){
				clearInterval(intervalID);
				clearTimeout(timeoutID);
				$(scroll).stop();

				setTimeout(function() {$(scroll).animate({scrollTop:0}, 1000);},5000);

				timeoutID = setTimeout(function() {
					$(scroll).animate({ scrollTop: $(img).height() }, 8000);
					setTimeout(function() {$(scroll).animate({scrollTop:0}, 8000);},2000);
				},5000);

				intervalID = setInterval(function(){
				     // 4000 - it will take 4 secound in total from the top of the page to the bottom
					$(scroll).animate({ scrollTop: $(img).height() }, 8000);

					setTimeout(function() {
					   $(scroll).animate({scrollTop:0}, 8000); 
					},2000);
				    
				},23000);
			});
		}
	});

	var autoMobileVertical = setInterval(function(){
		setTimeout(function() {
			$('.second.vertical').trigger('click');
		}, 2000);
		setTimeout(function() {
			$('.third.vertical').trigger('click');
		}, 4000);
		setTimeout(function() {
			$('.first.vertical').trigger('click');
		}, 6000);
	}, 8000);

	$('.first.vertical').click(function() {
		if ($(this).hasClass('inactive')) {
			clearInterval(autoMobileVertical);

			var first = $(this);
			var second = $(this).parent().find('.second');
			var third = $(this).parent().find('.third');

			second.removeClass('active inactive pos1 pos2 pos3 scale').addClass('inactive pos2');
			second.removeAttr('style');
			if (third.hasClass('active')) {
				second.addClass('scale').css('transform', 'scale(.95)').delay(500).queue(function() {
					$(this).css('transform', 'scale(.9)');
					$(this).dequeue();
				});
			}
			first.removeClass('inactive pos1 pos2 pos3').addClass('active pos1');
			third.removeClass('active inactive pos1 pos2 pos3').addClass('inactive pos3');

			first.css('transform', 'translate3d(-60px, 0, 0) scale(.95)').delay(500).queue(function() {
				$(this).css('transform', 'translate3d(0, 0, 0) scale(1)');
				$(this).dequeue();
			});
			third.css('transform', 'translate3d(150px, 0, 0) scale(.9)').delay(500).queue(function() {
				$(this).css('transform', 'translate3d(0, 0, 0) scale(.8)');
				$(this).dequeue();
			});
		}
	});
	$('.second.vertical').click(function() {
		if ($(this).hasClass('inactive')) {
			clearInterval(autoMobileVertical);

			var first = $(this).parent().find('.first');
			var second = $(this);
			var third = $(this).parent().find('.third');

			first.removeClass('active inactive pos1 pos2 pos3').addClass('inactive pos2');
			second.removeAttr('style');
			second.removeClass('inactive pos1 pos2 pos3 scale').addClass('active pos1');
			third.removeClass('active inactive pos1 pos2 pos3').addClass('inactive pos2');

			first.css('transform', 'translate3d(-60px, 0, 0) scale(.9)').delay(500).queue(function() {
				$(this).css('transform', 'translate3d(0, 0, 0) scale(.9)');
				$(this).dequeue();
			});
			third.css('transform', 'translate3d(150px, 0, 0) scale(.9)').delay(500).queue(function() {
				$(this).css('transform', 'translate3d(40px, 0, 0) scale(.9)');
				$(this).dequeue();
			});
		}
	});

	$('.third.vertical').click(function() {
		if ($(this).hasClass('inactive')) {
			clearInterval(autoMobileVertical);
			var first = $(this).parent().find('.first');
			var second = $(this).parent().find('.second');
			var third = $(this);

			second.removeClass('active inactive pos1 pos2 pos3 scale').addClass('inactive pos2');
			second.removeAttr('style');
			if (first.hasClass('active')) {
				second.addClass('scale').css('transform', 'scale(.95)').delay(500).queue(function() {
					$(this).css('transform', 'scale(.9)');
					$(this).dequeue();
				});
			}

			first.removeClass('active inactive pos1 pos2 pos3').addClass('inactive pos3');

			first.css('transform', 'translate3d(-60px, 0, 0) scale(.9)').delay(500).queue(function() {
				$(this).css('transform', 'translate3d(30px, 0, 0) scale(.8)');
				$(this).dequeue();
			});
			third.css('transform', 'translate3d(150px, 0, 0) scale(.95)').delay(500).queue(function() {
				third.removeClass('inactive pos1 pos2 pos3').addClass('active pos1');
				$(this).css('transform', 'translate3d(30px, 0, 0) scale(1)');
				$(this).dequeue();
			});
		}
	});
	$('.mobile').on('click', '.second.horizontal', function() {
		var first = $(this).parent().find('.first');
		var second = $(this);
		var third = $(this).parent().find('.third');

		first.removeAttr('style');
		second.removeAttr('style');
		third.removeAttr('style');

		second.css('transform', 'translate3d(0px, -200px, 0) scale(.9)').delay(500).queue(function() {
			first.removeClass('active first pos1').addClass('inactive second pos2');
			second.removeClass('inactive second pos2').addClass('active first pos1');

			$(this).css('transform', 'translate3d(0, 0, 0) scale(1)');
			$(this).dequeue();
		});
	});

	$('.mobile').on('click', '.third.horizontal', function() {
		var first = $(this).parent().find('.first');
		var second = $(this).parent().find('.second');
		var third = $(this);

		first.removeAttr('style');
		second.removeAttr('style');
		third.removeAttr('style');

		third.css('transform', 'translate3d(0px, -200px, 0) scale(.8)').delay(500).queue(function() {
			first.removeClass('active first pos1').addClass('inactive second pos2');
			second.removeClass('second pos2').addClass('third pos3');
			third.removeClass('inactive third pos3').addClass('active first pos1');

			$(this).css('transform', 'translate3d(0, 0, 0) scale(1)');
			$(this).dequeue();
		});
	});
});