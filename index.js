
// var another = require('test');

// console.log(another);


const http = require('http');  //HTTP模块
const PORT = 7000;				//指定端口7000
const App =require('./app');	//app模块
const server = new App();		
http.createServer(server.initServer()).listen(PORT,()=>{
	console.log(`server listening on port ${PORT}`)

});



