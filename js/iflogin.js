$('#gzh img').error(function() {
	$("#gzh").hide();
	$("#sjfw").show()
});
$.ajax({
    type : "get",
    url : current_domain+"/javascript.php?part=iflogin",
    dataType : "jsonp",
    jsonp: "callback",
    jsonpCallback:"success_jsonpCallback",
    success: function(json) {
		var prints;
		var url = encodeURIComponent(window.location.href);
		if (json.login=='success'){
			prints = '<a class="link-scan">'+json.s_uid+'</a>&nbsp;&middot;&nbsp;<a class="link-scan" href="'+current_domain+'/member/index.php">用户中心</a> &middot; <a class="link-scan" href="'+current_domain+'/'+current_logfile+'?mod=out&url='+url+'&cityid='+current_cityid+'" >退出</a>';
		}else if (json.login=="error"){
			if(json.qqlogin=="success"){
				prints = '<a class="link-scan" href="'+current_domain+'/include/qqlogin/qq_login.php" title="用QQ帐号登录">QQ登录</a>';	
			}else if(json.qqlogin=="error"){
				prints = '';	
			}
			if(json.wxlogin=="success"){
				prints += '<a class="btn btn-outline" href="'+current_domain+'/include/wxlogin/wx_login.php" title="用微信扫一扫登录">微信登录</a>';	
			}else if(json.qqlogin=="error"){
				prints += '';
			}
			prints+=' <a class="btn btn-outline" href="'+current_domain+'/'+current_logfile+'?mod=login&url='+url+'&cityid='+current_cityid+'">登录</a> <a class="btn btn-outline" href="'+current_domain+'/'+current_logfile+'?mod=register&cityid='+current_cityid+'">注册</a>';
		}
		$('#iflogin').html(prints);
	}
});