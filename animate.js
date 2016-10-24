			/*
			 	动画
			 		运动属性
			 		透明度    1-100
			 	参数：
			 		dom：要运动的节点对象
			 		propertyName:  width  height  left top...
			 		target:目标值
			 		属性名：目标值 、属性名：目标值 、属性名：目标值 ....
			 		dataObj
			 			对象
			 			{width:300,height:400,opacity:90,left:500}
			 			for in
			 			for(var attr in dataObj){
			 				attr
			 				dataObj[attr]   目标值
			 				
			 			}
			 		time:表示运动的频率
			 		fn :运动完之后所要执行的程序  函数
			 		
			 */
			function animate(dom, dataObj,time,fn) {
				clearInterval(dom.termId);
				//step
				
				dom.termId = setInterval(function() {
					var flag = true;
					for (var attr in dataObj) {
						/*获取当前值*/
						if (attr == "opacity") { //透明度
							var currentValue = getStylePropertyValue(dom, "opacity") * 100
						} else { //其他
							var currentValue = parseInt(getStylePropertyValue(dom, attr))
						}
						
						/*根据运动的方向，确定步子的方向*/
						/*
						if(currentValue>dataObj[attr]){
							var step = -10;
						}else{
							var step = 10;
						}
						*/
						
						var step = (dataObj[attr]-currentValue)/10;
						// 
						//step = step>0?Math.ceil(step):Math.floor(step);
						if(step>0){
							step = Math.ceil(step);
						}else{
							step = Math.floor(step);
						}
						
						
						/*判断是否已经达到目标*/
						if (currentValue == dataObj[attr]) {

							continue 
						}
						if(currentValue!=dataObj[attr]){
							flag = false;
						}

						/*改变样式属性的值*/
						if (attr == "opacity") { //透明度处理
							currentValue += step;
							dom.style["opacity"] = currentValue / 100;
							dom.style["filter"] = "alpha(opacity=" + currentValue + ")";
						} else { //其他情况处理
							currentValue += step;
							dom.style[attr] = currentValue + "px";
						}
					}
					
					if(flag){
						clearInterval(dom.termId);
						if(fn){
							fn();
						}
					}
				}, time)
			}

			/*
		功能：获取指定节点样式属性的值
		参数：dom 表示的指定的节点对象  propertyName 表示是样式属性名
	 */

			function getStylePropertyValue(dom, propertyName) {
				//var dom,propertyName
				if (window.getComputedStyle) {
					return getComputedStyle(dom, null)[propertyName];
				} else { //IE
					return dom.currentStyle[propertyName];
				}

			}