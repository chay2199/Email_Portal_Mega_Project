console.log("Executed.");
var exheight = 100 + "px" ;
$("html").css("height",$(window).height());
$("body").css("height","91%");
$(".side-options").css("min-width",$(".col-lg-2").width());

/*$(".side-nav").css("min-hei
ght",$(window).height());*/



$(".side-options").click(function(){
	$(".side-option-group .side-options").removeClass("selected");
	$(this).addClass("selected");


});
var name = localStorage.getItem("Name");
$("#username").html(name);



	console.log("The user is:" + localStorage.getItem("Name"));

	//window.location.reload();


$("#inbox").click(function(){
	localStorage.setItem("Name","");
	console.log("The value has been changed:"+localStorage.getItem("Name"));
	window.location.reload();
});