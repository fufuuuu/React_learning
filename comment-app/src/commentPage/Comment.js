import React, {Component} from 'react'
import LikeButton from '../likeButton/LikeButton'
class Comment extends Component {

  render() {
    return(
      <div className='comment'>
        <div className='comment-username'>
          <span>{this.props.comment.username}</span>:
        </div>
        <p>{this.props.comment.content}</p>
        <div className='comment-like'><LikeButton></LikeButton></div>
      </div>
    );
  }
}

export default Comment