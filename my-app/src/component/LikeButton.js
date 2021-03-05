import React, {Component} from 'react'
class LikeButton extends Component {
  constructor () {
    super()
    this.state = { isLiked: false }
  }
  handleClickOnLikeButton () {
    console.log('Star!')
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '已赞' : '点赞'} 👍
      </button>
    )
  }
}

export default LikeButton