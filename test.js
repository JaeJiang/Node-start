

//Promise
//prototype ==>then/catch
//静态方法 ==》 all/race/resolve/reject

//第一步：new Promise


let p = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'hello josh')
});
console.log(p)


// then 可接受俩参数，第一个是resolve结果
//第二个是reject结果

// 1.将这些回调函数 存入处理队列
// 2.如果Promise 已经是 fulfilled或者reject的状态了。 autorun

p.then(val=>
    console.log(`resolve val is ${val}`)
    ,val=>
    console.log(`reject val is ${val}`)
);
p.catch(val=>console.log(`catch val is ${val}`))