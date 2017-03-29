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
			//返回字符串或者buffer
			let body = '';
			let headers = {};
			if(url.match('action')){
				body = JSON.stringify(apiServer(url));
				headers = {
					'Content-Type':'application/json'
				};
				let finalHeader = Object.assign(headers,{'X-powered-by':'Node.js'})
				response.writeHead(200,'resolve ok',finalHeader)
				response.end(body)
			}else{
				//每个请求逻辑 根据url进行代码分发
			staticServer(url).then((body)=>{
				let finalHeader = Object.assign(headers,{'X-powered-by':'Node.js'})
				response.writeHead(200,'resolve ok',finalHeader)
				response.end(body)
			 });
		
		}
			
		
		}
	}
}

module.exports =  App