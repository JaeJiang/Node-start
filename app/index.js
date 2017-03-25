/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');

class App {
	constructor(){

	}
	initServer(){
		//初始化的工作
		
		return (request,response)=>{
			let { url } = request;	//==>let url = request.url
			//express框架  app.use(static('public))
			// const staticPrefix = path.resolve(process.cwd(),'public');
			
			
			//每个请求逻辑
			let body = staticServer(url);
			response.end(body)

		}
	}
}

module.exports =  App