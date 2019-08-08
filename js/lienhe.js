// JavaScript Document
$(document).ready(function(){
			
			$(window).scroll(function(){
				if($(this).scrollTop() > 80)
				{
					$(".arrow, #top-nav1").fadeIn(400);
					$("#top-nav1").css({"position":"fixed","top":"0"});
				}
				else
				{
					$(".arrow, #top-nav1").fadeOut(400);
				}
				
			})
			
			$(".arrow").click(function(){
				$("html, body").animate({scrollTop: 0}, 1000) ;
			});
			
			var a = 1;
			$("#quan7").click(function(){
				$("#quan7 p").slideToggle(500);
				$("#quan7 i").removeClass();
				if(a % 2 == 0)
				{
					$("#quan7 h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#quan7 i").addClass("fa fa-caret-right");
					$("#quan7 i").css("marginRight", "0px");
				}
				else
				{
					$("#quan7 h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#quan7 i").addClass("fa fa-caret-down");
					$("#quan7 i").css("marginRight", "2px");
				}
				a++;
				
			});
			var b = 1;
			$("#quan1").click(function(){
				$("#quan1 p").slideToggle(500);
				$("#quan1 i").removeClass();
				if(b % 2 == 0)
				{
					$("#quan1 h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#quan1 i").addClass("fa fa-caret-right");
					$("#quan1 i").css("marginRight", "0px");
				}
				else
				{
					$("#quan1 h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#quan1 i").addClass("fa fa-caret-down");
					$("#quan1 i").css("marginRight", "2px");
				}
				b++;
			});
			var c = 1;
			$("#phunhuan").click(function(){
				$("#phunhuan p").slideToggle(500);
				$("#phunhuan i").removeClass();
				if(c % 2 == 0)
				{
					$("#phunhuan h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#phunhuan i").addClass("fa fa-caret-right");
					$("#phunhuan i").css("marginRight", "0px");
				}
				else
				{
					$("#phunhuan h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#phunhuan i").addClass("fa fa-caret-down");
					$("#phunhuan i").css("marginRight", "2px");
				}
				c++;
			});
			var d = 1;
			$("#quan3").click(function(){
				$("#quan3 p").slideToggle(500);
				$("#quan3 i").removeClass();
				if(d % 2 == 0)
				{
					$("#quan3 h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#quan3 i").addClass("fa fa-caret-right");
					$("#quan3 i").css("marginRight", "0px");
				}
				else
				{
					$("#quan3 h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#quan3 i").addClass("fa fa-caret-down");
					$("#quan3 i").css("marginRight", "2px");
				}
				d++;
			});
			var e = 1;
			$("#quan10").click(function(){
				$("#quan10 p").slideToggle(500);
				$("#quan10 i").removeClass();
				if(e % 2 == 0)
				{
					$("#quan10 h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#quan10 i").addClass("fa fa-caret-right");
					$("#quan10 i").css("marginRight", "0px");
				}
				else
				{
					$("#quan10 h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#quan10 i").addClass("fa fa-caret-down");
					$("#quan10 i").css("marginRight", "2px");
				}
				e++;
			});
			var f = 1;
			$("#tanbinh").click(function(){
				$("#tanbinh p").slideToggle(500);
				$("#tanbinh i").removeClass();
				if(f % 2 == 0)
				{
					$("#tanbinh h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#tanbinh i").addClass("fa fa-caret-right");
					$("#tanbinh i").css("marginRight", "0px");
				}
				else
				{
					$("#tanbinh h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#tanbinh i").addClass("fa fa-caret-down");
					$("#tanbinh i").css("marginRight", "2px");
				}
				f++;
			});
			var g = 1;
			$("#tanphu").click(function(){
				$("#tanphu p").slideToggle(500);
				$("#tanphu i").removeClass();
				if(g % 2 == 0)
				{
					$("#tanphu h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#tanphu i").addClass("fa fa-caret-right");
					$("#tanphu i").css("marginRight", "0px");
				}
				else
				{
					$("#tanphu h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#tanphu i").addClass("fa fa-caret-down");
					$("#tanphu i").css("marginRight", "2px");
				}
				g++;
			});
			var h = 1;
			$("#thuduc").click(function(){
				$("#thuduc p").slideToggle(500);
				$("#thuduc i").removeClass();
				if(h % 2 == 0)
				{
					$("#thuduc h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#thuduc i").addClass("fa fa-caret-right");
					$("#thuduc i").css("marginRight", "0px");
				}
				else
				{
					$("#thuduc h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#thuduc i").addClass("fa fa-caret-down");
					$("#thuduc i").css("marginRight", "2px");
				}
				h++;
			});
			var k = 1;
			$("#binhthanh").click(function(){
				$("#binhthanh p").slideToggle(500);
				$("#binhthanh i").removeClass();
				if(k % 2 == 0)
				{
					$("#binhthanh h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#binhthanh i").addClass("fa fa-caret-right");
					$("#binhthanh i").css("marginRight", "0px");
				}
				else
				{
					$("#binhthanh h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#binhthanh i").addClass("fa fa-caret-down");
					$("#binhthanh i").css("marginRight", "2px");
				}
				k++;
			});
			var l = 1;
			$("#quan9").click(function(){
				$("#quan9 p").slideToggle(500);
				$("#quan9 i").removeClass();
				if(l % 2 == 0)
				{
					$("#quan9 h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#quan9 i").addClass("fa fa-caret-right");
					$("#quan9 i").css("marginRight", "0px");
				}
				else
				{
					$("#quan9 h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#quan9 i").addClass("fa fa-caret-down");
					$("#quan9 i").css("marginRight", "2px");
				}
				l++;
			});
			var m = 1;
			$("#govap").click(function(){
				$("#govap p").slideToggle(500);
				$("#govap i").removeClass();
				if(m % 2 == 0)
				{
					$("#govap h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#govap i").addClass("fa fa-caret-right");
					$("#govap i").css("marginRight", "0px");
				}
				else
				{
					$("#govap h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#govap i").addClass("fa fa-caret-down");
					$("#govap i").css("marginRight", "2px");
				}
				m++;
			});
			var n = 1;
			$("#binhtan").click(function(){
				$("#binhtan p").slideToggle(500);
				$("#binhtan i").removeClass();
				if(n % 2 == 0)
				{
					$("#binhtan h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#binhtan i").addClass("fa fa-caret-right");
					$("#binhtan i").css("marginRight", "0px");
				}
				else
				{
					$("#binhtan h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#binhtan i").addClass("fa fa-caret-down");
					$("#binhtan i").css("marginRight", "2px");
				}
				n++;
			});
			var o = 1;
			$("#quan2").click(function(){
				$("#quan2 p").slideToggle(500);
				$("#quan2 i").removeClass();
				if(o % 2 == 0)
				{
					$("#quan2 h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#quan2 i").addClass("fa fa-caret-right");
					$("#quan2 i").css("marginRight", "0px");
				}
				else
				{
					$("#quan2 h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#quan2 i").addClass("fa fa-caret-down");
					$("#quan2 i").css("marginRight", "2px");
				}
				o++;
			});
			var p = 1;
			$("#quan12").click(function(){
				$("#quan12 p").slideToggle(500);
				$("#quan12 i").removeClass();
				if(p % 2 == 0)
				{
					$("#quan12 h3").css({"background-color":"", "color":"black", "margin":"0px", "border-radius":"0", "padding":"0"});
					$("#quan12 i").addClass("fa fa-caret-right");
					$("#quan12 i").css("marginRight", "0px");
				}
				else
				{
					$("#quan12 h3").css({"background-color":"#333", "color":"white", "margin":"-11px", "border-radius":"15px 15px 0 0", "padding":"10px"});
					$("#quan12 i").addClass("fa fa-caret-down");
					$("#quan12 i").css("marginRight", "2px");
				}
				p++;
			});
			
		})