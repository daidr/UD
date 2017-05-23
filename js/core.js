$(function() {
	$(".loading").load("img/udlogo_animation.svg");
	setTimeout("$('.loading').slideUp('slow');", 5500);
	setTimeout("$('.loading').remove();", 10000);
	$(".header").load("page/header." + language("get") + ".ud");
	$(".slide").load("page/index.slide.cn.ud");
	$(".projects").load("page/index.projects." + language("get") + ".ud");
});
