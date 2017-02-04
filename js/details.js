$(function(){
	$(".header").load("../html/common/header.html")
	$(".footer").load("../html/common/footer02.html")
	$(".souS").load("../html/common/shousuolan.html")
	$(".nav").load("../html/common/nav2016.html")
})

$(function(e){
//	$(".jqzoomDiv ul li").each(function(){
//		$(this).mouseover(function(){
//			$(".zoomShow").find("img").removeAttr("src").attr("src","../img/details/detalis-zoomdiv-zhong"+($(this).index()+1)+".JPG")
//			$(".bigShow").find("img").removeAttr("src").attr("src","../img/details/detalis-zoomdiv-big"+($(this).index()+1)+".JPG")
//		})
//	})
//	$(".bx-data-lt-2").mouseover(function(){
//		$(".zoomShow-pud").css({"display":"block"})
//		$(".bigShow").css({"display":"block"})
//	})
//	$(".bx-data-lt-2").mouseout(function(){
//		$(".zoomShow-pud").css({"display":"none"})
//		$(".bigShow").css({"display":"none"})
//	})
//	$(".zoomShow").mousemove(function(e){
////		var iLeft=e.pageX-$(window).scrollLeft()-30-$(".bx-data-lt-1").offset().left-($(".zoomShow-pud").width()/2)
////		var iTop=e.clientY-$(window).scrollTop()+$(".bx-data-lt-2").offset().top-($(".zoomShow-pud").height()/2)
//		var iLeft=e.clientX-$(window).scrollLeft()-$(".bx-data-lt-2").offset().left-($(".zoomShow-pud").width()/2)
//		var iTop=e.clientY+$(window).scrollTop()-$(".bx-data-lt-2").offset().top-($(".zoomShow-pud").height()/2)
//		var iWidht=$(".bx-data-lt-2").width()-$(".zoomShow-pud").width()
//		var iHeight=$(".bx-data-lt-2").height()-$(".zoomShow-pud").height()
//		if(iLeft<0) {
//			iLeft = 0;
//		} else if(iLeft>iWidht) {
//			iLeft = iWidht;
//		}
//
//		if(iTop<0) {
//			iTop = 0;
//		} else if(iTop>iHeight) {
//			iTop = iHeight;
//		}
//		$(".zoomShow-pud").css({"left":iLeft,"top":iTop})
//		$(".bigShow").find("img").css({"left":-iLeft/4*15,"top":-iTop/4*15})
//		//不想写了就用死值了
//		console.log(iTop)
//	})
})
$(function(){
	//json加载图片与页面
	var goodid
	$.get("../data/details/imgs.json",function(data){
		var con=data
		for(var i in con){
			$(".bx-bo-left-con").append('<ul><li><a href="details.html"><img  src='+con[i].src+'/></a></li><li class="left-conli-txt"><a href="##" >'+con[i].userName+'</a></li><li class="left-conli-val">'+con[i].price+'</li></ul>')
		}
	})
//		热门商品组
//		for(var i=1;i<=4;i++){
//			$(".right-bom-dtu p").append("<img src='../img/details/right-bom"+i+".jpg'/>")
//		}
	//下方商品详情图片
	$.get("../data/details/comlist.json",function(data){
		if(parseInt($.cookie("comid"))%2==0){
			var cl=data.comList2
		}else{
			var cl=data.comList1
		}
		
			$("#listName").html(cl.comname)
			$("#bx-tit>P").html(cl.comname)
			$(".pval-ms").find("em").html(cl.price)
			$(".pval-ms").find("del").html(cl.yPrice)
			$(".data-attr2").eq(0).find("span").html(cl.color)
			$(".data-attr2").eq(1).find("span").html(cl.size)
			for(var i=1;i<=5;i++){
				$(".jqzoomDiv>ul").find("li").eq(i-1).find("img").attr("src",cl.imgSrc+"detalis-zoomdiv"+i+".JPG")
			}
		for(var i=1;i<=4;i++){
			$(".right-bom-dtu p").append("<img src='"+cl.imgSrc+"right-bom"+i+".jpg'/>")
		}	
		//放大镜	
			$(".zoomShow").find("img").removeAttr("src").attr("src",cl.imgSrc+"detalis-zoomdiv-zhong1.JPG")
				$(".bigShow").find("img").removeAttr("src").attr("src",cl.imgSrc+"detalis-zoomdiv-big1.JPG")
		$(".jqzoomDiv ul li").each(function(){
			$(this).mouseover(function(){
				$(".zoomShow").find("img").removeAttr("src").attr("src",cl.imgSrc+"detalis-zoomdiv-zhong"+($(this).index()+1)+".JPG")
				$(".bigShow").find("img").removeAttr("src").attr("src",cl.imgSrc+"detalis-zoomdiv-big"+($(this).index()+1)+".JPG")
			})
		})
		$(".bx-data-lt-2").mouseover(function(){
			$(".zoomShow-pud").css({"display":"block"})
			$(".bigShow").css({"display":"block"})
		})
		$(".bx-data-lt-2").mouseout(function(){
			$(".zoomShow-pud").css({"display":"none"})
			$(".bigShow").css({"display":"none"})
		})
		$(".zoomShow").mousemove(function(e){
	//		var iLeft=e.pageX-$(window).scrollLeft()-30-$(".bx-data-lt-1").offset().left-($(".zoomShow-pud").width()/2)
	//		var iTop=e.clientY-$(window).scrollTop()+$(".bx-data-lt-2").offset().top-($(".zoomShow-pud").height()/2)
			var iLeft=e.clientX-$(window).scrollLeft()-$(".bx-data-lt-2").offset().left-($(".zoomShow-pud").width()/2)
			var iTop=e.clientY+$(window).scrollTop()-$(".bx-data-lt-2").offset().top-($(".zoomShow-pud").height()/2)
			var iWidht=$(".bx-data-lt-2").width()-$(".zoomShow-pud").width()
			var iHeight=$(".bx-data-lt-2").height()-$(".zoomShow-pud").height()
			if(iLeft<0) {
				iLeft = 0;
			} else if(iLeft>iWidht) {
				iLeft = iWidht;
			}
	
			if(iTop<0) {
				iTop = 0;
			} else if(iTop>iHeight) {
				iTop = iHeight;
			}
			$(".zoomShow-pud").css({"left":iLeft,"top":iTop})
			$(".bigShow").find("img").css({"left":-iLeft/4*15,"top":-iTop/4*15})
			//不想写了就用死值了
			//console.log(iTop)
		})
		//点击按钮事件
		downBtn(cl)
		
	})
	
		
})
function downBtn(cl){
//从cookie中 取出数据的正确方式	
//console.log(JSON.parse($.cookie("carList")).ID1.iNum)
	goodid=cl.id
	$(".addCart").css("cursor","pointer")
	var num1=0;num2=0;
	if($.cookie("carList1")){
		num1=parseInt(JSON.parse($.cookie("carList1")).iNum)
	}
	if($.cookie("carList2")){
		num2=parseInt(JSON.parse($.cookie("carList2")).iNum)
	}
	//判断是否存在cookie
//	if($.cookie("carList")){
//		for(var m in JSON.parse($.cookie("carList"))){
//		num+=parseInt(JSON.parse($.cookie("carList"))[m].iNum) 
//			//这里有bug每次累加是2个加起来的和
//		}
//	}else{
//		num=0
//	}
	var com1= $.cookie("carList")?JSON.parse($.cookie("carList")):{}
	com1={
		userName:cl.comname,
		imgSrc:cl.imgSrc+"detalis-zoomdiv-zhong1.JPG",
		id:cl.id,
		color:cl.color,
		size:cl.size,
		price:cl.price,
		//iNum:num
	}
//	var value=0
//	if($.cookie("carList")){
//		for(var i in JSON.parse($.cookie("carList"))){
//			value +=parseInt(JSON.parse($.cookie("carList"))[i].iNum)
//		}
//		//value=parseInt(JSON.parse($.cookie("carList")).ID1.iNum)+parseInt(JSON.parse($.cookie("carList")).ID2.iNum)
//	}
	$(".addCart").mousedown(function(){
		//console.log($("#buyNum").val())
		if(parseInt($("#buyNum").val())){
			//判断添加数量的值是否为0
			if(cl.id=="1"){
				num1+=parseInt($("#buyNum").val())
				com1.iNum=num1
			}else{
				num2+=parseInt($("#buyNum").val())
				com1.iNum=num2
			}
			
			//计算购物车处的值
			$.cookie("carList"+cl.id,JSON.stringify(com1),{expires:7,path:"/"})
			//console.log($.cookie("carList1"))
			//console.log($.cookie("carList2"))
			var value=0
			value=num1+num2
//			if($.cookie("carList")){
//				value+=parseInt($("#buyNum").val())
//			}else{
//				value=0
//			}
			$("#carNum").html("("+value+")")
		}
	})
	
}
			//上方导航栏nav中购物车应显示的值
			

