import React, { Component } from 'react'
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData'
class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    data: PropTypes.any,
    saveData: PropTypes.func.isRequired
  }
  constructor (props) {
    super(props)
    this.state={
      username: props.data,
      content: '',
      createdTime: ''
    }
  }
  handleUsernameChange (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  //子组件向父组件传递参数
  handleSubmit () {
    if (this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username,
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({content: ''})
  }

  handleOnBlur (e) {
    this.props.saveData(e.target.value)
  }
//将用户名保存在localstorage中
  // _saveUserName(username) {
  //   localStorage.setItem('username', username)
  // }

  // _loadUsername() {
  //   const username = localStorage.getItem('username')
  //   if(username) {
  //     this.setState({ username })
  //   }
  // }
  //挂载前从localstorage中读取username
  // componentWillMount() {
  //   this._loadUsername()
  // }
  //挂载时
  componentDidMount() {
    this.textarea.focus()
  }
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>用户名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
              onBlur={this.handleOnBlur.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容：</span>
          <div className='comment-field-input'>
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
              ref={(textarea) => this.textarea = textarea}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>
            发布
          </button>
        </div>
      </div>
    )
  }
}
CommentInput = wrapWithLoadData(CommentInput, 'username')
export default CommentInput