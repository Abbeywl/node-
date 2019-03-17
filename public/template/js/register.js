
	$("#reb").load("style-public.html  .pase2")

	
	class Register{
			constructor(){
				this.url="http://localhost:3000/api/user?dataName=user&start=1&q=&rule=&count=3";
				this.init()
			}
			init(){
				var that=this;
				$("#regBtn").click(function(){
					that.load()
				})
			}
			load(){
				$.ajax({
					url:this.url,
					data:{
						username:$("#user").val(),
						password:$("#passWord").val()
					},
					success:function(res){
						switch(res){
							case "0":
							console.log("重名")
								$(".msg").html("重名");
								break;
							case "1":
							console.log("成功，3秒后跳转到登录")
							
								$(".msg").html("成功，3秒后跳转到登录");
								setTimeout(()=>{
									location.href="landing.html"
									console.log(1)
								},3000)
								
								break;
							case "2":
								console.log("不允许为空")
								$(".msg").html("不允许为空");
								break;
						}
					}
					
				})
			}
		}
		
		new Register()