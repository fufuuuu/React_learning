import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Header extends Component {

  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.state = { themeColor: '' }
  }

  componentWillMount() {
    this._updateThemeColor()
  }

  _updateThemeColor() {
    const { store } = this.context
    const state = store.getState()
    this.setState( {themeColor: state.themeColor} )
  }
  render () {
    return (
      <h1 style={{ color : this.state.themeColor}}>this is the title and default color is red</h1>
    )
  }
}
export default Header