$(function(){
	$(".header").load("../html/common/header.html")
	$(".footer").load("../html/common/footer02.html")
	$(".souS").load("../html/common/shousuolan.html")
	$(".nav").load("../html/common/nav2016.html")
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
	$.get("../data/list/seacon.json",function(data){
		var se=data;
		for(var i in se){
			$(".sea-left-con>ul").append(
									'<li>'+
			                			'<a href="details.html">'+
			                				'<img src='+se[i].imgSrc+'/>'+
			                			'</a>'+
			                		'</li>'+
			                		'<li class="left-conli-txt">'+
			                			'<a href="details.html" target="_blank">'+se[i].userName+'</a>'
			                		+'</li>'
			                		+'<li class="left-conli-val">'+se[i].price+'</li>'
				
			)
		}
	})
//	列表中间部分封装函数
	function listMain(url){
	//	"../data/list/list-main-a.json"
		$.get(url,function(data){
		var ma=data;
		for(var i in ma){
			$(".pro>ul").append(
						'<li>'
						+'<div class="pro-lims">'
						+'</div>'
						+'<div class="pro-liimg">'
							+'<a href="details.html" goodid='+ma[i].id+'>'
								+'<img src='+ma[i].imgSrc+'/>'
							+'</a>'
						+'</div>'
						+'<div class="pro-lipc">'
							+'<div class="val-n">'
								+'<span class="p4-jg02">'+ma[i].price+'</span>'
								+'<del class="delcon">'+ma[i].yPrice+'</del>'
							+'</div>'
						+'</div>'
						+'<div class="pro-line">'
							+'<a href="details.html">'
								+'<span class="pt-zy"></span>'
								+ma[i].name+
							'</a>'
						+'</div>'
					+'</li>'
					)
					
					
				}
				$(".pro-liimg>a").click(function(){
					$.cookie("comid",$(this).attr("goodid"),{expires:7,path:"/"})
				})
			})
	}
	listMain("../data/list/list-main-a.json")
	$(".btn").each(function(){
		$(this).click(function(){
			var sUrl=""
			$(this).addClass("red").parent().siblings().find("a").removeClass("red")
			console.log($(this).html())
			if($(this).html()%2==0){
				sUrl="../data/list/list-main-b.json"
			}else{
				sUrl="../data/list/list-main-a.json"
			}
			$(".pro>ul").html("")
			listMain(sUrl)
		})
	})
//	$.get("../data/list/list-main-a.json",function(data){
//		var ma=data;
//		for(var i in ma){
//			$(".pro>ul").append(
//								'<li>'
//								+'<div class="pro-lims">'
//								+'</div>'
//								+'<div class="pro-liimg">'
//									+'<a href="details.html">'
//										+'<img src='+ma[i].imgSrc+'/>'
//									+'</a>'
//								+'</div>'
//								+'<div class="pro-lipc">'
//									+'<div class="val-n">'
//										+'<span class="p4-jg02">'+ma[i].price+'</span>'
//										+'<del class="delcon">'+ma[i].yPrice+'</del>'
//									+'</div>'
//								+'</div>'
//								+'<div class="pro-line">'
//									+'<a href="details.html">'
//										+'<span class="pt-zy"></span>'
//										+ma[i].name+
//									'</a>'
//								+'</div>'
//							+'</li>'
//			)
//		}
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