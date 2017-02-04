$(function(){
	$("#footer").load("../html/common/footer02.html")
	$("#header").load("../html/common/header.html")
})

$(function(){
	$(".delete").click(function(){
		$(".banner-top").css("display","none")
	})
})
$(function(){
	var box=$(".lBt")
	var oUl=$(".lBt-box")
	var aLi=oUl.find("li")
	var oDiv=$(".lBt-nav")
	var aDiv=oDiv.find("div")
	var pr=$(".prev")
	var nt=$(".next")
	var len=aLi.length
	var iNow=0
//	var oLast=aLi.last().clone(true)
//	aLi.prepend(oLast)
//	len+=1
	goPlay()
	box.mouseover(function(){
		clearInterval(box.timer)
	})
	box.mouseout(function(){
		goPlay()
	})
	pr.click(function(){
		iNow--
		if(iNow<0){
			iNow=len-1
		}
		cut(iNow)
	})
	nt.click(function(){
		iNow++
		if(iNow >=aLi.length){
			iNow=0
		}
		cut(iNow)
	})
	aDiv.each(function(){
		$(this).mouseover(function(){
			cut($(this).index())
			iNow=$(this).index()
		})
	})
	function goPlay(){
		clearInterval(box.timer)
		box.timer=setInterval(function(){
//			cut()
			if(iNow < aLi.length-1){ 
		      iNow ++; 
		    }else{ 
		      iNow = 0;
		    }
			cut(iNow)
		},1000)
	}
	function cut(num){
		aLi.removeClass(".show").hide().eq(num).fadeIn().addClass(".show");
		aDiv.removeClass("active").eq(num).addClass("active");
//		console.log(iNow)
//		aLi.eq(iNow).stop().animate({opacity:0},100,function(){
//			if(iNow>=len-1){
//				iNow=-1
//			}
//			iNow++
//			aLi.eq(iNow).stop().animate({opacity:1},100)
//			
//			
//		})
	}
})

$(function(){
	var oLi=$(".nav-lf-con ul").find("li").each(function(){
		$(this).find(".nlc-two").css({display:"none"})
		var num=10
		$(this).mouseover(function(){
			num+=1
			$(this).find(".nlc-two").css({display:"block","zIndex":num})
			
		})
		$(this).mouseout(function(){
			$(".nav-lf-con ul li").find(".nlc-two").css({display:"none"})
		})
	})
})

$(function(){
	var timer=$(".jrtj-timer")
	var time=100000000000 //活动倒计时
	setInterval(function(){
		time-=1000
		var hour=parseInt(time/3600000*60)%24
		var min=parseInt(time/3600000*60)%60
		var sec=parseInt(time/3600000*24*60)%60
		timer.find("span").eq(0).html(hour)
		timer.find("span").eq(1).html(min)
		timer.find("span").eq(2).html(sec)
//		console.log(time)
	},500)
})

$(function(){
//	.each(function(){
//		$(this).load("../data/index/br-c1.json",function(data){
//			$(this).img.attr("src":"../img/index/index-br-c1"+data.imgSrc)
//		})
//		
//	})
	$.get("../data/index/br-c1.json",function(data){
//		for(var i=0;i<3;i++){
//			$("#br-img").eq(i).attr("src",data.imgSrc[$(this).index()])
//			
//		}
		
//		$(".br-img").each(function(){
//			var re=$(this).index()
//				$(this).attr("src",data.imgSrc[re])
//			})
		//
//			console.log($("#br-img"))
			for(var i in data.imgBrc1){
				$(".br-img").eq(i).attr("src",data.imgBrc1[i])
			}
			for(var i in data.imgBrnew){
				$(".br-new-img").eq(i).attr("src",data.imgBrnew[i])
			}
	})
})
//选项卡代码
$(function(){
//	$(".ovxx-span").each(function(){
//		$(this).mouseover(function(){
//			$(this).siblings().removeClass("sel").addClass("sel")
//		})
//	})
	$(".banner-ov-xx").find("span").mouseover(function(){
		$(this).addClass("sel").siblings().removeClass()
		console.log()
		$(".tab-dt").eq($(this).index()).addClass("dis").siblings(".tab-dt").removeClass("dis")
	})
	$(".banner-ov li").each(function(){
		$(this).find("img").mouseover(function(){
			$(this).stop().animate({"margin-left":10},200)//css("margin-left","10px")
		})
		$(this).find("img").mouseout(function(){
			$(this).stop().animate({"margin-left":0},200)
		})
	})
	
	$(".banner-ov-xx01").find("span").mouseover(function(){
		$(this).addClass("sel").siblings().removeClass()
		console.log()
		$(".tab-dt01").eq($(this).index()).addClass("dis").siblings(".tab-dt01").removeClass("dis")
	})
	$(".banner-ov01 li").each(function(){
		$(this).find("img").mouseover(function(){
			$(this).stop().animate({"margin-left":10},200)//css("margin-left","10px")
		})
		$(this).find("img").mouseout(function(){
			$(this).stop().animate({"margin-left":0},200)
		})
	})
})
//楼梯代码
$(function(){
	var isClick = false;//是否是点击  true是点击  false不是
		$(".louti ul li").click(function(){ 
			isClick = true;
			$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
			var iTop = $(".br-jrtj").eq($(this).index()).offset().top;
			$("html, body").stop().animate({scrollTop: iTop}, 500, function() {
				isClick = false;
			});
		})
		$(window).scroll(function() {
			if(!isClick){
				var iScrollTop = $(this).scrollTop();
				$(".br-jrtj").each(function() {
					// if(iScrollTop>=$(this).offset().top) {
					if(iScrollTop>=$(this).offset().top-$(this).prev().outerHeight()/2) {
						$(".louti ul li").eq($(this).index(".br-jrtj")).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
					}
				})
			}
		});
})
//购物车数量
$(function(){
	
//	if($.cookie("carList")){
//		for(var i in JSON.parse($.cookie("carList"))){
//			value +=parseInt(JSON.parse($.cookie("carList"))[i].iNum)
//		}
//		//value=parseInt(JSON.parse($.cookie("carList")).ID1.iNum)+parseInt(JSON.parse($.cookie("carList")).ID2.iNum)
//	}
	var value=0,num1=0,num2=0
	if($.cookie("carList1")){
		num1=parseInt(JSON.parse($.cookie("carList1")).iNum)
	}
	if($.cookie("carList2")){
		num2=parseInt(JSON.parse($.cookie("carList2")).iNum)
	}
	value=num1+num2
	$("#carNum").html("("+value+")")
})

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