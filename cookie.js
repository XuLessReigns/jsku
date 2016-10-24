//创建和修改cookie
function setCookie(obj){
	var cookieStr = encodeURIComponent(obj.name) + "=" + encodeURIComponent(obj.value);
	if(obj.expires){
		cookieStr+=";expires=" + obj.expires;
	}
	if(obj.path){
		cookieStr+=";path=" + obj.path;
	}
	if(obj.domain){
		cookieStr+=";domain=" + obj.domain;
	}
	if(obj.secure){
		cookieStr+=";secure";
	}
	document.cookie = cookieStr;
}
//删除cookie
function removeCookie(obj){
	var date = new Date();
	date.setSeconds(-1);
	setCookie({
		name:obj.name,
		value:obj.value,
		expires:date,
		path:obj.path,
		domain:obj.domain,
		secure:obj.secure
	}); 
}
//查找cookie
function getCookie(cname){
	var cookieStr = document.cookie;
	var arr = cookieStr.split("; ");
	for(var i = 0;i<arr.length;i++){
		var arr2 = arr[i].split("=");
		if(cname==decodeURIComponent(arr2[0]) ){
			var result = decodeURIComponent(arr2[1]);
		}
	}
	return result;
}
