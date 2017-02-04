$(function(){
	$("#logonHeader").load("../html/common/header.html")
	$("#logonFooter").load("../html/common/footer.html")
	var reFalse={}
	reFalse.val=0
	$.cookie("reFalse",JSON.stringify(reFalse),{expires:2,path:"/"})
})
$(function(){
	var userName=$("#userName")
	var pwd=$("#pwd")
	var yanZ=$("#yZm")
	var check=document.getElementById("cK")//这里要用原生js获取选框属性才有用
	var btn=$("#form-btn")
	var regs={
		userNameRex:/^1[3|4|5|7|8]\d{9}$/
	}
	if($.cookie("userInfo")){
		var value=JSON.parse($.cookie("userInfo")).userName
		var pwdValue=JSON.parse($.cookie("userInfo")).pwd
		userName.val(value)
		pwd.val(pwdValue)
	}
	userName.focus(function(){
		var tip=$(this).parent().next("div").find("div")
			tip.removeClass().addClass("form-z2-hidd")
	})
	pwd.focus(function(){
		var tip=$(this).parent().next("div").find("div")
			tip.removeClass().addClass("form-z2-hidd")
	})
	userName.blur(function(){
		userBlur()
	})
	function userBlur(){
		var value=userName.val()
		if(value==""){
			return true
		}else if(!regs.userNameRex.test(value)){
			var tip=userName.parent().next("div").find("div")
			tip.removeClass().addClass("form-z2")
			tip.html("用户名只能手机号")
			return false
		}else{
			return true
		}
		
	}
	btn.click(function(){
//		点击注册后触发事件
		if(userBlur()){
			if(userName.val()==""){
				var tip=userName.parent().next("div").find("div")
				tip.removeClass().addClass("form-z2")
				tip.html("请输入用户名")
				return false
			}//判断用户名格式
			if(pwd.val()==""){
				var tip=pwd.parent().next("div").find("div")
				tip.removeClass().addClass("form-z2")
				tip.html("请输入密码")
				return false
			}//判断密码是否填写
			$.get("../data/common/userName.json",function(data){
				//发送ajax请求
				var um=false,count
				//um为开关用来确定是否从数据库中找到该用户
				//count为找到用户后记录该用户对应的下标用来匹配密码
				for(var i in data.userName){
					if(userName.val()==data.userName[i]){
						um=true
						count=i
					}
				}//遍历数据库
				if(um){
					if(data.password[count]==pwd.val()){
						//判断密码是否匹配用户名
						var userInfo={}
						var Date
						userInfo.userName=userName.val()
						userInfo.pwd=pwd.val()
						if(check.checked){
							Date=30
						}else{
							Date=-1
						}
						$.cookie("userInfo",JSON.stringify(userInfo),{expires:Date,path:"/"})
						var reFalse={}
						reFalse.val=1
						$.cookie("reFalse",JSON.stringify(reFalse),{expires:2,path:"/"})
 // $.cookie(key, [val], [{expires: 过期日期, path: "路径一般为/"}])
 			// JSON.parse()
			// JSON.stringify() 
//		cookie还没讲空着所以第一次登录需要输入验证码也空掉 
						//console.log($.cookie("userInfo"))
						location.href="index.html"
					}else{
						var tip=pwd.parent().next("div").find("div")
						tip.removeClass().addClass("form-z2")
						tip.html("密码错误")
					}//用户名不匹配
				}else{
					var tip=userName.parent().next("div").find("div")
					tip.removeClass().addClass("form-z2")
					tip.html("该用户不存在")
				}//未找到该用户
			})
		}
	})
})
