
var db = window.openDatabase('mytasks','1.0','My tasks',5*1024*1024);
//the account is being created
function init(){
	console.log("Database initiated.");
	db.transaction(function(tx){
		tx.executeSql('CREATE TABLE IF NOT EXISTS account(name TEXT, mobilenumber INTEGER, emailid TEXT UNIQUE, password TEXT )');
	});
}
	
	function add() {
		console.log("tryin to add in the database");
		db.transaction(function(tx){
			var name = $("#name").val();
			var mobilenumber = $("#phone").val();
			var email = $("#email").val();
			var pass = $("#pass").val();
			tx.executeSql('insert into account values(?,?,?,?)',[name,mobilenumber,email,pass]);

			
		})
	}

function myFunction() {
	var x = document.getElementById("pass");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
	console.log("I exist here too :p");
} 
	
	function validateEmail(Email) {
		
		var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		console.log("the email is being validated");
		return $.trim(Email).match(pattern) ? true : false;
		
	}

	function validateMobile(Mobile){

		var pattern = /^[789]\d{9}$/;
		console.log("the phone is being validated");
		return $.trim(Mobile).match(pattern)? true:false;
		
	}
	function validateForm() {
		console.log("Js: active");
		var errorMessage = "";
		
		event.preventDefault();
		var key=1;
		if ($("#name").val()=="") {
			errorMessage+="Please enter your name."
			$("#name").css("background-color","#F3FB99");
		}
		if(validateEmail($("#email").val())!=true||$("#email").val()=="") 
		{
			errorMessage="Please enter a valid email address. ";
			key=0;
			console.log("Entered the email if")
			$("#email").css("background-color","#F3FB99");

		}
		if(validateMobile($("#phone").val())!=true||$("#phone").val()=="")
		{
			errorMessage+="<br>Please enter a valid Mobile Number";
			key=0;
			$("#phone").css("background-color","#F3FB99");
		}
		if($("#pass").val()!=$("#cpass").val()||$("#pass").val()=="")
		{
			errorMessage+= "<br>Passwords do not match.";
			key=0;
			$("#pass").css("background-color","#F3FB99");
			$("#cpass").css("background-color","#F3FB99");

		}
		if(key==1)
		{
			alert("The form filled succesfully");
			add();
			window.location = "./homepage.html";
		}
		$("#error").html(errorMessage);
	}

		

	
	$(".modal-content").submit(
			function(event){
				event.preventDefault();
			}
		);
