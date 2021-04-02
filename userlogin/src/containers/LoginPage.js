import React, {Component} from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'


export default class LoginPage extends Component {
  render(){
    return(
      <div className="body">
        <Card />
        <Footer/>
      </div>
    )
  }
}