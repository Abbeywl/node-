require.config({
	 shim: {
        'ba': ['jq'],
   },
    paths: {
        "jq": "../libs/jquery",
        "ba":"../libs/jquery.banner.1.1.0",
        "in":"index"
    }
});
require(["jq","ba","in"],function(_,b,c){
		c();
		//你的index.js的return的位置要放在function外面，还有，index.js里面ajax的那个url是啥，你写错了
	
})
