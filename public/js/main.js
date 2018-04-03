$(function(){

	// Typed title
	var typed = new Typed("#change-word", {
	    strings: ["ресторан", "кафе", "бар", "кальянную", "сеть заведений"],
	    typeSpeed: 120,
	    loop: true
	});

	// Project slider
	let currentCase = 0;
	let cases = $(".case-item");
	$(".arrow-left").click(function(){
		
			cases.eq(currentCase).addClass("fadeOutRight");
			cases.eq(currentCase-1).removeClass("fadeOutLeft fadeOutRight fadeInRight").addClass("fadeInLeft").css({"display":"block"});
			currentCase--;
			console.log(currentCase);

		if (currentCase == 0) {
			cases.eq(currentCase).addClass("fadeOutRight");
			cases.eq(3).removeClass("fadeOutLeft fadeOutRight fadeInRight").addClass("fadeInLeft").css({"display":"block"});
			currentCase = 3;
			console.log(currentCase);
		}
		
	});
	$(".arrow-right").click(function(){
			cases.eq(currentCase).addClass("fadeOutLeft");
			cases.eq(currentCase+1).removeClass("fadeOutLeft fadeOutRight fadeInLeft").addClass("fadeInRight").css({"display":"block"});
			currentCase++;
			console.log(currentCase);

		if (currentCase == 3) {
			cases.eq(currentCase).addClass("fadeOutLeft");
			cases.eq(0).removeClass("fadeOutLeft fadeOutRight fadeInLeft").addClass("fadeInRight").css({"display":"block"});
			currentCase = 0;
			console.log(currentCase);
		}
	});

	// Scroll to form
	$('a.primary__btn').on('click' , function(){
	    $('html, body').animate({scrollTop: $('#cta').offset().top - 70}, 1000);

	    return false;
	});

});