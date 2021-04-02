import React, { Component } from 'react'
import HintContent from './HintContent'
import MainContent from './MainContent'

class Card extends Component {

  render() {
    return  (
      <div className="loginCard">
        <HintContent />
        <MainContent />
      </div>
    )
  }
}

export default Card