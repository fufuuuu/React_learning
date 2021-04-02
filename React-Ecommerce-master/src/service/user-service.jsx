class User {

    checkLoginInfo(loginInfo){
        let username = loginInfo.username;
        let password = loginInfo.password;

        if(typeof username !== 'string' || username.length === 0) {
            return {
                status: false,
                msg: '用户名不为空'
            }
        }

        if(typeof password !== 'string' || password.length === 0) {
            return {
                status: false,
                msg: '密码不为空'
            }
        }

        return {
            status: true,
            msg: '验证成功'
        }
    }

}

export default User;