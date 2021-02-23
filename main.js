const $xhrurl = 'www.baidu.com/'
function xhr(url,{data=null,method='POST'} = {}){
    console.log(data)
    return new Promise((resolve,reject)=>{
        let $xhr = new XMLHttpRequest()
        $xhr.open(method,$xhrurl+url) // 最后一个参数 是否异步 通常情况是异步，不需要操作
        $xhr.onreadystatechange = function(){
            if($xhr.readyState === 4){
                if($xhr.status >= 200 || $xhr.status <= 300 || $xhr.status === 304){
                    resolve($xhr.response)
                }else{
                    $xhr.abort()
                    console.log('出错了')
                }
            }else{
                reject($xhr)
            }

        }
        // 最后设置一下token
        $xhr.setRequestHeader('token' , 'xxxxxxxx')
        $xhr.send(data)
    })
}






