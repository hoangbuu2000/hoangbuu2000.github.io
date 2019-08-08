// JavaScript Document
function xacNhan(){
	var ht = document.getElementById("hoten").value ;
	var ngay = document.getElementById("datepicker").value ;
	var noisinh = document.getElementById("noisinh").value ;
	var quequan = document.getElementById("quequan").value ;
	var dtdd = document.getElementById("dtdd").value ;
	var cmnd = document.getElementById("cmnd").value ;
	var diachi = document.getElementById("diachi").value ;
	var trinhdo = document.getElementById("trinhdo").value ;
	var vitri = document.getElementById("vitri").value ;
	if(vitri == "thungan")
		vitri = "Thu ngân" ;
	else if(vitri == "phucvu")
		vitri = "Phục vụ" ;
	else if(vitri == "quanly")
		vitri = "Quản lý" ; 
	if(ht != "" && dtdd != "" && ngay != "" && noisinh != "" && quequan != "" && diachi != "" && trinhdo != "" && cmnd != "")
	{

			var btn = document.getElementById("button");
			btn.type = "button";
			var modal = document.getElementById("myModal").style.display = "block";

	}
	var p = document.querySelector(".modal-body > p");
	var radio = document.querySelectorAll("input[type=radio]");
	var gt;
	for(var i = 0; i < radio.length; i++)
	{	
		if(radio[i].checked)
			gt = radio[i].value;
	}
	var xungho;
	if(gt == "Nam")
		xungho = "Anh: " ;
	else if(gt == "Nu")
		xungho = "Chị: " ;
	else
		xungho = "Anh/Chị: " ;
	p.innerHTML = xungho + "<span>" + ht + "</span><br/>Ứng tuyển vị trí: <span>" + vitri + "</span><br/>SĐT: <span>" + dtdd + "</span><br/>Quê quán: <span>"
	+ quequan + "</span><h3>Vui lòng chờ lịch phỏng vấn qua điện thoại</h3>";
	var span = document.querySelectorAll(".modal-body > p > span");
	var h3 = document.querySelector(".modal-body > p > h3");
	for(var i = 0; i < span.length; i++)
	{
		span[i].style.color="red";
		span[i].style.fontWeight="bold";
		span[i].style.fontSize="18px";
	}
	h3.style.marginTop = "10px";

}