$(function(){
	$(".header").load("../html/common/header.html")
	$(".footer").load("../html/common/footer02.html")
	$("#city").citySelect({  
	    url:"../js/common/city.min.js",  
	    prov:"...", //省份 
	    city:"...", //城市 
	    dist:"...", //区县 
	    nodata:"none" //当子集无数据时，隐藏select 
	})
	if($.cookie("carSe1")){
		//$(".id01").css("display","inline-block")
		se1()
	}else{
		$(".id01").css("display","none")
	}
	if($.cookie("carSe2")){
		//$(".id02").css("display","inline-block")
		se2()
	}else{
		$(".id02").css("display","none")
	}
	$("#allDll").html(am())
	$(".paymoney").html(am())
	$("#allGood").html(aG())
})
function am(){
	//计算总价
	var num1=0,num2=0
	if($.cookie("carSe1")){
		num1=parseInt($("#em-id1").html())
	}
	if($.cookie("carSe2")){
		num2=parseInt($("#em-id2").html())
	}
	return num1+num2
}
function aG(){
	//计算一共有多少件商品
	var num1=0,num2=0
	if($.cookie("carSe1")){
		num1=parseInt($("#val-id1").html())
	}
	if($.cookie("carSe2")){
		num2=parseInt($("#val-id2").html())
	}
	return num1+num2

}
function se1(){
//	src:$("#img-id2").attr("src"),
//	name:$("#name-id2").html(),
//	size:$("#size-id2").html(),
//	color:$("#cor-id2").html(),
//	price:$("#m-neo").html(),
//	iNum:$("#val-id2").val(),
//	all:$("#em-id2").html()
	data1=JSON.parse($.cookie("carSe1")) 
	$("#img-id1").attr("src","../img/shopCar/detalis-zoomdiv1.JPG")
	$("#name-id1").html(data1.name)
	$("#size-id1").html(data1.size)
	$("#cor-id1").html(data1.color)
	$("#m-neo").html(data1.price)
	$("#val-id1").html(data1.iNum)
	$("#em-id1").html(parseInt(data1.iNum)*parseInt(data1.price))
}//判断往商品1中存入数据
function se2(){
	data2=JSON.parse($.cookie("carSe2")) 
	$("#img-id2").attr("src","../img/shopCar/detalis-zoomdiv2.JPG")
	$("#name-id2").html(data2.name)
	$("#size-id2").html(data2.size)
	$("#cor-id2").html(data2.color)
	$("#m-two").html(data2.price)
	$("#val-id2").html(data2.iNum)
	$("#em-id2").html(parseInt(data2.iNum)*parseInt(data2.price))
}//往商品二中存入数据
