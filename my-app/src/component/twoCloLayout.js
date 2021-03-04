import React, {Component} from 'react'

class TwoCloLayout extends Component {
  render() {
    return (
      <div className='two-clo-layout'>
        <div className='sidebar'>
          {this.props.children[0]}
        </div>
        <div className='main'>
          {this.props.children[1]}
        </div>
      </div>
    );
  }
}

export default TwoCloLayout