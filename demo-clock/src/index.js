import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Clock extends Component {
  constructor() {
    super()
    this.state={
      date: new Date()
    }
  }

  componentWillMount() {
    this.timeID = setInterval(() =>{
      this.setState({date: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  render() {
    return(
      <div className='demo-clock'>
        <p>It is {this.state.date.toLocaleTimeString()} now.</p>
      </div>
    );
  }
}

class Index extends Component {
  constructor () {
    super()
    this.state = { isShowClock: true }
  }
  handleShowOrHide () {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }
  render () {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null }
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或隐藏时钟
        </button>
      </div>
    )
  }
}
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)