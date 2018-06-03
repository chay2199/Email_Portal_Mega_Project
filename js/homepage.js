
$("#topContainer").css("min-height",$(window).height());

$(document).ready(function()
{
	var str = ["Inbox","Drafts","Spams","Trash","Everything at one platform.","Popeye Mail"];
	var i=1;
	jQuery(str).each(function(index,value)
	{
			setTimeout(function()
				{	
					var self = this;
					$("#letters").text(value);
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
				console.log(value);


				},i*3600-3600);
			i++;
	});
				
	
});