//活动倒计时
$(function(){
	var timer=$(".time-end span")
	var time=24*3600*1000 //活动倒计时
	setInterval(function(){
		time-=1000
		var hour=parseInt(time/3600000)%24
		var min=parseInt(time/3600000*60)%60
		var sec=parseInt(time/3600000*24*60)%60
		timer.find("em").eq(0).html(hour)
		timer.find("em").eq(1).html(min)
		timer.find("em").eq(2).html(sec)
//		console.log(time)
	},500)
})
//添加商品按钮
$(function(){
	var oAdd=$(".buyAdd")
	var oRed=$(".buyReduce")
	var oValue=$("#buyNum")
	oAdd.css("cursor","pointer")
	oRed.css("cursor","pointer")
	var val=oValue.val()
	oAdd.mousedown(function(){
		val++
		oValue.val(val)
		$(this).css("color","red")
	})
	oAdd.mouseup(function(){
		$(this).css("color","#000000")
	})
	oRed.mousedown(function(){
		val--
		if(val<1){
			val=1
		}
		oValue.val(val)
		$(this).css("color","red")
	})
	oRed.mouseup(function(){
		$(this).css("color","#000000")
	})
	oValue.blur(function(){
		var rex=/\d/gi
	//console.log(rex.test(oValue.val()))	
		//console.log(oValue.val()) 
		if(!rex.test(oValue.val())){
			oValue.val(val)
		}
	})
	
})
//点击加入购物车事件
$(function(){
//	$(".addCart").css("cursor","pointer")
//	console.log($.cookie("carList"))
//	var num
//	if($.cookie("carList")){
//		num=JSON.parse($.cookie("carList")).num 
//	}else{
//		num=0
//	}
//	$(".addCart").mousedown(function(){
//		
//		//console.log($("#buyNum").val())
//		if(parseInt($("#buyNum").val())){
//			//判断添加数量的值是否为0
//			var com1={}
//			com1.userName="BURBERRY 巴宝莉 新品女款单肩包4014739 2160T"
//			com1.imgSrc="../img/detalis-zoomdiv-zhong1.JPG"
//			com1.id=1
//			com1.color="卡其"
//			com1.size="//"
//			num+=parseInt($("#buyNum").val())
////			if(com1){
////				num+=parseInt($("#buyNum").val())
////			}else{
////				num=parseInt($("#buyNum").val())
////			}
//			com1.num=num
//			$.cookie("carList",JSON.stringify(com1),{expires:7,path:"/"})
//		}
//		//上方导航栏nav中购物车应显示的值
//		var value=0
//		if($.cookie("carList")){
//			value=parseInt(JSON.parse($.cookie("carList")).num)
//		}else{
//			value=0
//		}
//		$("#carNum").html("("+value+")")
//	})
})
$(function(){
	var oInput=$("#key")
	oInput.focus(function(){
		$("#tipUl").css({"display":"block"})
	})
	oInput.blur(function(){
		$("#tipUl").css({"display":"none"})
	})
	oInput.on("keydown",function() {
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
	}
	
	)
	$("#tipUl").find("li").each(function(){
		$(this).on("click",function(){
			oInput.val($(this).text())
		})
	})
})

//添加热门商品的代码
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
