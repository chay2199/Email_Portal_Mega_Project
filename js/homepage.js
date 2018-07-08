
$(document).ready(function(){
	if(localStorage.getItem("Name")!="")
	{	console.log("The user is "+localStorage.getItem("Name"));
		$("body").load('./dashboard/body.html');
		$("head").load('./dashboard/head.html');
		//$("html").load('./dashboard.html');
	}
})

var db = window.openDatabase('mytasks','1.0','My tasks',5*1024*1024);
var topNavHeight = 40+"px";
$("#topContainer").css("min-height",$(window).height()-topNavHeight);
$("#topRow").css("min-height",$(window).height());
$('#topContainer').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
});

function init(){
	console.log("Database initiated.");
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS account(name TEXT, mobilenumber INTEGER, emailid TEXT UNIQUE, password TEXT )');
	});
}

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
					  	//$("#topEmail").delay(1000).animate({opacity: "1"});
					}
				console.log(value);


				},i*3400);
			i++;
	});
				
	
});

var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function myFunction() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
} 
$(".modal-content").submit(function(e){
	e.preventDefault();
});


function validateLogin(){
	console.log("Validating login...");
	db.transaction(function(tx){
		var email = $("#email").val();
		var pass = $("#pwd").val();
		tx.executeSql('select * from account where emailid = "'+ email+'" and password = "'+pass+'"',[],function(tx,results){
				console.log("Entered email is: "+ email);
				console.log("Entered password is:"+ pass);
				console.log("Number of entries in: "+results.rows.length);
				if(results.rows.length==1)
				{
					console.log("Succesfully logged in.")
					console.log(results);
					

					var res = '{\"data\":[';
						result_length = results.rows.length;
					     for(var i = 0; i < result_length; i++) {
					        res += '{\"name\":\"'+results.rows.item(i).name+'\",\"phone\":\"'+results.rows.item(i).mobilenumber+'\",\"emailid\":\"'+results.rows.item(i).emailid+'\",\"password\":\"'+results.rows.item(i).password+'\"}';
					       (i != result_length-1) && (res +=',');
					     };
				    res += ']}'
				 	var account = JSON.parse(res);
				 	console.log(account.data[0].name);
				 	console.log("Name is:" +account.data[0].name+ "\nEmail:" +account.data[0].emailid);
					
					localStorage.setItem("Name",account.data[0].name);
					$("body").load('./dashboard/body.html');
					$("head").load('./dashboard/head.html');
				
				


				}

		});
	});
}




