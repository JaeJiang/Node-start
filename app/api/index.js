/*
 *api server 
*/

module.exports = (url)=>{
    let apiMap={
        '/list.action':['猫','狗','车','白云'],
        '/user.action':['josh','jiang','jae']
    }
    return Promise.resolve(apiMap[url])
}