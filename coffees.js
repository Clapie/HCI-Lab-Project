$(function(){

	let width = 720;
	let speed = 1000;
	let pause = 2500;
	let currSlide = 1;

	let $sliderContainer = $('.slides');

	let interval;

	startSlider();

	$('#backBtn').click(function(){
		clearInterval(interval);

		if(currSlide == 1){
			$sliderContainer.animate({'margin-left': '-=' + 2*width}, speed, function(){
				currSlide=8;
			});
		}
		else{
			$sliderContainer.animate({'margin-left': '+=' + width}, speed, function(){
				currSlide--;
			});
		}

		startSlider();
	});

	$('#forwardBtn').click(function(){
		clearInterval(interval);

		if(currSlide == 8){
			$sliderContainer.animate({'margin-left': '+=' + width}, speed, function(){
				currSlide = 1;
			});
		}
		else{
			$sliderContainer.animate({'margin-left': '-=' + 2*width}, speed, function(){
				currSlide++;
			});
		}
		

		startSlider();
	});

	function startSlider(){
		interval =	setInterval(
		function(){
			$sliderContainer.animate({'margin-left': '-=' + width}, speed, 
			function(){
				currSlide++;
				if(currSlide > 8){
					currSlide = 1;
					$sliderContainer.css('margin-left', 0);
				}
			});
		}
		, pause);
	}
})
