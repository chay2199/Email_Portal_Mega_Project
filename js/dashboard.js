$("body").css("min-height",$(window).height());
$(".side-nav").css("min-height",$(window).height());
$(".side-options").css("min-width",$(".col-lg-2").width());



$(".side-options").click(function(){
	$(".side-option-group .side-options").removeClass("selected");
	$(this).addClass("selected");


});