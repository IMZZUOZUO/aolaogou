$(function(){
	$(".dorpdown").mouseover(function(){
		$(".dorpdowncon").css("display","block")
		$(this).css("background","#FFFFFF")
	})
	$(".dorpdown").mouseout(function(){
		$(".dorpdowncon").css("display","none")
		$(this).css("background","#F0F0F0")
	})
//	var	reFalse={}
//	reFalse.val=0
//	$.cookie("reFalse",JSON.stringify(reFalse),{expires:2,path:"/"})
	//未登录是传入cookie
})
$(function(){
	var userName=$("#header-re")
	var zhuChe=$("#header-lo")
	if(parseInt(JSON.parse($.cookie("reFalse")).val)){
		userName.html("hi,"+JSON.parse($.cookie("userInfo")).userName)
		zhuChe.html("退出")
		zhuChe.click(function(){
			zhuChe.attr({"href":"../html/register.html"})
		})
	}else{
		userName.html("登录")
		zhuChe.html("注册")
		zhuChe.click(function(){
			$(this).attr({"href":"../html/logon.html"})
		})
	}
	
	
})
