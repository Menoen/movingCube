	var canvas=document.getElementById("myCanvas");
	var c=document.getElementById("hert");
	var cxt=canvas.getContext("2d");
	cxt.beginPath();
	cxt.fillStyle="pink";
	cxt.strokeStyle="pink";
	cxt.moveTo(75,40);
	cxt.bezierCurveTo(75,37,70,25,50,25);
	cxt.bezierCurveTo(20,25,20,62.5,20,62.5);
	cxt.bezierCurveTo(20,80,40,102,75,120);
	cxt.bezierCurveTo(110,102,130,80,130,62.5);
	cxt.bezierCurveTo(130,62.5,130,25,100,25);
	cxt.bezierCurveTo(85,25,75,37,75,40);
	cxt.fill();
	cxt.stroke();
	//keyborad control
	//方案一：判断按下的键并执行css变换。缺点：不能同时使用两个键。
	// document.onkeydown = function(event){
	// 	var code = event.keyCode;
	// 	console.log(code);
	// 	switch (code){
	// 		case 37:
	// 		    $(".inside").css("left","-=10px");
	// 		    break;
	// 		case 38:
	// 		    $(".inside").css("top","-=10px");
	// 		    break;
	// 		case 39:
	// 		    $(".inside").css("left","+=10px");
	// 		    break;
	// 		case 40:
	// 		    $(".inside").css("top","+=10px");
	// 		    break;
	// 		default:
	// 		    break;
	// 	}
	// }
	// document.onkeyup = function(event){
	// 	var code = event.keyCode;
	// 	console.log(code);
	// 	switch (code){
	// 		case 37:
	// 			$(".inside").animate({left:"0px"},3000);
	// 		    break;
	// 		case 38:
	// 		    $(".inside").animate({top:"34px"},3000);
	// 		    break;
	// 		case 39:
	// 			$(".inside").animate({left:"0px"},3000);
	// 		    break;
	// 		case 40:
	// 		    $(".inside").animate({top:"34px"},3000);
	// 		    break;
	// 		default:
	// 		    break;
	// 	}
	// }

	
	//方案二：写定时器，按下时开始不断运动，松开时停止运动.用到offset().
	//四个方向boolean判断定时器中的运动。
	//缺点：onkeyup canvas返回原处的时候，若是触发onkeydown，就会出现先返回，再运动的情况
	//返回的方向不能斜着。
	var otop = oright = obottom = oleft = false;
	var oCanv = $("#myCanvas");
	setInterval(function(){
		if (otop) {
			oCanv.css("top","-=10px");
		}else if (obottom) {
			oCanv.css("top","+=10px");
		}
		if (oright) {
			oCanv.css("left","+=10px");
		}else if (oleft) {
			oCanv.css("left","-=10px");
		}
	},30);
	document.onkeydown = function(event){
		var event = event||window.event;
		var code = event.keyCode;
		switch (code){
			case 37:
				oleft = true;
			    break;
			case 38:
			    otop = true;
			    break;
			case 39:
				oright = true;
			    break;
			case 40:
			    obottom = true;
			    break;
			default:
			    break;
		}
	}
	document.onkeyup = function(event){
		var event = event||window.event;
		var code = event.keyCode;
		switch (code){
			case 37:
				oleft = false;
				$(".inside").animate({left:"0px"},1000);
			    break;
			case 38:
			    otop = false;
			    $(".inside").animate({top:"34px"},1000);
			    break;
			case 39:
				oright = false;
				$(".inside").animate({left:"0px"},1000);
			    break;
			case 40:
			    obottom = false;
			    $(".inside").animate({top:"34px"},1000);
			    break;
			default:
			    break;
		}

	}