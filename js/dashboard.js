var exheight = 100 + "px" ;
$("html").css("height",$(window).height());
$("body").css("height","91%");
/*$(".side-nav").css("min-height",$(window).height());*/
$(".side-options").css("min-width",$(".col-lg-2").width());




$(".side-options").click(function(){
	$(".side-option-group .side-options").removeClass("selected");
	$(this).addClass("selected");


});