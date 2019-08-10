// JavaScript Document
/*var num = 0;
function myFunction(){
	num++;
	if(num == 6)
		num = 0;
	var x = document.getElementById("banner") ;
	x.src = "images/banner" + num + ".jpg" ;
	x.style.height = "873px" ;
}
function myFunction1(){
	num--;
	if(num < 0)
		num = 5 ;
	var y = document.getElementById("banner") ;
	y.src ="images/banner" + num + ".jpg" ;
	y.style.height = "873px" ;
}

setInterval(function(){myFunction();}, 2000);*/
function myFunction() {
  var x = document.getElementById("top-menu");
  if (x.className == "top-menu") {
    x.className += " responsive";
  } else {
    x.className = "top-menu";
  }
}

function timKiem(obj)
{
	var t = obj.value;
	var menu = document.querySelectorAll(".vertical-menu li");
	for(var i = 0; i < menu.length; i++)
		menu[i].style.border = "";
	
	for(var i = 0; i < menu.length; i++)
	{
		var text = menu[i].getElementsByTagName("a")[0].innerText;
		if(text.indexOf(t) >= 0)
			menu[i].style.border = "1px solid red";
	}
}