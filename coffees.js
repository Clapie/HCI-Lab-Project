$(function(){

	let width = 400;
	let speed = 1000;
	let pause = 2500;
	let currSlide = 1;

	let $sliderContainer = $('.slides');

	let interval;

	startSlider();

	$('#backBtn').click(function(){
		clearInterval(interval);

        if(currSlide == 1){
            $sliderContainer.animate({'margin-left': '-=' + 2*width}, speed, function(){currSlide = 7});
        } else {
            $sliderContainer.animate({'margin-left': '+=' + width}, speed,function(){currSlide--})
        }
        

        startSlider()
	});

	$('#forwardBtn').click(function(){
		clearInterval(interval)
        $sliderContainer.animate({'margin-left': '-=' + width}, speed, function(){currSlide++})
        startSlider()
	});

	function startSlider(){
		interval =	setInterval(
		function(){
			$sliderContainer.animate({'margin-left': '-=' + width}, speed, 
			function(){
				currSlide++;
				if(currSlide > 7){
					currSlide = 1;
					$sliderContainer.css('margin-left', 0);
				}
			});
		}
		, pause);
	}
})