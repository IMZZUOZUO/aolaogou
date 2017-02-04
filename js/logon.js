$(function(){
	$("#logonHeader").load("../html/common/header.html")
	$("#logonFooter").load("../html/common/footer.html")
})
//window.onload=function (){
//	function $(id){
//		return document.getElementById(id)
//	}
//	var userName=$("userName")
//	var pwd=$("pwd")
//	var rePwd=$("rePwd")
//	var yanZ=$("yanZhen")
//	var check=$("cK")
//	var btn=$("btnSubmit")
//	var regs={
//		
//	}
//	userName.onfocus=userName.onblur=function(evt){
//		var e=evt||window.event
//		checkUserName(e)
//	}
//	function checkUserName(_e){
//		var type
//		if(_e){
//			type=_e.type//_e.type返回当期事件表示的事件名称
//		}
//		var value=userName.value
//		var box=userName.parentNode
//		var tip=box.nextElementSibling
//		var span=tip.lastElementChild
//		if(type==focus){
//			if(value==""){
//				span.className="form-good"
//				span.innerHTML="请输入要注册的手机号";
//				return false;//验证完成不需要其他操作直接跳出直接跳出
//			}
//		}
//	}
//}
$(function(){
	var userName=$("#userName")
	var pwd=$("#pwd")
	var rePwd=$("#rePwd")
	var yanZ=$("#yanZhen")
	var	duanX=$("#duanX")
	var check=$("#cK")
	var btn=$("#btnSubmit")
	var regs={
		userNameRex:/^1[3|4|5|7|8]\d{9}$/,
		pwdRex:/.{6,20}/,
		numReg: /\d/g,
		strReg: /[a-zA-Z]/g,
		tsReg: /[^\u4e00-\u9fa5a-zA-Z0-9]/g,
	}
	function getPwdLevel(value){
		var level=0;
		if(value.match(regs.numReg)){
			level++;
	
		}
		if(value.match(regs.strReg)){
			level++;
			
		}
		if(value.match(regs.tsReg)){
			level++;
		
		}
		return level;
	}
	var flag=false//设置一个开关用来做空白处的判定
	userName.focus(function(){
		var	value=$(this).val()
		var tip=$(this).parent().next(".form-z2").find("span").last()
		tip.removeClass().addClass("form-good")
		tip.html("请输入注册的手机号")
	})
	userName.blur(function(){
		user()
	})
	function user(){
		var	value=userName.val()
		var tip=userName.parent().next(".form-z2").find("span").last()
		if(value==""){
			if(flag){
				tip.removeClass().addClass("form-eorr")
				tip.html("请输入手机号")
			}else{
				tip.removeClass().addClass("form-hidd")
			}
			return false
		}else if(!regs.userNameRex.test(value)){
			tip.removeClass().addClass("form-eorr")
			tip.html("账号暂时只开放手机号码注册")
			return false
		}else{
//			$.get("../data/common/userName.json",function(data){
//				for(var i in data.userName){
//					if(value==data.userName[i]){
//						var tip=userName.parent().next(".form-z2").find("span").last()
//						tip.removeClass().addClass("form-eorr")
//						tip.html("用户名存在")
//					}
//				}
//			})
			tip.removeClass().addClass("form-hidd")
			return true
		}
	}
	function pwdBlur(){
		var	value=pwd.val()
		var tip=pwd.parent().next(".form-z2").find("span").last()
		if(value==""){
			if(flag){
				tip.removeClass().addClass("form-eorr")
				tip.html("请输入密码")
			}else{
				tip.removeClass().addClass("form-hidd")
			}
			return false
		}else if(!regs.pwdRex.test(value)){
			tip.removeClass().addClass("form-eorr")
			tip.html("密码只能由英文、数字及标点符号共6位组成")
			return false
		}else if(regs.pwdRex.test(value)){
			var level = getPwdLevel(value)
			if(level<=1){
				tip.removeClass().addClass("form-eorr")
				tip.html("该密码比较简单，有被盗风险")
				return true
			}else{
				tip.removeClass().addClass("form-hidd")
				return true
			}
			
		}
	}
	pwd.focus(function(){
		var	value=$(this).val()
		var tip=$(this).parent().next(".form-z2").find("span").last()
		tip.removeClass().addClass("form-good")
		tip.html("字母、数字和符号的组合,6-20个字符")
	})
	pwd.blur(function(){
		pwdBlur()
//		}else{
//			tip.removeClass().addClass("form-eorr")
//			tip.html("密码长度只能在6-20位字符之间")
//		}
//		}else{
//			tip.removeClass().addClass("form-hidd")
//			return true
//		}
	})
	function rePwdBlur(){
		var	value=rePwd.val()
		var tip=rePwd.parent().next(".form-z2").find("span").last()
		if(value==""){
			if(flag){
				tip.removeClass().addClass("form-eorr")
				tip.html("请输入密码 ")
			}else{
				tip.removeClass().addClass("form-hidd")
			}
			return false
		}else if(value!=pwd.val()){
			tip.removeClass().addClass("form-eorr");
			tip.html("两次输入密码不一致");
			return false;
		}else{
			tip.removeClass().addClass("form-good");
			tip.html("两次输入的密码一致")
			return true;
		}
	}
	rePwd.focus(function(){
		var	value=$(this).val()
		var tip=$(this).parent().next(".form-z2").find("span").last()
		tip.removeClass().addClass("form-good")
		tip.html("请再次输入密码")
	})
	rePwd.blur(function(){
		rePwdBlur()
	})
	var num=""//设置全局的num即为验证码，有验证码函数返回验证码框后的焦点或者
	//点击验证码区域是调用验证码函数。
	yanZ.focus(function(){
		var value=$(this).val()
		var tip=$(this).parent().next(".form-z2").find("span").last()
		tip.removeClass().addClass("form-good")
		tip.html("输入验证码")
	})
	$("#yZm").click(function(){
		num=""
		num=yanZhengMa()
		$("#yZm").html(num)
	})
//	duanX.focus(function(){
//		var value=$(this).val()
//		var tip=$(this).parent().next(".form-z2").find("span").last()
//		tip.removeClass().addClass("form-good")
//		tip.html("输入验证码")
//	})
//	$("#dx").click(function(){
//		numD=""
//		numD=yanZhengMa()
//		$("#dx").html(num)
//	})
//	duanX.blur(function(){
//		duanZBlur()
//	})
	yanZ.blur(function(){
		yanZBlur()
	})//验证码框失去焦点
	function yanZBlur(){
		var value=yanZ.val()
		var tip=yanZ.parent().next(".form-z2").find("span").last()
		if(value==""){
			tip.removeClass().addClass("form-eorr")
			tip.html("验证码为空")
			return false;
		}else if(value.toLocaleLowerCase()==num.toLocaleLowerCase()){
			tip.removeClass().addClass("form-hidd")
			return true			
		}else{
			tip.removeClass().addClass("form-eorr")
			tip.html("验证码错误")
			num=""
			num=yanZhengMa()
			$("#yZm").html(num)
			return false;
		}
	}//此处存在一个bug：第一次注册时无法一次完成
//	function duanZBlur(){//短信验证函数
//		var value=duanX.val()
//		var tip=duanX.parent().next(".form-z2").find("span").last()
//		if(value==""){
//			tip.removeClass().addClass("form-eorr")
//			tip.html("验证码为空")
//			return false;
//		}else if(value.toLocaleLowerCase()==numD.toLocaleLowerCase()){
//			tip.removeClass().addClass("form-hidd")
//			return true			
//		}else{
//			tip.removeClass().addClass("form-eorr")
//			tip.html("验证码错误")
//			numD=""
//			numD=yanZhengMa()
//			$("dx").html(numD)
//			return false;
//		}
//	}
	function yanZhengMa(){//生成验证码函数
		num=""
		for(var i=1;i<=4;i++){
			var ranDom=0
			ranDom=parseInt(Math.random()*4)
			switch(ranDom){
				case 0:num+=parseInt(Math.random()*10);
				break;
				case 1:num+=parseInt(Math.random()*10);
				break;
				case 2:num+=String.fromCharCode(Math.random()*26+97);
				break;
				case 3:num+=String.fromCharCode(Math.random()*26+65)
			}
		}
	//				console.log(num)
//		$("#yZm").html(num)
		return num
	}
//	function yanZhengMaD(){//生成验证码函数
//		num=""
//		for(var i=1;i<=4;i++){
//			var ranDom=0
//			ranDom=parseInt(Math.random()*4)
//			switch(ranDom){
//				case 0:num+=parseInt(Math.random()*10);
//				break;
//				case 1:num+=parseInt(Math.random()*10);
//				break;
//				case 2:num+=String.fromCharCode(Math.random()*26+97);
//				break;
//				case 3:num+=String.fromCharCode(Math.random()*26+65)
//			}
//		}
//	//				console.log(num)
//		$("#dx").html(num)
//		return num
//	}
	
	function goAjax(){
		
		$.get("../data/common/userName.json",function(data){
			var go=true//判断是否跳转开关
			for(var i in data.userName){
				if(userName.val()==data.userName[i]){//判断数据库是否存在相同用户名
					var	value=userName.val()
					var tip=userName.parent().next(".form-z2").find("span").last()
					tip.removeClass().addClass("form-eorr")
					tip.html("用户名存在")
					return false
				}
			}
			if(go){
				location.href="register.html"
			}
		})
	}
	btn.click(function(){
		if(check[0].checked){
//			console.log(1)
			flag=true
			if(user()&&pwdBlur()&&rePwdBlur()&&yanZBlur()){
				goAjax()
//				if(goAjax()){
//					console.log(1)
//					location.href="index.html"
//				}
				
			}
			flag=false
		}else{
//			console.log(check[0].checked)
			return false
		}
	})
})
