import React from 'react';
import './index.css';

class Login extends React.Component {

    render() {
        return(
            <div className="col-md-4 col-md-offset-4">
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">欢迎登录MMall系统</h3>
                    </div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    placeholder="请输入用户名"
                                    className="form-control"
                                    autoComplete="off"
                                    autoFocus
                                    onKeyUp={(e) => this.onInputKeyup(e)}
                                    onChange={(e) => this.onInputChange(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    name="password"
                                    placeholder="请输入密码"
                                    className="form-control"
                                    onKeyUp={(e) => this.onInputKeyup(e)}
                                    onChange={(e) => this.onInputChange(e)}
                                />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                onClick={() => this.onSubmit()}>
                                登录
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;