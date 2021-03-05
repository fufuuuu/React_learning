import React, { Component } from 'react'

class Card extends Component {
  render() {
    return(
      <div className="card ">
        <div className="card-content" dangerouslySetInnerHTML={{__html: this.state.content}}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Card