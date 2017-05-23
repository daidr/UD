$(function() {
	$(".loading").load("img/udlogo_animation.svg");
	setTimeout("$('.loading').slideUp('slow');", 5500);
	setTimeout("$('.loading').remove();", 10000);
	$(".header").load("page/header." + language("get") + ".ud");
	$(".slide").load("page/index.slide." + language("get") + ".ud");
	$(".projects").load("page/index.projects." + language("get") + ".ud");
});

$(window).scroll(function(){
var s=$(window).scrollTop();
if(s>20){
	$(".navbar").css("background", "#686967");
} else {
	$(".navbar").css("background", "transparent");
}
});