/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api');

class App {
	constructor(){

	}
	initServer(){
		//初始化的工作
		
		return (request,response)=>{
			let { url } = request;	//==>解构赋值let url = request.url
			//express框架  app.use(static('public))
			// const staticPrefix = path.resolve(process.cwd(),'public');

			//所有以action结尾的url，都认为是ajax；
			if(url.match('action')){
				let body = apiServer(url);
				response.writeHead(200,'resolve ok',{'X-powered-by':'Node.js'})
				response.end(body)
			}else{
				//每个请求逻辑 根据url进行代码分发
			let body = staticServer(url);
			response.writeHead(200,'resolve ok',{'X-powered-by':'Node.js'})
			response.end(body)

			}
		}
	}
}

module.exports =  App