$(function(){
	function resize(){
		var deviceWidth = document.documentElement.clientWidth>640?640:document.documentElement.clientWidth;
		//alert(deviceWidth);
		document.documentElement.style.fontSize = (deviceWidth/6.4)+'px';
	}
	resize();
	$(window).resize(function(){
		resize();
	});
	//logo动画
	function subjectShow(){
		$(".subject").animate({"top":"0"},800,function(){
			$(".subject").addClass("subject1");
		});
	}
	function subjectHidden(){
		$(".subject").animate({"top":"-80px"},800,function(){
			$(".subject").removeClass("subject1");
		});
	}
	function forever(){
		subjectShow();
		setTimeout(subjectHidden,4000);
	}
	setInterval(forever,5000);
	//二维码
	/*$(".basehead header .aboutUser .phone .usericon").mouseover(function(){
		$(".basehead header .aboutUser .phone .code").css({"display":"block"});
	}).mouseout(function(){
		$(".basehead header .aboutUser .phone .code").css({"display":"none"});
	})*/
	//用户
	/*$("#user-icon").mouseover(function(){
		$(".user .uesr-box").css({"display":"block"});
	});
	$(".basehead header .aboutUser .user .uesr-box").mouseenter(function(){
		$(".uesr-box").css({"display":"block"});
	}).mouseleave(function(){
		$(".uesr-box").css({"display":"none"});	
	});*/
	//移动端菜单栏闭合开关
	/*var flag = 0;
	function dobbleC(){
		if( flag == 0 ){
			$('.menu-right').css('display','block');
			function flagTimeout(){
				$(".menu-right").css({'right': '2.08rem'});
				$("#contentLeft").css('left', "-2.08rem");
			}
			setTimeout(flagTimeout,1);
			
			flag = 1;
		}else{
			$(".menu-right").css('right', "0");
			$("#contentLeft").css('left', 0);
			
			flag = 0;
			setTimeout("$('.menu-right').css('display','none')",1000);
		}
	}
	$(".menu-base img").click(function(){
		 dobbleC();
	});*/
	//课程切换
	function blueActive(arg1,arg2){
		$(arg1).click(function(){
			$(this).addClass(arg2).siblings().removeClass(arg2);
		});
	}
	blueActive(".toggle-tit a","current");
	blueActive(".aboutUser .user .uesr-box .login-box .register","login");
	blueActive(".basehead header .aboutUser .user .uesr-box .login-box","curent-color");
	function courseToggle(arg1,arg2,arg3){
		$(arg1).click(function(){
			$(arg2).css({"display":"block"});
			$(arg3).css({"display":"none"});
		});
	}
	courseToggle(".gray11",".employment",".hopping");
	courseToggle(".gray22",".hopping",".employment");
	courseToggle(".gray111",".employment1",".hopping1");
	courseToggle(".gray222",".hopping1",".employment1");
	function hotCourseToggle(arg1,arg2,arg3,arg4,arg5,arg6){
		$(arg1).click(function(){
			$(arg2).css({"display":"block"});
			$(arg3).css({"display":"none"});
			$(arg4).css({"display":"none"});
			$(arg5).css({"display":"none"});
			$(arg6).css({"display":"none"});
		});
	}
	hotCourseToggle(".indexwrap4 .competitive .toggle-tit .gray1",".indexwrap4 .competitive .base-model1",
				".indexwrap4 .competitive .base-model2",".indexwrap4 .competitive .base-model3",
				".indexwrap4 .competitive .base-model4",".indexwrap4 .competitive .base-model5");
	hotCourseToggle(".indexwrap4 .competitive .toggle-tit .gray2",".indexwrap4 .competitive .base-model2",
				".indexwrap4 .competitive .base-model1",".indexwrap4 .competitive .base-model3",
				".indexwrap4 .competitive .base-model4",".indexwrap4 .competitive .base-model5");
	
	hotCourseToggle(".indexwrap4 .competitive .toggle-tit .gray3",".indexwrap4 .competitive .base-model3",
				".indexwrap4 .competitive .base-model2",".indexwrap4 .competitive .base-model1",
				".indexwrap4 .competitive .base-model4",".indexwrap4 .competitive .base-model5");
	
	hotCourseToggle(".indexwrap4 .competitive .toggle-tit .gray4",".indexwrap4 .competitive .base-model4",
				".indexwrap4 .competitive .base-model2",".indexwrap4 .competitive .base-model3",
				".indexwrap4 .competitive .base-model1",".indexwrap4 .competitive .base-model5");
	
	hotCourseToggle(".indexwrap4 .competitive .toggle-tit .gray5",".indexwrap4 .competitive .base-model5",
				".indexwrap4 .competitive .base-model2",".indexwrap4 .competitive .base-model3",
				".indexwrap4 .competitive .base-model4",".indexwrap4 .competitive .base-model1");
	hotCourseToggle(".moveGray1",".moveBaseModel1",".moveBaseModel2",".moveBaseModel3");
	hotCourseToggle(".moveGray2",".moveBaseModel2",".moveBaseModel1",".moveBaseModel3");
	hotCourseToggle(".moveGray3",".moveBaseModel3",".moveBaseModel2",".moveBaseModel1");
	/*rollBanner*/
	function bannerRun(arg1,arg2,arg3,arg4){
		var allWidth = $(arg1).outerWidth(true)*$(arg1).length;
		var rollClone =  $(arg1).clone();
		$(arg2).append( rollClone );
		var num = 0;
		var timer = null;
		function rollLeft(){
			num-=2;
			if( num < -allWidth ){
				num = 0;
			}
			$(arg3).css({"left":num});
		}
		timer = setInterval(rollLeft,30);
		$(arg4).mouseover(function(){
			clearInterval(timer);
		});
		$(arg4).mouseout(function(){
			clearInterval(timer);
			timer = setInterval(rollLeft,30);
		});
	}
	bannerRun(".roll-img","#longUl","#longBox",".rollWindow");
	function bannerRunMove(){
		var allWidth = 150*$("#longUl1").length;
		var rollClone =  $(".roll-img1").clone();
		$("#longUl1").append( rollClone );
		var num = 0;
		var timer = null;
		function rollLeft(){
			num-=2;
			if( num < -allWidth*4 ){
				num = 0;
			}
			$("#longBox1").css({"left":num});
		}
		timer = setInterval(rollLeft,30);
		$("#rollWindow1").mouseover(function(){
			clearInterval(timer);
		});
		$("#rollWindow1").mouseout(function(){
			clearInterval(timer);
			timer = setInterval(rollLeft,30);
		});
	}
	bannerRunMove();
	/* 点击播放  */
	var num = 0;
	timer = null;
	var clickWindowW = $(".clickWindow").width();
	var rightW = $("#contentLeft .indexwrap10 .right").width();
	var rightWWW = rightW*0.69;
	function leftClick(){
		num++;
		if(num>1 && clickWindowW == 458){
			num = 0;
			$(".fixBox").animate({left:-500*num},500);
		}else if(num>1 && clickWindowW == 390){
			num = 0;
			$(".fixBox").animate({left:-393*num},500);
		}else if(num>1 && clickWindowW != 390 && clickWindowW != 458){
			num = 0;
			$(".fixBox").animate({left:-rightWWW*num},500);
		}
	}
	function rightClick(){
		num--;
		if(num<0 && clickWindowW == 458){
			num = 1;
			$(".fixBox").animate({left:-500*num},500);
		}else if(num<0 && clickWindowW == 390){
			num = 1;
			$(".fixBox").animate({left:-393*num},500);
		}else if(num<0 && clickWindowW != 390 && clickWindowW != 458){
			num = 1;
			$(".fixBox").animate({left:-rightWWW*num},500);
		}
		
	}
	$(".left-arrow").click(function(){
		leftClick();
	});
	$(".right-arrow").click(function(){
		rightClick();
	});
	//北风口碑
	$(window).scroll(function(event) {
		var h = $(window).scrollTop();
		//学习保障
		if(h>2000 && h<3200){
			$(".indexwrap6 .box .img-box .img2").animate({"opacity":"1"},200,function(){
				$(".indexwrap6 .box .img-box .img1").animate({"top":"0"},200,function(){
					$(".indexwrap6 .box .img-box .img8").animate({"top":"110"},200,function(){
						$(".indexwrap6 .box .img-box .img3").animate({"left":"61"},200,function(){
							$(".indexwrap6 .box .img-box .img4").animate({"left":"287"},200,function(){
								$(".indexwrap6 .box .img-box .img5").animate({"top":"357"},200,function(){
									$(".indexwrap6 .box .img-box .img6").animate({"left":"768"},200,function(){
										$(".indexwrap6 .box .img-box .img7").animate({"left":"959"},200)
									})
								})
							})
						})
					})
				})
			});
		}
		if( h>4050 && h<4200){
			var i1 = 0;
			var i2 = 0;
			var i3 = 0;
			var i4 = 0;
			var i5 = 0;
			setInterval(function(){
				if(i1<301){
					$(".skip-num1").text(i1++);
				}
			},10);
			setInterval(function(){
				if(i2<601){
					$(".skip-num2").text(i2+=4);
				}
			},10);
			setInterval(function(){
				if(i3<3001){
					$(".skip-num3").text(i3+=15);
				}
			},10);
			setInterval(function(){
				if(i4<30001){
					$(".skip-num4").text(i4+=200);
				}
			},10);
			setInterval(function(){
				if(i5<854621){
					$(".skip-num5").text(i5+=3000);
				}
			},10);
		}
	});
	//banner轮播
	var bannerNum = 0;
	var bannerTimer = null;
	var countNum= $('.runCircle span').length -1;
	//点击圆点播放
	function bannerCircleplay(){
		bannerNum++;
		if( bannerNum >countNum){
			bannerNum = 0;
		}
		$(".circle").click(function(){
			var index = $(this).index();
			bannerNum = index;
			$(".circle").eq(index).addClass("current-circle").siblings().removeClass("current-circle");
			$("#bannerBox").css({left:-bannerNum+"00%"});
		});
	}
	//点击左侧按钮播放
	function bannerLeftplay(){
		bannerNum--;
		if( bannerNum < 0){
			bannerNum = countNum;
		}
		$(".circle").eq(bannerNum).addClass("current-circle").siblings().removeClass("current-circle");
		$("#bannerBox").css({left:-bannerNum+"00%"});
	}
	//点击右侧按钮播放
	function bannerRightplay(){
		bannerNum++;
		if( bannerNum > countNum){
			bannerNum = 0;
		}
		$(".circle").eq(bannerNum).addClass("current-circle").siblings().removeClass("current-circle");
		$("#bannerBox").css({left:-bannerNum+"00%"});
	}
	//自动播放
	bannerTimer= setInterval(bannerRightplay,3000);
	$('#bannerBox').mouseover(function(event) {
			clearInterval(bannerRightplay);
		}).mouseout(function(event) {
			clearInterval(bannerTimer);
			bannerTimer = setInterval(bannerRightplay, 3000);
		});
	//鼠标经过停止自动播放
	$(".smallBox").mouseover(function(){
		clearInterval(bannerTimer);
	});
	$(".banner-rightArrow").click(function(){
		bannerRightplay();
	});
	$(".banner-leftArrow").click(function(){
		bannerLeftplay();
	});
	bannerCircleplay();
	//allCourse
	function linkActive(arg1,arg2){
		$(arg1).click(function(){
			$(this).addClass(arg2);
			var parent = $(this).parent();
			parent.siblings().children(".link").removeClass(arg2);
		});
	}
	linkActive(".tab-li .link","linkActive");
	linkActive(".tab-liv1 .link","linkActivelong");
	//分类切换PC
	function linkActiveParent(){
		$(".classification .tab-liv1 .link").click(function(){
			$(this).addClass("linkActivelong");
			$(this).parent(".tab-liv1").parent(".tab-ul").parent(".classification").siblings().children(".tab-ul").children(".tab-liv1").children(".link").removeClass("linkActivelong");
		});
	}
	linkActiveParent();
	//分类切换MOve
	function linkActiveMove(arg1,arg2){
		$(arg1).click(function(){
			$(this).addClass(arg2);
			$(this).siblings().removeClass(arg2);
		});
	}
	linkActiveMove(".classificationMOVE .btn-box .btn","btnActive");
	/*linkActiveParent(".classification .tab-li .link","linkActivelong");*/
}); 