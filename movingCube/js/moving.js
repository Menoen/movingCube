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
	//����һ���жϰ��µļ���ִ��css�任��ȱ�㣺����ͬʱʹ����������
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

	
	//��������д��ʱ��������ʱ��ʼ�����˶����ɿ�ʱֹͣ�˶�.�õ�offset().
	//�ĸ�����boolean�ж϶�ʱ���е��˶���
	//ȱ�㣺onkeyup canvas����ԭ����ʱ�����Ǵ���onkeydown���ͻ�����ȷ��أ����˶������
	//���صķ�����б�š�
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