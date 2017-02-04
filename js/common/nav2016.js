$(function(){
	$(".nav-lf").mouseover(function(){
		$(".nav-lf-con").css({display:"block"})
	})
	$(".nav-lf").mouseout(function(){
			$(".nav-lf-con").css({display:"none"})
	})
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

