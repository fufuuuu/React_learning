import React,{ Component } from 'react'

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state={
      username : '',
      password : ''
    }
  }

  handleUsernameChange(event){
    this.setState({username: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleUsernameBlur(event){

  }

  handleSubmit(){
    
  }
  render() {
    return(
      <div className="MainContent">
        <div className="MainContent-input">
          <div className="MainContent-input-username">
            <span className='username'>用户名：</span>
            <input placeholder="Input your username" value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)}></input>
          </div>

          <div className="MainContent-input-password">
            <span className="password">密&#12288;码：</span>
            <input type="password" placeholder="Input your password" onChange={this.handlePasswordChange.bind(this)}></input>
          </div>
        </div>
        <div className="MainContent-buttons">
          <button className="sign-in">登&#12288;录</button>
          <button className="sign-up">注&#12288;册</button>
        </div>

      </div>
    )
  }
}

export default MainContent