define(function(){
	function aa(){
			//引入header
		$("#pase1").load("style-public.html  .pase1")
		$("#pase2").load("style-public.html  .pase2",function(){
			$(".classify").find("h3").hover(function(){
				$(this).siblings(".nav-s").css("display","block").find(".li-active").mouseenter(function(){
				$(this).children(".nav-ss").css("display","block");})
			})
			$(".nav-s").mouseleave(function(){
				$(this).css("display","none").find(".li-active").mouseleave(function(){
					$(this).children(".nav-ss").css("display","none");
				});
			})
			$(".food-right dl").find("dd").hover(function(){
				$(this).css('box-shadow',"5px 5px 10px #ccc")
			},function(){
				$(this).css("box-shadow","none")
			})
			//数据加载
			
					
			//立即枪数据渲染
			$.ajax({
				url:"http://localhost:3000/api/product?dataName=home&count=6&start=1",
				success:function (data) {
					var str=""
					for(var i=0;i<5;i++){
						str+=`<li>
						<img style="width: 234px;height: 234px" src="${data.page_data[i].detail.auth_icon}">
						<p class="name">${data.page_data[i].title}</p>
						<a href="#">立即抢</a>
						<p class="p"><span class="dj">${data.page_data[i].des}</span><span  class="dj2">129元</span></p>
					</li>`
					}
					$(".goods").children().children("ul").append(str)
				}
			})
			
			//渲染一楼数据
			$.ajax({
			// url: "../data/nav.json",
				url:"http://localhost:3000/api/product?dataName=home&count=6&start=1",

			success: function(data) {
				// console.log(data)
				// console.log(data.page_data[1].title)
				var str = ""

				for(var i = 0; i <6 ;i++) {
					str+=`
						<dd>
							<p>${data.page_data[i].title}</p>
							<p>${data.page_data[i].des}</p>
							<p class="p-img" >
								<img src="${data.page_data[i].detail.auth_icon}"/>
							</p>
						</dd>`
				}
				$(".r1").children("dl").append(str)
				$(".food-right dl").find("dd").hover(function(){
					$(this).css('box-shadow',"5px 5px 10px #ccc")
					},function(){
					$(this).css("box-shadow","none")
				})
			}
		})
			
			//渲染二楼数据
			$.ajax({
			url:"http://localhost:3000/api/product?dataName=home&count=6&start=2",
			success: function(data) {
//				console.log(data.length)
				var str = ""
				for(var i = 0; i <6 ;i++) {
					str+=`
						<dd>
							<p>${data.page_data[i].title}</p>
							<p>${data.page_data[i].des}</p>
							<p class="p-img" >
								<img src="${data.page_data[i].detail.auth_icon}"/>
							</p>
						</dd>`
				}
				$(".r2").children("dl").append(str)
// 				//添加滑过事件
				$(".food-right dl").find("dd").hover(function(){
					$(this).css('box-shadow',"5px 5px 10px #ccc")
					},function(){
					$(this).css("box-shadow","none")
				})
				$(".food-right dl").find("dd").click(function(){
					setTimeout(()=>{
									location.href="detail.html"
//									console.log(1)
								},2000)
				})
			}
		})
			
			
			//banner
			$.ajax({
				url:"http://localhost:3000/api/banner?dataName=banner&start=1",
				success:function (data) {
				var str=""
					// console.log(data)
					for(var i=0;i<3;i++){
						str+=`
						<img src="${data.page_data[i].banner}"/>
						`
					}
					$(".imgbox").append(str)
				}
			})
			$("#banner").banner({
				items:$("#banner").children(".imgbox").children("img"),
				left:$("#banner").children(".btns").children("#left"),
				right:$("#banner").children(".btns").children("#right"),
			//	list:$(".banner").children(".list").children("span"),
		        moveTime:200,
		        autoPlay:true,
		        delayTime:2000,
			});
			
		})
	}
	return aa;
});

