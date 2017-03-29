
/**
 * By  Josh
 * 静态资源服务
 */


const fs = require('fs');
const path = require('path');

//得到路径
			let getPath = url=> path.resolve(process.cwd(),'public',`.${url}`);
			

            let staticFunc = (url)=>{
				
				return new Promise((resolve,reject)=>{
                    if (url =='/'){
                        url = '/index.html';
                    }
                    let _path = getPath(url);
                    let body = fs.readFile(_path,(err,data)=>{
                            if(err){
                            reject(`oops! NOT FOUND${err.stack}`)
                            }
                            resolve(data)
                    })
                })
			};

module.exports = staticFunc