function requset(data){
    // 设置默认url
    const url  = 'https://api.apishop.net/common/dogFamily/'
    
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest(); // 建立请求
        // const url  = 'https://api.apishop.net/common/dogFamily/'
        // xhr.setRequestHeader('') 请求头 目前暂不设置
        xhr.open(data.method,url+data.url) // 设置请求方式 请求地址 第三个参数默认异步 忽略
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
               resolve(xhr.response) //返回的数据体
            }else if(xhr.status != 200){
                reject('本次状态请求失败')
            }
        }

        // 请求的内容，如果是GET请求则传空
        xhr.send(data.XML)


        
    })
}

const data = {
    method:'GET',
    url:'接收一个url',
    XML:'',
}

requset(data)
.then(res=>{
    return res
})
.catch(res=>{
    return res
})






