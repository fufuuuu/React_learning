import React, { Component } from 'react'

import CommentInput from './CommentInput'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import wrapWithLoadData from './wrapWithLoadData'
class CommentApp extends Component {
  static propTypes = {
    saveData: PropTypes.func.isRequired,
    data: PropTypes.any
  }
  constructor (props) {
    super(props)
    this.state = {
      comments: props.data || []   //这里应该加一个判断，不然push的时候会报错的
    }
  }

  // componentWillMount() {
  //   this._loadComments()
  // }
  handleSubmitComment (comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })
    // this._saveComments(comments)
    this.props.saveData(comments)
  }

  handleDeleteComment(index) {
    console.log(index)
    const comments=this.state.comments
    comments.splice(index, 1)
    this.setState( {comments} )
    // this._saveComments(comments)
    this.props.saveData(comments)
  }

  // _loadComments() {
  //   let comments = localStorage.getItem('comments')
  //   if(comments){
  //     comments = JSON.parse(comments)
  //     this.setState( { comments })
  //   }
  // }

  // _saveComments(comments) {
  //   localStorage.setItem('comments', JSON.stringify(comments))
  // }
  render() {
    return(
      <div className='wrapper'>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
    );
  }
}

CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp