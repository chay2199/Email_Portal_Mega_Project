var topNavHeight = 40+"px";
$("#topContainer").css("min-height",$(window).height()-topNavHeight);
$("#topRow").css("min-height",$(window).height());
$('#topContainer').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
});


$(document).ready(function()
{
	var str = ["Inbox","With Style","Dank Mail"];
	var i=0;
	jQuery(str).each(function(index,value)
	{		
			setTimeout(function()
				{	
					var self = this;
					console.log(index);
					if(index==2)
					{
						$("#letters").css("font-family","'Sacramento', cursive");
						$("#letters").css("vertical-align","middle");
						console.log("Font has been changed");

					}
					$("#letters").text(value);
					if(index<2)
					{
						anime.timeline({loop: false})
						.add({
					    targets: '.ml9',
					    opacity: 1,
					    duration: 1000,
					    easing:"easeInExpo",
					    delay: 0
					  	})
					  	.add({
					    targets: '.ml9',
					    opacity: 0,
					    duration: 1200,
					    easing: "easeOutExpo",
					    delay: 1000
						});	
					}
					if(index==2)
					{
						anime.timeline({loop: false})
						.add({
					    targets: '.ml9',
					    opacity: 1,
					    duration: 1000,
					    easing:"easeInExpo",
					    delay: 0
					  	});
					  	$("#topEmail").delay(1000).animate({opacity: "1"});
					}
				console.log(value);


				},i*3400);
			i++;
	});
				
	
});
