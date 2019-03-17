$("#goods-b").load("style-public.html .pase2")
class Car{
	constructor(options){
		this.url="/api/cart/read";
		this.load()//开始拿总数据
		this.addeEvent()//事件委托，添加事件
	}
	load(){
		var that=this;
		$.ajax({
			url:this.url,
			success:function(data){
			that.data=data.result;
			//拿cookie数据
				that.display()
				// console.log(data)
//				 console.log(this.goods)
			}
		})
	}
	
	getCookie(){
		 this.goods = $.cookie("goods");
		 console.log(this.goods)

        // 3.渲染页面
        // this.display()
	}
	display(){
		
		var str="";
		for(var i=0;i<this.data.length;i++){
			str+=`
				<form action="" method="post" class="good-form" data-id="${this.data[i]._id}">
				<input type="checkbox" name="" id="" value="" />
				<img src="${this.data[i].detail.auth_icon}"/>
				<span class="name">${this.data[i].title}</span>
				<span class="dj">${this.data[i].des} 元</span>
				<span class="price">${this.data[i].des}</span><i>元</i>
				<span class="clear">删除</span>
			</form>`
		}
		console.log(str)
		$(".goods-list").html(str);
	}
	addeEvent(){
		var that=this;
		$(".goods-list").on("click",".clear",function(){
			that.id=$(this).parent().attr("data-id");
			$(this).parent().remove();
			that.setCookie(function(index){
				that.goods.splice(index,1)
			})
			
			///开始存点击元素的id,删除DOM
//			that.id=$(this).parent()
		})
		$(".goods-list").on("input","#num",function(){
			
			that.id = $(this).parent().attr("data-id");
            that.num = $(this).val();
            var xj=parseFloat($(this).siblings(".price").html())*that.num
//          console.log(xj)
            $(this).siblings(".price").html(xj+".00")
            $(".sum").html(xj+=xj)
            that.setCookie(function(index){
                that.goods[index].num = that.num;
            })
		})
//		console.log(that.goods[0].id)
//		console.log($(".good-list").children().children(".price").html())
		
	}
	setCookie(cb){
        // 修改cookie，可以删，可以改，取决于回调函数中怎么做
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id == this.id){
                cb(i)
            }
        }
        //不管如何都要将cookie设置回去，因为上面所有操作，都只是在操作数组
        $.cookie("goods",JSON.stringify(this.goods));
    }
	
}

new Car({
	url:"http://localhost:3000/api/product?dataName=home&start=1"
})
