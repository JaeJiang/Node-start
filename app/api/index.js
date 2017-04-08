/*
 * api server
 */
//  判断get和post  处理get或者post请求

 module.exports=(ctx)=>{
 	let { url,method,context } = ctx.req; //==> 解构赋值 let url = request.url
	let { reqCtx,resCtx } = ctx;
 	
// request.context = {
// 				body:'',
// 				query:{},
// 				method:'get'go
// 			};
 	let apiMap={
		'/list.action':['go','to','josh'],
		'/user.action':['花花','草草','嘿嘿嘿']
 	};

	method = method.toLowerCase();

	return Promise.resolve({
		then:(resolve,reject)=>{
 	// 因为我们对method没有过滤
 		if(method == 'get'){ //localhost:7000?a=1&b=2
			resCtx.body = apiMap[url]
 			return Promise.resolve()
 		}else{
 			let {body} = reqCtx;
 			//处理post B post  ==socket== S
 			resCtx.body = body
 		}
		 resolve()
	 }})
 }