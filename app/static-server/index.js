
/**
 * By  Josh
 * 静态资源服务
 */


const fs = require('fs');
const path = require('path');

//得到路径
			let getPath = url=> path.resolve(process.cwd(),'public',`.${url}`);
			

            let staticFunc = (url)=>{
				if (url =='/'){
					url = '/index.html';
				}
				let _path = getPath(url);
                let body = '';
                try{
                   body = fs.readFileSync(_path)
                }catch(error){
                    body = `oops! NOT FOUND${error.stack}`
                }
				return body;
			};

module.exports = staticFunc