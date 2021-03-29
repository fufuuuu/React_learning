
class MUtil {
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success: res => {
                    if(0 === res.status) {
                        // 登录成功
                        typeof resolve === 'function' && resolve(res.data, res.msg);
                    } else if (10 === res.status) {
                        // 未登录
                        this.doLogin();
                    } else {
                        // 登录失败
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error: err => {
                    typeof reject === 'function' && reject(err.statusText);
                }
            });  
        });
    }

    doLogin() {
        // encodeURIComponent处理特殊字符
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }

    getUrlParam(name) {
        let queryString = window.location.search.split('?')[1] || '';
        // 非&的多个字符
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let result = queryString.match(reg);
        // result: [完成匹配内容，第一个括号，第二个括号。。。]
        return result ? encodeURIComponent(result[2]) : null;
    }

    successTips(successMsg) {
        alert(successMsg || '操作成功');
    }

    errorTips(errMsg) {
        alert(errMsg || '好像哪里不对了。。。');
    }

    // TODO: dui

    setStorage(name, data){
        let dataType = typeof data
        if(dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data));
        } else if (['number', 'string', 'boolean'].indexOf(dataType >= 0)) {
            window.localStorage.setItem(name, data);
        } else {
            alert('该类型不能用于本地存储');
        }
    }

    getStorage(name) {
        let data = window.localStorage.getItem(name);
        if(data) {
            return JSON.parse(data);
        } else {
            return '';
        }
    }

    removeStorage(name) {
        window.localStorage.removeItem(name);
    }
}

export default MUtil;