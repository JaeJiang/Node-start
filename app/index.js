/** 
 * 主要核心逻辑入口
 */

const fs = require('fs');
const path = require('path');

class App {
	constructor(){

	}
	initServer(){
		//初始化的工作
		
		return (request,response)=>{
			let { url } = request;	//==>let url = request.url
			//express框架  app.use(static('public))
			const staticPrefix = path.resolve(process.cwd(),'public');
			//每个请求逻辑
			let staticFunc = (url)=>{
				if (url =='/'){
					url = '/index.html';
				}
				let _path = path.resolve(staticPrefix,`.${url}`)
				fs.readFile(_path,'utf-8',(err,data)=>{
					response.end(data)
				})
			};
			staticFunc(url);

			// if (url == '/css/index.css'){
			// 	fs.readFile('./public/css/index.css','utf-8',(err,data)=>{
			// 		response.end(data)
			// 	})
			// }
			// if (url == '/js/index.js'){
			// 	fs.readFile('./public/js/index.js','utf-8',(err,data)=>{
			// 		response.end(data)
			// 	})
			// }
			// if (url == '/'){
			// 	fs.readFile('./public/index.html',(error,data)=>{
				
			// 	response.end(data)
			// })
			// }
			
		}
	}
}

module.exports =  App