/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path')

class App {
	constructor(){

	}
	initServer(){
		//初始化的工作
		
		return (request,response)=>{
			let { url } = request;	//==>let url = request.url
			
			//每个请求逻辑
			if (url == '/css/index.css'){
				fs.readFile('./public/css/index.css','utf-8',(err,data)=>{
					response.end(data)
				})
			}
			if (url == '/js/index.js'){
				fs.readFile('./public/js/index.js','utf-8',(err,data)=>{
					response.end(data)
				})
			}
			
			fs.readFile('./public/index.html',(error,data)=>{
				// response.end(JSON.stringify(_package))
				response.end(data)
			})
			
		}
	}
}

module.exports =  App