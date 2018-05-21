/**
 * 让fetch也可以timeout
 *  timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，它在后台仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=10000]   单位：毫秒，这里设置默认超时时间为10秒
 * @return 返回Promise
 */
import { Toast  } from 'antd-mobile';
function timeout_fetch(fetch_promise,timeout = 10000) {
    let timeout_fn = null; 

    //这是一个可以被reject的promise
    let timeout_promise = new Promise(function(resolve, reject) {
        timeout_fn = function() {
            reject('timeout promise');
        };
    });

    //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
    let abortable_promise = Promise.race([
        fetch_promise,
        timeout_promise
    ]);

    setTimeout(function() {
        timeout_fn();
    }, timeout);

    return abortable_promise ;
}

let common_url = 'http://192.168.1.55:81/';  //服务器地址
let token = '';   
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
export function FetchRequest(url, method, params = ''){
    let fetchOptions = {
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            "app": "1",
            //"Content-Type": "application/json;charset=UTF-8",
            "accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
        },
        method:method,
    }
    
    if(params == ''){   //如果网络请求中带有参数
        return new Promise(function (resolve, reject) {
            timeout_fetch(fetch(common_url + url, {
                method: fetchOptions.method,
                headers: fetchOptions.headers
            })).then((response) => response.json())
                .then((res) => {
                    console.log('res:',url,res);  //网络请求成功返回的数据
                    resolve(res);
                })
                .catch( (err) => {
                    console.log('err:',url, err);     //网络请求失败返回的数据       
                    reject(err);
                });
        });
    }else{   //如果网络请求中没有参数

        if (typeof FormData != "undefined") {
            let form = new FormData();
            for (let key in params) {
                form.append(key, encodeURIComponent(params[key]));
            }
            fetchOptions.body = form;
        }
        alert(JSON.stringify(fetchOptions));
        return new Promise(function (resolve, reject) {
            timeout_fetch(fetch(common_url + url, {
                method: fetchOptions.method,
                headers: fetchOptions.headers,
                body:fetchOptions.body  //body参数，通常需要转换成字符串后服务器才能解析
            })).then((response) => response.json())
                .then((responseData) => {
                    console.log('res:',url, responseData);   //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch( (err) => {
                    alert('res:'+url+JSON.stringify(err));
                    console.log('err:',url, err);   //网络请求失败返回的数据  
                    reject(err);
                });
        });
    }
}

//访问地址添加token和密钥
export function setUrlMd5(url) {
    var times = (new Date()).getTime();
    var user = this.modules.user;
    var hasData = url.indexOf('?') > 0;
    if (!user) {
        //使用sessionId
        if (this.modules.nologin_sessionId) {
            if (!hasData) url += "?sessionId=" + this.modules.nologin_sessionId;
            else url += "&sessionId=" + this.modules.nologin_sessionId;
            hasData = true;
        }
        return url;
    }

    //生成校验的key(MD5)
    if (url.indexOf('token=') == -1) {
        if (!hasData) url += "?qqzitoken=" + user.token;
        else url += "&qqzitoken=" + user.token;
        hasData = true;
    }
    var temp = url.substring(exports.static_app__domain.length - 1) + user.id + user.secret + times;
    console.log("md5 ajax : " + temp);
    var md5 = this.md5(temp);
    //var pos1= options.url.indexOf('qqzitoken');
    var addStr = "secret=" + md5 + "&ts=" + times;
    if (!hasData) url += "?" + addStr;
    else url += "&" + addStr;
    return url;
}