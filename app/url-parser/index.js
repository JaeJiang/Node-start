/*
 * url-parser
 * 处理客户端数据
 */

//处理POST请求

 // request: query + body + method



module.exports = (ctx)=>{
	//原型链readable stream eventEmitter
	let { method,url,context } = ctx.req;
	let { reqCtx } = ctx;
	method = method.toLowerCase();
	return Promise.resolve({
		then:(resolve,reject)=>{
				
			if(method == 'post'){
				let data = '';
		 		//paused flow 
		 		//paused ===> flow
		 		request.on('data',(chunk)=>{
			 		data += chunk;
			 	}).on('end',()=>{
			 		reqCtx.body = JSON.parse(data);
			 		//通知下一个流程
			 		resolve()
			 	});
			}else{
				resolve()
			}
		}
	})	 		
} 
