
class Goods{
	constructor(options){
	this.url = options.url;
	this.dispaly()
	//使用时间委托绑定事件
	this.addEvent()
	
	}
	dispaly(){

		$.ajax({
			url:"http://localhost:3000/api/product?dataName=home&start=1",
			success:function(data){
				// console.log(data);
				var str="";
				for(var i=0;i<10;i++){
					str+=`
						<div class="box" index="${data.page_data[i]._id}">
							<img src="${data.page_data[i].detail.auth_icon}">
							<span>${data.page_data[i].des} 元</span>
							<p>${data.page_data[i].title}</p>
							<em>加入购物车</em>
						</div>
					`
				}
				$(".tab_box").children("div").append(str);
			}
			
		})
	}
	//绑定事件
	addEvent(){
		var that=this;
		$(".tab_box").on("click","em",function(event){
			var that = this;
			$.ajax({
				url:"/api/cart",
				data:{id:$(that).parent().attr("index")},
				success:(res)=>{
					alert(res.msg)
				}
			})
			// that.index = $(this).parent().attr("index");
			// // console.log(that.index)
			// var e=event|| window.event;
			// var target= event.target || event.srcElement;
			// console.log(event.target.nodeName)
// 			if(event.target.nodeName=="EM"){
// //				//获取当前点击的货号塞到index中
// 				console.log(target.parentNode)
// 				that.id=target.parentNode.attr("index");
// 				// console.log(that.id)
// //				//准备存储cookie
// 				that.setGoods();
// 			}
		})
	}
	
// 	//存储cookie
// 	setGoods(){
//
// 		this.goods=getCookie("goods")===""?[]:getCookie("goods");
// //		console.log(this.goods[0].id,this.index)
// 		if(this.goods.length < 1){
//             //直接存，存货号和数量
//             this.goods.push({
//                 id:this.index,
//                 num:1
//             })
//         }else{
//             var onoff = true;
//             // 不是第一次，goods有长度，先判断是否存在老的，如果存在老的，增加数量同时修改开关，结束循环
//             for(var i=0;i<this.goods.length;i++){
//                 if(this.goods[i].id === this.index){
//                     this.goods[i].num++;
//                     onoff = false;
//                     break;
//                 }
//             }
//             // 反之，如果开关在循环结束后，没有被关闭，说明没有找到重复数据，直接新增
//             if(onoff){
//                 this.goods.push({
//                     id:this.index,
//                     num:1
//                 })
//             }
// //          console.log(this.index)
//         }
//
//         // 其实以上所有操作只是修改读取并编译之后的数组，并没有操作到cookie，最后还需要转成字符之后，设置给cookie
//         setCookie("goods",JSON.stringify(this.goods));
// 	}
//
}
new Goods({
	url:"http://localhost:3000/api/product?dataName=home&start=1"
})
