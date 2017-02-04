$(function(){
	$(".header").load("../html/common/header.html")
	$(".footer").load("../html/common/footer02.html")
})
$(function(){
	$.get("../data/list/hot.json",function(data){
		var re=data
//		console.log(re[i])
		for(var i in re){
//			console.log(re[i])
			$(".s-Hotv3-rt>ul").append(
										"<li>"+
											"<div class='hotv3-rtlia'>"+
												"<a href='details.html'>"+
													"<img src="+re[i].imgSrc+" />"+
												"</a>"+
											"</div>"+
											"<div class='hotv3-rtlib'>"+
												"<div class='hotv3-rtlib-tit'><a href='details.html' target='_blank'>"+re[i].userName+"</a></div>"+
												"<div class='hotv3-rtlib-val'>"+re[i].price+"</div>"+
												"<div class='hotv3-rtlib-btn'>"+
												"<a href='details.html' target='_blank'>"+
												"立即抢购"+
												"</a>"+
												"</div>"+
											"</div>"+
										"</li>"
									)
		}
	})
})
$(function(){
	//判断购物车是否存在东西
	if($.cookie("carList1")||$.cookie("carList2")){
		$(".cart-warp-none").css("display","none")
		if(!$.cookie("carList1")){
			$(".id01").css("display","none")
		}else{
			id1()
		}
		if(!$.cookie("carList2")){
			$(".id02").css("display","none")
		}else{
			id2()
		}
//		addTr()
//		console.log($.cookie("carList")) 
//		$("#allcC").html(parseInt($("#val-id1").val())+parseInt($("#val-id2").val()))
//		$("#allM").html(parseInt($("#em-id1").html())+parseInt($("#em-id2").html()))
	}else{
		$(".cart-warp").css("display","none")
	}
})
$(function(){
	//全选单选按钮
	var ck1=$(".add-value1")
	var ck2=$(".add-value2")
	var ack=$("#footerCheckAll")
	var allDe=$("#car-windDelet")
	var allBtn=$("#btnToOrder")
	var ca=0
	var cb=0
	if($.cookie("carList1")){
		ca=1
	}
	if($.cookie("carList2")){
		cb=1
	}//判断是否存在cookie来确定值
	ck1.click(function(){
		if(ca&&cb){
			if(ck1.prop("checked")&&ck2.prop("checked")){
			$("input[type='checkbox']").prop("checked", true);
			//console.log(1)
			}else{
				ack.removeAttr("checked")
			}
		}else if(ca){
			if(ck1.prop("checked")){
				$("input[type='checkbox']").prop("checked", true);
			}else{
				ack.removeAttr("checked")
			}
		}else if(cb){
			if(ck2.prop("checked")){
				$("input[type='checkbox']").prop("checked", true);
			}else{
				ack.removeAttr("checked")
			}
		}
		caa()
	})
	ck2.click(function(){
//		if(ck1.prop("checked")&&ck2.prop("checked")){
//			//ack.attr("checked")
//			$("input[type='checkbox']").prop("checked", true);
//			//console.log(2)
//		}else{
//			ack.removeAttr("checked")
//		}
		if(ca&&cb){
			if(ck1.prop("checked")&&ck2.prop("checked")){
			$("input[type='checkbox']").prop("checked", true);
			//console.log(1)
			}else{
				ack.removeAttr("checked")
			}
		}else if(ca){
			if(ck1.prop("checked")){
				$("input[type='checkbox']").prop("checked", true);
			}else{
				ack.removeAttr("checked")
			}
		}else if(cb){
			if(ck2.prop("checked")){
				$("input[type='checkbox']").prop("checked", true);
			}else{
				ack.removeAttr("checked")
			}
		}
		caa()
	})
	if(ack.prop("checked")){
		$("input[type='checkbox']").prop("checked", true);
	//	console.log("all")
	}else{
		ck1.removeAttr("checked")
		ck2.removeAttr("checked")
	}
	ack.click(function(){
		if(ack.prop("checked")){
			$("input[type='checkbox']").prop("checked", true);
		//	console.log("all")
		}else{
			ck1.removeAttr("checked")
			ck2.removeAttr("checked")
		}
		caa()
	})
	allDe.click(function(){
		if(ack.prop("checked")){
			$.cookie("carList1",1,{expires:-1,path:"/"})
			$.cookie("carList2",1,{expires:-1,path:"/"})
			$(".cart-warp-none").css("display","block")
			$(".cart-warp").css("display","none")
			
		}
	})
	allBtn.click(function(){
		if(parseInt(JSON.parse($.cookie("reFalse")).val)){
			//var allMeony={}
			if(ck1.prop("checked")||ck2.prop("checked")){
				sa()
				location.href="pay.html"
			}else{
				alert("至少选择一件商品结算")
			}
			
		}else{
			alert("你还未登录，请先登录")
			location.href="register.html"
		}
	})
})
function sa(){
	//点击结算按钮
	$.cookie("carSe1",-1,{expires:-1,path:"/"})
	$.cookie("carSe2",-1,{expires:-1,path:"/"})
	var coma= $.cookie("carSe1")?JSON.parse($.cookie("carSe1")):{}
	var comb= $.cookie("carSe1")?JSON.parse($.cookie("carSe1")):{}
	var ck1=$(".add-value1")
	var ck2=$(".add-value2")
	var ca=0
	var cb=0
	if($.cookie("carList1")){
		ca=1
	}
	if($.cookie("carList2")){
		cb=1
	}//判断是否存在cookie来确定值
	coma={
		src:$("#img-id1").attr("src"),
		name:$("#name-id1").html(),
		size:$("#size-id1").html(),
		color:$("#cor-id1").html(),
		price:$("#m-neo").html(),
		iNum:$("#val-id1").val(),
		all:$("#em-id1").html()
	}
	comb={
		src:$("#img-id2").attr("src"),
		name:$("#name-id2").html(),
		size:$("#size-id2").html(),
		color:$("#cor-id2").html(),
		price:$("#m-two").html(),
		iNum:$("#val-id2").val(),
		all:$("#em-id2").html()
	}
	if(ca&&ck1.prop("checked")){
		$.cookie("carSe1",JSON.stringify(coma),{expires:1,path:"/"})
	}
	if(cb&&ck2.prop("checked")){
		$.cookie("carSe2",JSON.stringify(comb),{expires:1,path:"/"})
	}
}
function caa(){
	//判断是否勾选函数
	//有bug
	var ck1=$(".add-value1")
	var ck2=$(".add-value2")
	var ack=$("#footerCheckAll")
	var ca=0
	var cb=0
	if($.cookie("carList1")){
		ca=1
	}
	if($.cookie("carList2")){
		cb=1
	}//判断是否存在cookie来确定值
	if(ca&&cb){
		if(ck1.prop("checked")&&ck2.prop("checked")){
			$("#allcC").html(parseInt($("#val-id1").val())+parseInt($("#val-id2").val()))
			$("#allM").html(parseInt($("#em-id1").html())+parseInt($("#em-id2").html()))
		}else if(ck1.prop("checked")){
			$("#allcC").html(parseInt($("#val-id1").val()))
			$("#allM").html(parseInt($("#em-id1").html()))
		}else if(ck2.prop("checked")){
			$("#allcC").html(parseInt($("#val-id2").val()))
			$("#allM").html(parseInt($("#em-id2").html()))
		}else{
			$("#allcC").html("¥00.00")
			$("#allM").html("¥00.00")
		}
	}else if(ca){
		if(ck1.prop("checked")){
			$("#allcC").html(parseInt($("#val-id1").val()))
			$("#allM").html(parseInt($("#em-id1").html()))
		}else{
			$("#allcC").html("¥00.00")
			$("#allM").html("¥00.00")
		}
	}else if(cb){
		if(ck2.prop("checked")){
			$("#allcC").html(parseInt($("#val-id2").val()))
			$("#allM").html(parseInt($("#em-id2").html()))
		}else{
			$("#allcC").html("¥00.00")
			$("#allM").html("¥00.00")
		}
	}
//	if(ck1.prop("checked")&&ck2.prop("checked")){
//		$("#allcC").html(parseInt($("#val-id1").val())+parseInt($("#val-id2").val()))
//		$("#allM").html(parseInt($("#em-id1").html())+parseInt($("#em-id2").html()))
//	}else if(ck1.prop("checked")){
//		$("#allcC").html(parseInt($("#val-id1").val()))
//		$("#allM").html(parseInt($("#em-id1").html()))
//	}else if(ck2.prop("checked")){
//		$("#allcC").html(parseInt($("#val-id2").val()))
//		$("#allM").html(parseInt($("#em-id2").html()))
//	}else{
//		$("#allcC").html("¥00.00")
//		$("#allM").html("¥00.00")
//	}
}
function id1(){
	var data1=JSON.parse($.cookie("carList1")) 
			$("#img-id1").attr("src","../img/shopCar/detalis-zoomdiv1.JPG")
			$("#name-id1").html(data1.userName)
			$("#size-id1").html(data1.size)
			$("#cor-id1").html(data1.color)
			$("#m-neo").html(data1.price)
			$("#val-id1").val(data1.iNum)
			$("#em-id1").html(parseInt(data1.iNum)*parseInt(data1.price))
			add(data1,"#val-id1","#em-id1")
			$("#del-id1").click(function(){
				var ck1=$(".add-value1")
				var ck2=$(".add-value2")
				ck1.removeAttr("checked")
				//var com1= $.cookie("carList1")?JSON.parse($.cookie("carList1")):{}
				//com1.iNum=0
				//$.cookie("carList1",JSON.stringify(com1),{expires:-1,path:"/"})
				$.cookie("carList1",1,{expires:-1,path:"/"})
				caa()
				$(".id01").css("display","none")
				if(!($.cookie("carList1")||$.cookie("carList2"))){
					$(".cart-warp").css("display","none")
					$(".cart-warp-none").css("display","block")
				}
//				$("#allcC").html(parseInt(parseInt($("#val-id2").val())))
//				$("#allM").html(parseInt(parseInt($("#em-id2").html())))
			})
}
function id2(){
	var data2=JSON.parse($.cookie("carList2")) 
			$("#img-id2").attr("src","../img/shopCar/detalis-zoomdiv2.JPG")
			$("#name-id2").html(data2.userName)
			$("#size-id2").html(data2.size)
			$("#cor-id2").html(data2.color)
			$("#m-two").html(data2.price)
			$("#val-id2").val(data2.iNum)
			$("#em-id2").html(parseInt(data2.iNum)*parseInt(data2.price))
			add(data2,"#val-id2","#em-id2")
			$("#del-id2").click(function(){
				var ck1=$(".add-value1")
				var ck2=$(".add-value2")
				ck2.removeAttr("checked")
				//var com1= $.cookie("carList2")?JSON.parse($.cookie("carList2")):{}
				//com1.iNum=0
				//$.cookie("carList2",JSON.stringify(com1),{expires:-1,path:"/"})
				$.cookie("carList2",1,{expires:-1,path:"/"})
				caa()
				$(".id02").css("display","none")
				if(!($.cookie("carList1")||$.cookie("carList2"))){
					$(".cart-warp").css("display","none")
					$(".cart-warp-none").css("display","block")
				}
//				$("#allcC").html(parseInt($("#val-id1").val()))
//				$("#allM").html(parseInt($("#em-id1").html()))
			})
}
function add(data,id,idem){
	var ad=$(id).parent().siblings("li").find(".cart-numb")
	var	rm=$(id).parent().siblings("li").find(".cart-numa")
	ad.click(function(){
		var num=$(id).val()
		num++
		$(id).val(num)
		$(idem).html(num*parseInt(data.price))
		caa()
		//$("#allcC").html(parseInt($("#val-id1").val())+parseInt($("#val-id2").val()))
		//商品总数量
		//$("#allM").html(parseInt($("#em-id1").html())+parseInt($("#em-id2").html()))
		//总金额
//		这里如果不这样写会产生点击是替换了cookie的bug
		var com1= $.cookie("carList"+data.id)?JSON.parse($.cookie("carList"+data.id)):{}
		com1.iNum=num
		$.cookie("carList"+data.id,JSON.stringify(com1),{expires:7,path:"/"})
	})
	rm.click(function(){
		var num=$(id).val()
		num--
		if(num<1){
			num=1
		}
		$(id).val(num)
		$(idem).html(num*parseInt(data.price))
		caa()
		//$("#allcC").html(parseInt($("#val-id1").val())+parseInt($("#val-id2").val()))
		//$("#allM").html(parseInt($("#em-id1").html())+parseInt($("#em-id2").html()))
		var com1= $.cookie("carList"+data.id)?JSON.parse($.cookie("carList"+data.id)):{}
		com1.iNum=num
		$.cookie("carList"+data.id,JSON.stringify(com1),{expires:7,path:"/"})
	})
}
$(function(){
	var oInput=$("#key")
	oInput.focus(function(){
		$("#tipUl").css({"display":"block"})
	})
	oInput.blur(function(){
		$("#tipUl").css({"display":"none"})
	})
	oInput.keyup(function() {
		$.ajax({
			url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.val()+"&json=1&p=3&t",
			dataType: "jsonp",
			jsonp: "cb",
			success:function(data){
				var lists = data.g;
				var oUl = $("#tipUl");
				oUl.html("");
				for(var i in lists) {
					var oLi = $("<li></li>");
					oLi.html(lists[i].q);
					oUl.append(oLi);
				}
				$("#tipUl li").hover(function(){
	
					$(this).css({color:"red",background:"#999"})
				},function(){
					
					$(this).css({color:"#000",background:"#fff"})
				})
				var height=$("#tipUl").height()
				$("#tipUl").css({"bottom":-$("#tipUl").height()-3})
			}
		})
	})
	$("#tipUl").find("li").each(function(){
		$(this).on("click",function(){
			oInput.val($(this).text())
		})
	})
	
})
//$(function(){
//	var oInput=$(".top-seek-up")
//	oInput.keyup(function() {
//		$.ajax({
//			url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.val()+"&json=1&p=3&t",
//			dataType: "jsonp",
//			jsonp: "cb",
//			success:function(data){
//				var lists = data.g;
//				var oUl = $("#tipList");
//				oUl.html("");
//				for(var i in lists) {
//					var oLi = $("<li></li>");
//					oLi.html(lists[i].q);
//					oUl.append(oLi);
//				}
//				$("#tipList li").hover(function(){
//	
//					$(this).css({color:"#999",background:"#eee"})
//				},function(){
//					
//					$(this).css({color:"gray",background:""})
//				})
//				$("#tipList li").click(function(){
//					oInput.val($(this).text())
//				})
//			}
//			
//		})
//		
//				
//	})
//})
//function ID1(){
//	var add=$("#ID1").parent().siblings("li").find(".cart-numa")
//	var rem=$("#ID1").parent().siblings("li").find(".cart-numb")
//	add.mousedown(function(){
//		var num=parseInt(JSON.parse($.cookie("carList")).ID1.iNum)
//		//var num=parseInt($(this).parent().siblings("li").find(".cartnum-value").val())
//		num--
//		if(num<0){
//			num=0
//		}
//		var com1= $.cookie("carList")?JSON.parse($.cookie("carList")):{}
//		com1["ID1"].iNum=num
//		$("ID1").val(num)
//		$.cookie("carList",JSON.stringify(com1),{expires:7,path:"/"})
//		//$(this).parent().siblings().find(".cartnum-value").val(num)
//		$(".tab-zdcon>tbody").find(".de1").html("")
//		addTr()
//		
//	})
//	rem.mousedown(function(){
//		var num=parseInt(JSON.parse($.cookie("carList")).ID1.iNum)
//		//var num=parseInt($(this).parent().siblings("li").find(".cartnum-value").val())
//		num++
//		var com1= $.cookie("carList")?JSON.parse($.cookie("carList")):{}
//		com1["ID1"].iNum=num
//		$("ID1").val(num)
//		$.cookie("carList",JSON.stringify(com1),{expires:7,path:"/"})
//		//$(this).parent().siblings().find(".cartnum-value").val(num)
//	})
//}
//
//function addTr(){
//	var data=JSON.parse($.cookie("carList"))
//	for(var i in data){
//		var num
//		if(i=="ID1"){
//			var num=1
//		}else if(i=="ID2"){
//			var num=2
//		}
//		$(".tab-zdcon>tbody").append(
//			'<tr class="de1">'
//				+'<td class="tab-zdcon-line">'
//					+'<input class="add-value" type="checkbox">'
//				+'</td>'
//				+'<td class="tab-zdcon-add">'
//					+'<div class="tb3-con">'
//						+'<div class="tb3-divtu">'
//							+'<a href="details.html">'
//								+'<img src="../img/shopCar/detalis-zoomdiv'+num+'.JPG"/>'
//							+'</a>'
//						+'</div>'
//						+'<div class="tb3-divti">'
//							+'<a href="##">'+data[i].userName+'</a>'
//							+'<p>'
//								+'<span>'+data[i].size+'</span>'
//								+'<span>'+data[i].color+'</span>'
//							+'</p>'
//						+'</div>'
//					+'</div>'
//				+'</td>'
//				+'<td class="tab-zdcon-line">￥'+data[i].price+'</td>'
//				+'<td class="tab-zdcon-line">'
//					+'<div class="cart-num">'
//						+'<ul>'
//							+'<li>'
//								+'<a href="##" class="cart-numa">-</a>'
//							+'</li>'
//							+'<li>'
//								//'<a class="cartnum-value" href="#" id="'+i+'">'+data[i].iNum+'</a>'
//								+'<input type="text" id="'+i+'" class="cartnum-value" value="'+data[i].iNum+'">'
//							+'</li>'
//							+'<li>'
//								+'<a href="##" class="cart-numb">+</a>'
//							+'</li>'
//						+'</ul>'
//					+'</div>'
//				+'</td>'
//				+'<td class="tab-zdcon-line">'
//					+'<span>'
//						+'<p>¥0.00</p>'
//					+'</span>'
//				+'</td>'
//				+'<td class="tab-zdcon-line">'
//					+'<em>'+parseInt(data[i].iNum)*parseInt(data[i].price) +'</em>'
//				+'</td>'
//				+'<td>'
//					+'<div class="tabdiv-add">'
//						+'<p>'
//							+'<a href="##" action="collect" class="tabdiv-make">移入收藏夹</a>'
//						+'</p>'
//					+'</div>'
//					+'<p>'
//						+'<a class="tabdiv-del"  >删除</a>'
//					+'</p>'
//				+'</td>'
//			+'</tr>'
//		)
//	
//		
//	}
//}
