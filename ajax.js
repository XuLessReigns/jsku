/*
 	功能：AJAX
 	参数多：  怎么来组织？    对象
 		key:value
 		method:"post",   //请求的方式  值：get或post
 		url:"路径",
 		//请求或提交的条件
 		params:{key1:value,key2:value,key3:value.....}   //key1=value1&key2=value2&key3=value3
 		isAsyc:true,    //表示是否是异步  true 或 false
 		success:function(data){   //data表示会话成功后返回后的结果
 			
 		},
 		error:function(mes){   //mes表示的会话失败后返回后的结果
 			
 		}
 		
 */
function ajax(obj){
	var xhr;//先创建AJAX对象
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}else{//兼容ie6
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//连接服务器
	if(obj.method=="GET"){//get请求
		if(obj.params){//有参数
			xhr.open("GET",obj.url + "?random=" + new Date().getTime() + "&" + getStr(obj.params),obj.isAsyc);
		}else{//没参数
			xhr.open("GET",obj.url + "?random=" + new Date().getTime(),obj.isAsyc);
		}
		xhr.send();
	}else{//post请求
		xhr.open("POST",obj.url,obj.isAsyc);
		var data = getStr(obj.params);
		//模拟表单提交
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send(data);
	}
	if(obj.isAsyc){
		xhr.onreadystatechange = function(){
			handler();	
		}
	}else{
		handler();
	}
	function getStr(data){
		var arr = [];
		for(var item in data){
			var str = item + "=" + data[item];
			arr.push(str);
		}
		var result = arr.join("&");
		return result;
	}
	function handler(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				obj.success(xhr.responseText);
			}else{
				obj.error(xhr.status);
			}
		}
	}
}
