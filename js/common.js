		$(document).ready(function(){
			/*导航栏效果*/
			$(".header ul li").mouseover(function(){
				$(this).addClass('cur');
			}).mouseout(function(){
				$(this).removeClass('cur');
			});
			$(".header ul li.cur").mouseout(function(){
				$(this).addClass('cur');
			});
			/*项目导航栏效果*/
			$(".projectContent .nav li").click(function(){
				$(this).addClass('cur').siblings('li').removeClass("cur");

			});
			/*首页热门项目表格效果*/
			$(".hot_project .tbody .wrap>li").each(function(index,element){
				if(index % 2==0){
					$(this).css("background","#f8f8f8");
				}else{
					$(this).css("background","#fff");
				}
				var $cor=$(this).css("backgroundColor");
				$(this).mouseover(function(){
					$(this).css("background","#f9f2dd")
				}).mouseleave(function(){
					$(this).css("background",$cor)
				});
			});
			//首页项目和热门项目部分样式设置
			$(".hot_project .tbody ul li ul li:nth-child(2),.hot_project .tbody ul li ul li:nth-child(6)").css("color","#ff6a68");
			$(".project .inner li:nth-child(1) .img").css("backgroundPosition","-2px -58px");
			$(".project .inner li:nth-child(2) .img").css("backgroundPosition","-166px -58px");
			$(".project .inner li:nth-child(3) .img").css("backgroundPosition","-332px -58px");
			$(".project .inner li:nth-child(4) .img").css("backgroundPosition","-496px -58px");
			$(".project .inner li:nth-child(1) strong").css("color","#ff6000");
			$(".project .inner li:nth-child(4)").css("borderRight","none");
			$(".successful_case .inner li:nth-child(4)").css("marginRight","0");
			/*表格鼠标移入移出效果*/
			$("table tbody tr").mouseover(function(){
				$(this).css("background","#f9f2dd");
			}).mouseleave(function(){
				$(this).css("background","#fff");
			});
			/*股权交易页面表格买入颜色设置*/
			$("#tab ul li ul li").each(function(index,element){
				if($(this).html()=="买入"){
					$(this).css("color","#ff6000");
					$(this).next().css("color","#ff6000");
				}
			});

			/*新闻公告页面*/
			$(".newsBulletin .list li").mouseover(function(){
				$(this).css("color","#ff6000");
				$(this).find("a").css("color","#ff6000");
				$(this).find(".time").css("color","#ff6000");
				$(this).find("em").css("backgroundColor","#ff6000");
			}).mouseleave(function(){
				$(this).css("color","#000");
				$(this).find("a").css("color","#000");
				$(this).find(".time").css("color","#969696");
				$(this).find("em").css("backgroundColor","#000");
			});
			$(".newsBulletin .page ul li").click(function(){
				$(this).addClass('cur').siblings('li').removeClass('cur');
			});
			/*房币头条页面左侧标题栏点击效果*/
			$(".layoutDemo .left a").click(function(){
				$(this).addClass('cur').siblings('a').removeClass('cur');
			});
			//用户信息编辑和保存切换效果
			$(".modifyInformation .right .preservation").click(function(){
				if($(this).html()=="保存"){
					$(".modifyInformation .editDetail").hide();
					$(".modifyInformation .saveDetail").show();
					$(this).html("编辑");
				}else if($(this).html()=="编辑"){
						$(".modifyInformation .editDetail").show();
						$(".modifyInformation .saveDetail").hide();
						$(this).html("保存");
				}

			});
			
		})