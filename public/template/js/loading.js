
$("#footer").load("style-public.html  .pase2")
//三级导航
$(".classify").find("h3").mouseenter(function(){
	$(this).siblings(".nav-s").css("display","block").find(".li-active").mouseenter(function(){
	$(this).children(".nav-ss").css("display","block");})

})

$(".nav-s").mouseleave(function(){
	$(this).css("display","none").find(".li-active").mouseleave(function(){
	$(this).children(".nav-ss").css("display","none");
	});
})

class Land{
	constructor(){
		this.url="http://www.liyangyf.com/ctrl/login.php";
		this.init();
	}
	init(){
		var that=this;
		$("#sunb").click(function(){
			that.load()
		})
	}
	load(){
		var that=this;
		$.ajax({
			url:this.url,
			data:{
				user:$("#user").val(),
				pass:$("#pass").val()
			},
			success:function(res){
				switch(res){
					case "0":
						$(".cheak").html("用户名密码不符合");
						break;
					case "1":
						$(".cheak").html("请重新登录");
						break;
					default:
//					console.log(JSON.parse(res))
						that.res=JSON.parse(res);
						$(".cheak").html("登录成功");
						setTimeout(()=>{
							
							location.href="../index.html"
						},1000)
				}
			}
		})
	}
	
}

		new Land()
