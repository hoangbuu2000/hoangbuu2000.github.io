// JavaScript Document
function xacNhan(){
	var ht = document.getElementById("hoten").value ;
	var dtdd = document.getElementById("dtdd").value ;
	var email = document.getElementById("email").value ;
	var diadiem = document.getElementById("diadiem").value ;
	var thoigian = document.getElementById("thoigian").value ;
	var ngay = document.getElementById("ngay").value ;
	ngay = ngay.split("-").reverse().join("-");
	var soluong = document.getElementById("soluong").value ;
	if(diadiem == "vincom")
		diadiem = "Kichi Kichi Vincom Kiên Giang" ;
	else if(diadiem == "sensecity")
		diadiem = "Kichi Kichi Sense City Cần Thơ" ;
	else if(diadiem == "lottemart")
		diadiem = "Kichi Kichi Lotte Mart Cần Thơ" ;
	else if(diadiem == "aeontanphu")
		diadiem = "Kichi Kichi Aeon Tân Phú" ;
	else if(diadiem == "aeonbinhtan")
		diadiem = "Kichi Kichi Aeon Bình Tân" ;
	else if(diadiem == "vincomgovap")
		diadiem = "Kichi Kichi Vincom Gò Vấp" ;
	else if(diadiem == "lottevungtau")
		diadiem = "Kichi Kichi Lotte Vũng Tàu" ;
	else if(diadiem == "vincomcamau")
		diadiem = "Kichi Kichi Vincom Cà Mau" ;
	if(ht == "" || dtdd == "" || isNaN(dtdd) == true || email.indexOf("@") == -1 || email.indexOf("@") == email.length - 1 || diadiem == "selected" || ngay == "")
	{
		if(ht == "")
		{
			var k = document.getElementById("kq1") ;
			k.innerHTML = "Vui lòng nhập họ tên" ;
			k.style.color = "red";
		}
		else
		{
			var k = document.getElementById("kq1") ;
			k.innerHTML = "" ;
		}
		if(dtdd == "")
		{
			var k = document.getElementById("kq2") ;
			k.innerHTML = "Vui lòng nhập điện thoại di động" ;
			k.style.color = "red";
		}
		else
		{
			var k = document.getElementById("kq2") ;
			k.innerHTML = "" ;
			if(isNaN(dtdd) == true)
			{
				var k = document.getElementById("kq2") ;
				k.innerHTML = "Vui lòng nhập điện thoại là số" ;
				k.style.color = "red";
			}
		}
		if(email == "")
		{
			var k = document.getElementById("kq3") ;
			k.innerHTML = "Vui lòng nhập Email" ;
			k.style.color = "red";
		}
		else
		{
			var k = document.getElementById("kq3") ;
			k.innerHTML = "" ;
			if(email.indexOf("@") == -1)
			{
				var k = document.getElementById("kq3") ;
				k.innerHTML = "Vui lòng nhập @ phía sau. Ví dụ: " + email + "@" ;
				k.style.color = "red";
			}
			if(email.indexOf("@") == email.length - 1)
			{
				var k = document.getElementById("kq3") ;
				k.innerHTML = "Vui lòng nhập sau @" ;
				k.style.color = "red";
			}
		}
		if(diadiem == "selected")
		{
			var k = document.getElementById("kq4") ;
			k.innerHTML = "Vui lòng chọn 01 nhà hàng" ;
			k.style.color = "red";
			k.style.paddingBottom = "5px";
		}
		else
		{
			var k = document.getElementById("kq4") ;
			k.innerHTML = "" ;
		}
		if(ngay == "")
		{
			var k = document.getElementById("kq5") ;
			k.innerHTML = "Vui lòng chọn ngày" ;
			k.style.color = "red";
		}
		else
		{
			var k = document.getElementById("kq5") ;
			k.innerHTML = "" ;
		}
	}
	else
	{	
		var i = document.getElementById("button") ;
		i.type = "submit" ;
		var x = confirm("Địa chỉ: " + diadiem + "\nHọ tên: " + ht + "\nĐTDĐ: " + dtdd + "\nEmail: " + email + "\nVào lúc: " + thoigian + "\nNgày: " + ngay + "\nSố lượng: " + soluong) ;
		if(x == true)
			alert("Đặt bàn thành công!!!") ;
		else
			alert("Đặt bàn không thành công!!!") ;
	}
}
function hide(obj){
	if(obj.value != "selected")
	{
		var k = document.getElementById("kq4") ;
		k.innerHTML = "" ;
	}
}
function hide1(obj){
	if(obj.value != "")
	{
		var k = document.getElementById("kq5") ;
		k.innerHTML = "" ;
	}
}
function hide2(obj){
	if(obj.value != "")
	{
		var k = document.getElementById("kq1") ;
		k.innerHTML = "" ;
	}
}
function hide3(obj){
	if(obj.value != "")
	{
		var k = document.getElementById("kq2") ;
		k.innerHTML = "" ;
	}
}
function hide4(obj){
	if(obj.value != "")
	{
		var k = document.getElementById("kq3") ;
		k.innerHTML = "" ;
	}
}