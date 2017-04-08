/*
 * @Author slashhuang
 * 静态资源服务
 */


 //静态页面
//express框架 app.use(static('public'))绝对路径
//DRY
const path = require('path');
const fs = require('fs');
let getPath = url=>path.resolve(process.cwd(),'public',`.${url}`);
let staticFunc = (ctx)=>{
		let { url } = ctx.req;
		let { resCtx } = ctx;
		return new Promise((resolve,reject)=>{
			if(url=='/'){
				url = '/index.html';
			}
			let _path=getPath(url);
			//用fs.readfile读取文件 返回静态页面
			let body = fs.readFile(_path,(err,data)=>{
				if(err){
					resCtx.body= `NOT FOUND${err.stack}`
				}
				resCtx.body = data;
				resolve()
			})	
			})
		};

module.exports = staticFunc
