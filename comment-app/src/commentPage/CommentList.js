import React, { Component } from 'react'
import Comment from './Comment'
class CommentList extends Component {
  static defaultProps = {
    comments: [{username:'zjf',  content:'its a good day'}]
  }
  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => <Comment comment={comment} key={i}></Comment>)}
      </div>
    )
  }
}

export default CommentList