$("#p1").load("style-public.html  .pase1")
	$("#p2").load("style-public.html  .pase2")
	$(function(){
		$("img[original]").lazyload({ placeholder:"images/color3.gif" });
		$('.demo2').Tabs({
			event:'click'
		});
});   

$(".small-img").find("img").click(function(){
//	console.log($(".imgbox img"))
	$(".imgbox img").attr("src",$(this).attr("src"))
	$(this).parent("p").css("border","1px solid red").siblings("p").css("border","1px solid #e0e0e0")
})
$(".ewm").hover(function(){
	$(this).siblings("img").css("display","block")
},function(){
	$(this).siblings("img").css("display","none")
})
$("#addcar").click(function(){
	location.href="goods.html"
})
